/*
    Search functionality demo.
    Here we pull required data from Contentful, specifically Person topic content types only for now.
    Then we transform the received data in a format which can be consumed by Algolia and create the Algolia Search index.
    Here's a good article explaining the process: https://www.contentful.com/blog/add-algolia-instantsearch-to-nextjs-app/
 */

const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");
const richTextPlainTextRenderer = require("@contentful/rich-text-plain-text-renderer");

async function callContentful(query, variables) {
    try {
        const data = await fetch(
            `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_API}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query, variables }),
            },
        ).then((response) => response.json());
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function getPaginatedPersonTopic(page) {
    const queryLimit = 9;
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;

    const variables = { limit: queryLimit, skip };

    const query = `query getPaginatedPersonTopic($limit: Int!, $skip: Int!) {
        topicPersonCollection(limit: $limit, skip: $skip, order: name_DESC) {
            total
            items {
                sys {
                    id
                }
                name
                website
                location
                bio {
                    json
                }
            }
        }
    }`;

    const response = await callContentful(query, variables);

    const { total } = response.data.topicPersonCollection;
    const posts = response.data.topicPersonCollection.items
        ? response.data.topicPersonCollection.items
        : [];

    return { posts, total };
}

async function getAllPersonTopics() {
    let page = 1;
    let shouldQueryMorePosts = true;
    const returnPosts = [];

    while (shouldQueryMorePosts) {
        const response = await getPaginatedPersonTopic(page);

        if (response.posts.length > 0) {
            returnPosts.push(...response.posts);
        }

        shouldQueryMorePosts = returnPosts.length < response.total;
        page++;
    }

    return returnPosts;
}

function transformPersonTopicToSearchObjects(posts) {
    const transformed = posts.map((post) => {
        return {
            objectID: post.sys.id,
            name: post.name,
            website: post.website,
            location: post.location,
            bio: richTextPlainTextRenderer.documentToPlainTextString(post.bio.json),
        };
    });

    return transformed;
}

(async function () {
    dotenv.config();
    dotenv.config({ path: `.env.local`, override: true });

    try {
        const posts = await getAllPersonTopics();
        const transformed = transformPersonTopicToSearchObjects(posts);

        if (posts.length > 0) {
            const client = algoliasearch(
                process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
                process.env.ALGOLIA_SEARCH_ADMIN_KEY,
            );

            const index = client.initIndex("next-contentful-starterkit");
            index.setSettings({
                highlightPreTag: '<strong>',
                highlightPostTag: '</strong>',
                attributesToSnippet: [
                    'bio',
                ]
            })
            const algoliaResponse = await index.saveObjects(transformed);

            console.log(
                `🎉 Sucessfully added ${
                    algoliaResponse.objectIDs.length
                } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
                    "\n",
                )}`,
            );
        }
    } catch (error) {
        console.log(error);
    }
})();