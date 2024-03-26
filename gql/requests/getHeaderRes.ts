import * as Utils from '@contentstack/utils'
const liveEdit = process.env.CONTENTSTACK_LIVE_EDIT_TAGS === 'true'

import { graphqlClient } from '#/lib/graphqlClient'
import { graphql } from '#/lib/graphql'
import { HeaderProps } from '#/types/layout'

export default async function getHeaderRes(): Promise<HeaderProps> {
  const headerQuery = graphql(`
    query HeaderQuery {
      all_header {
        items {
          title
          logoConnection {
            edges {
              node {
                url
                filename
              }
            }
          }
          navigation_menu {
            label
            page_referenceConnection {
              totalCount
              edges {
                node {
                  ... on Page {
                    title
                    url
                    system {
                      uid
                      content_type_uid
                    }
                  }
                }
              }
            }
          }
          notification_bar {
            show_announcement
            announcement_text {
              json
            }
          }
          system {
            uid
          }
        }
      }
    }
  `)
  const res = await graphqlClient(false).request(headerQuery, {})
  const header = res.all_header.items[0]

  const transformed = {
    ...header,
    logo: header.logoConnection.edges[0].node,
    navigation_menu: header.navigation_menu.map((item: any) => ({
      ...item,
      page_reference: item.page_referenceConnection.edges.map((edge: any) => ({
        ...edge.node,
        uid: edge.node.system.uid,
        _content_type_uid: edge.node.system.content_type_uid,
      })),
    })),
    uid: header.system.uid,
    notification_bar: {
      ...header.notification_bar,
    },
  }

  Utils.GQL.jsonToHTML({
    entry: transformed,
    paths: ['notification_bar.announcement_text'],
    renderOption: renderOption,
  })

  liveEdit && Utils.addEditableTags(transformed, 'header', true)

  return transformed
}

export const renderOption = {
  span: (node: any, next: any) => next(node.children),
}
