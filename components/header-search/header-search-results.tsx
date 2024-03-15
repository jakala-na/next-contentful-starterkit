import { useInstantSearch, Highlight } from 'react-instantsearch';

export default function HeaderSearchResults() {
    const { results } = useInstantSearch();
    const validQuery = results.query?.length >= 3;

    console.log(results)

    return (
        <>
            {validQuery && (
                <div className="absolute top-full left-0 py-2 px-4 bg-white shadow rounded-md z-10">
                    {results.hits.length ? (
                        <>
                            {results.hits.map((hit, i) => (
                                <div key={i} className="[&:not(:last-child)]:border-b py-2.5">
                                    <h4
                                        className="mb-2"
                                        dangerouslySetInnerHTML={{__html: hit._highlightResult.name.value}}
                                    />

                                    <div
                                        className="text-xs mb-2"
                                        dangerouslySetInnerHTML={{__html: hit._highlightResult.location.value}}
                                    />

                                    <div
                                        className="text-sm"
                                        dangerouslySetInnerHTML={{__html: hit._snippetResult.bio.value}}
                                    />
                                </div>
                            ))}
                        </>
                    ) : 'Sorry, no results were found.'}
                </div>
            )}
        </>
    );
}