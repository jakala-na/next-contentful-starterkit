/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": null,
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Asset",
        "fields": [
          {
            "name": "contentType",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "fileName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "height",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "AssetLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "size",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "transform",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ImageTransformOptions",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "width",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "OBJECT",
        "name": "AssetCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssetFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssetFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssetFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentType",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contentType_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contentType_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "contentType_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentType_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contentType_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contentType_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "description_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "fileName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "fileName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "fileName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "fileName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "fileName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "fileName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "fileName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "height",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "height_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "height_gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "height_gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "height_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "height_lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "height_lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "height_not",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "height_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "size",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "size_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "size_gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "size_gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "size_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "size_lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "size_lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "size_not",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "size_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "title_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "url_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "url_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "url_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "url_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "url_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "url_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "width",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "width_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "width_gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "width_gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "width_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "width_lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "width_lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "width_not",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "width_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "OBJECT",
        "name": "AssetLinkingCollections",
        "fields": [
          {
            "name": "componentDuplexCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentDuplexCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentHeroBannerCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentHeroBannerCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentInfoBlockCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentInfoBlockCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentQuoteCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentQuoteCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "seoCollection",
            "type": {
              "kind": "OBJECT",
              "name": "SeoCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "topicBusinessInfoCollection",
            "type": {
              "kind": "OBJECT",
              "name": "TopicBusinessInfoCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "topicPersonCollection",
            "type": {
              "kind": "OBJECT",
              "name": "TopicPersonCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "topicProductCollection",
            "type": {
              "kind": "OBJECT",
              "name": "TopicProductCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "AssetOrder",
        "enumValues": [
          {
            "name": "contentType_ASC"
          },
          {
            "name": "contentType_DESC"
          },
          {
            "name": "fileName_ASC"
          },
          {
            "name": "fileName_DESC"
          },
          {
            "name": "height_ASC"
          },
          {
            "name": "height_DESC"
          },
          {
            "name": "size_ASC"
          },
          {
            "name": "size_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          },
          {
            "name": "url_ASC"
          },
          {
            "name": "url_DESC"
          },
          {
            "name": "width_ASC"
          },
          {
            "name": "width_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentCta",
        "fields": [
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "ctaText",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "headline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentCtaLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "subline",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentCtaSubline",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "targetPage",
            "type": {
              "kind": "UNION",
              "name": "ComponentCtaTargetPage",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "urlParameters",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentCtaCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ComponentCta",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentCtaFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentCtaFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentCtaFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "ctaText",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ctaText_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ctaText_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "ctaText_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "ctaText_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ctaText_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ctaText_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "headline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "headline_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "headline_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "subline_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subline_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "subline_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "targetPage_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "urlParameters",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "urlParameters_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "urlParameters_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "urlParameters_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "urlParameters_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "urlParameters_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "urlParameters_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentCtaLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentCtaLinkingCollectionsPageCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ComponentCtaLinkingCollectionsPageCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "pageName_ASC"
          },
          {
            "name": "pageName_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ComponentCtaOrder",
        "enumValues": [
          {
            "name": "colorPalette_ASC"
          },
          {
            "name": "colorPalette_DESC"
          },
          {
            "name": "ctaText_ASC"
          },
          {
            "name": "ctaText_DESC"
          },
          {
            "name": "headline_ASC"
          },
          {
            "name": "headline_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          },
          {
            "name": "urlParameters_ASC"
          },
          {
            "name": "urlParameters_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentCtaSubline",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentCtaSublineLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentCtaSublineAssets",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentCtaSublineEntries",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentCtaSublineLinks",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentCtaSublineAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentCtaSublineEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentCtaSublineResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentCtaSublineResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ComponentCtaTargetPage",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Page"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentDuplex",
        "fields": [
          {
            "name": "bodyText",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentDuplexBodyText",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "containerLayout",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "ctaText",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "headline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "image",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "imageStyle",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentDuplexLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "targetPage",
            "type": {
              "kind": "UNION",
              "name": "ComponentDuplexTargetPage",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentDuplexBodyText",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentDuplexBodyTextLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentDuplexBodyTextAssets",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentDuplexBodyTextEntries",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentDuplexBodyTextLinks",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentDuplexBodyTextAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentDuplexBodyTextEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentDuplexBodyTextResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentDuplexBodyTextResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentDuplexCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ComponentDuplex",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentDuplexFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentDuplexFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentDuplexFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "bodyText_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "bodyText_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "bodyText_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "containerLayout",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "containerLayout_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "containerLayout_not",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "ctaText",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ctaText_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ctaText_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "ctaText_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "ctaText_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ctaText_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ctaText_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "headline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "headline_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "headline_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "imageStyle",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "imageStyle_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "imageStyle_not",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "image_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "targetPage_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentDuplexLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentDuplexLinkingCollectionsPageCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ComponentDuplexLinkingCollectionsPageCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "pageName_ASC"
          },
          {
            "name": "pageName_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ComponentDuplexOrder",
        "enumValues": [
          {
            "name": "colorPalette_ASC"
          },
          {
            "name": "colorPalette_DESC"
          },
          {
            "name": "containerLayout_ASC"
          },
          {
            "name": "containerLayout_DESC"
          },
          {
            "name": "ctaText_ASC"
          },
          {
            "name": "ctaText_DESC"
          },
          {
            "name": "headline_ASC"
          },
          {
            "name": "headline_DESC"
          },
          {
            "name": "imageStyle_ASC"
          },
          {
            "name": "imageStyle_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ComponentDuplexTargetPage",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Page"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentHeroBanner",
        "fields": [
          {
            "name": "bodyText",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentHeroBannerBodyText",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "ctaText",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "headline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "heroSize",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "image",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "imageStyle",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentHeroBannerLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "targetPage",
            "type": {
              "kind": "UNION",
              "name": "ComponentHeroBannerTargetPage",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentHeroBannerBodyText",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentHeroBannerBodyTextLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentHeroBannerBodyTextAssets",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentHeroBannerBodyTextEntries",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentHeroBannerBodyTextLinks",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentHeroBannerBodyTextAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentHeroBannerBodyTextEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentHeroBannerBodyTextResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentHeroBannerBodyTextResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentHeroBannerCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ComponentHeroBanner",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentHeroBannerFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentHeroBannerFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentHeroBannerFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "bodyText_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "bodyText_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "bodyText_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "ctaText",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ctaText_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ctaText_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "ctaText_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "ctaText_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ctaText_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "ctaText_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "headline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "headline_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "headline_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "heroSize",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "heroSize_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "heroSize_not",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "imageStyle",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "imageStyle_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "imageStyle_not",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "image_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "targetPage_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentHeroBannerLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentHeroBannerLinkingCollectionsPageCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ComponentHeroBannerLinkingCollectionsPageCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "pageName_ASC"
          },
          {
            "name": "pageName_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ComponentHeroBannerOrder",
        "enumValues": [
          {
            "name": "colorPalette_ASC"
          },
          {
            "name": "colorPalette_DESC"
          },
          {
            "name": "ctaText_ASC"
          },
          {
            "name": "ctaText_DESC"
          },
          {
            "name": "headline_ASC"
          },
          {
            "name": "headline_DESC"
          },
          {
            "name": "heroSize_ASC"
          },
          {
            "name": "heroSize_DESC"
          },
          {
            "name": "imageStyle_ASC"
          },
          {
            "name": "imageStyle_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ComponentHeroBannerTargetPage",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Page"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlock",
        "fields": [
          {
            "name": "block1Body",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentInfoBlockBlock1Body",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "block1Image",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "block2Body",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentInfoBlockBlock2Body",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "block2Image",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "block3Body",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentInfoBlockBlock3Body",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "block3Image",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "headline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentInfoBlockLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "subline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock1Body",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentInfoBlockBlock1BodyLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock1BodyAssets",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock1BodyEntries",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock1BodyLinks",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentInfoBlockBlock1BodyAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentInfoBlockBlock1BodyEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentInfoBlockBlock1BodyResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock1BodyResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock2Body",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentInfoBlockBlock2BodyLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock2BodyAssets",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock2BodyEntries",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock2BodyLinks",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentInfoBlockBlock2BodyAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentInfoBlockBlock2BodyEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentInfoBlockBlock2BodyResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock2BodyResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock3Body",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentInfoBlockBlock3BodyLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock3BodyAssets",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock3BodyEntries",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock3BodyLinks",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentInfoBlockBlock3BodyAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentInfoBlockBlock3BodyEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentInfoBlockBlock3BodyResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockBlock3BodyResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ComponentInfoBlock",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentInfoBlockFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentInfoBlockFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentInfoBlockFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "block1Body_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "block1Body_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "block1Body_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "block1Image_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "block2Body_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "block2Body_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "block2Body_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "block2Image_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "block3Body_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "block3Body_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "block3Body_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "block3Image_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "headline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "headline_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "headline_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "subline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subline_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subline_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "subline_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "subline_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subline_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subline_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentInfoBlockLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentInfoBlockLinkingCollectionsPageCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ComponentInfoBlockLinkingCollectionsPageCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "pageName_ASC"
          },
          {
            "name": "pageName_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ComponentInfoBlockOrder",
        "enumValues": [
          {
            "name": "colorPalette_ASC"
          },
          {
            "name": "colorPalette_DESC"
          },
          {
            "name": "headline_ASC"
          },
          {
            "name": "headline_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "subline_ASC"
          },
          {
            "name": "subline_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentProductTable",
        "fields": [
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "headline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentProductTableLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "productsCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentProductTableProductsCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentProductTableProductsCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "TopicProductFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "subline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentProductTableCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ComponentProductTable",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentProductTableFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentProductTableFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentProductTableFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "headline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "headline_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "headline_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "products",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cfTopicProductNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "productsCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "subline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subline_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subline_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "subline_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "subline_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subline_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subline_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentProductTableLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentProductTableLinkingCollectionsPageCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ComponentProductTableLinkingCollectionsPageCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "pageName_ASC"
          },
          {
            "name": "pageName_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ComponentProductTableOrder",
        "enumValues": [
          {
            "name": "headline_ASC"
          },
          {
            "name": "headline_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "subline_ASC"
          },
          {
            "name": "subline_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentProductTableProductsCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TopicProduct",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ComponentProductTableProductsCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "name_ASC"
          },
          {
            "name": "name_DESC"
          },
          {
            "name": "price_ASC"
          },
          {
            "name": "price_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentQuote",
        "fields": [
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "imagePosition",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentQuoteLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "quote",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentQuoteQuote",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "quoteAlignment",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentQuoteCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ComponentQuote",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentQuoteFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentQuoteFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentQuoteFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "imagePosition",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "imagePosition_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "imagePosition_not",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "image_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "quoteAlignment",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "quoteAlignment_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "quoteAlignment_not",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "quote_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "quote_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "quote_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentQuoteLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentQuoteLinkingCollectionsPageCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ComponentQuoteLinkingCollectionsPageCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "pageName_ASC"
          },
          {
            "name": "pageName_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ComponentQuoteOrder",
        "enumValues": [
          {
            "name": "colorPalette_ASC"
          },
          {
            "name": "colorPalette_DESC"
          },
          {
            "name": "imagePosition_ASC"
          },
          {
            "name": "imagePosition_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "quoteAlignment_ASC"
          },
          {
            "name": "quoteAlignment_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentQuoteQuote",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentQuoteQuoteLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentQuoteQuoteAssets",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentQuoteQuoteEntries",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentQuoteQuoteLinks",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentQuoteQuoteAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentQuoteQuoteEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentQuoteQuoteResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentQuoteQuoteResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentTextBlock",
        "fields": [
          {
            "name": "body",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentTextBlockBody",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "headline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentTextBlockLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "subline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentTextBlockBody",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentTextBlockBodyLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentTextBlockBodyAssets",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentTextBlockBodyEntries",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentTextBlockBodyLinks",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentTextBlockBodyAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentTextBlockBodyEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ComponentTextBlockBodyResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentTextBlockBodyResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ComponentTextBlockCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ComponentTextBlock",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentTextBlockFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentTextBlockFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ComponentTextBlockFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "body_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "body_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "body_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "headline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "headline_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "headline_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "headline_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "subline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subline_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subline_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "subline_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "subline_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subline_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subline_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentTextBlockLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentTextBlockLinkingCollectionsPageCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ComponentTextBlockLinkingCollectionsPageCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "pageName_ASC"
          },
          {
            "name": "pageName_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ComponentTextBlockOrder",
        "enumValues": [
          {
            "name": "colorPalette_ASC"
          },
          {
            "name": "colorPalette_DESC"
          },
          {
            "name": "headline_ASC"
          },
          {
            "name": "headline_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "subline_ASC"
          },
          {
            "name": "subline_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ContentfulMetadata",
        "fields": [
          {
            "name": "tags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ContentfulTag",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ContentfulMetadataFilter",
        "inputFields": [
          {
            "name": "tags",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataTagsFilter",
              "ofType": null
            }
          },
          {
            "name": "tags_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ContentfulMetadataTagsFilter",
        "inputFields": [
          {
            "name": "id_contains_all",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id_contains_none",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id_contains_some",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ContentfulTag",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "DateTime"
      },
      {
        "kind": "SCALAR",
        "name": "Dimension"
      },
      {
        "kind": "OBJECT",
        "name": "EditorTest",
        "fields": [
          {
            "name": "adminTitle",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "body",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "EditorTestLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "EditorTestCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "EditorTest",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "EditorTestFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "EditorTestFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "EditorTestFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "adminTitle",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "adminTitle_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "adminTitle_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "adminTitle_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "adminTitle_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "adminTitle_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "adminTitle_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "body",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "body_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "body_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "body_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "body_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "body_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "body_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "description_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "EditorTestLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "EditorTestOrder",
        "enumValues": [
          {
            "name": "adminTitle_ASC"
          },
          {
            "name": "adminTitle_DESC"
          },
          {
            "name": "description_ASC"
          },
          {
            "name": "description_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Entry",
        "fields": [
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ComponentCta"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentDuplex"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentHeroBanner"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentInfoBlock"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentProductTable"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentQuote"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentTextBlock"
          },
          {
            "kind": "OBJECT",
            "name": "EditorTest"
          },
          {
            "kind": "OBJECT",
            "name": "FooterMenu"
          },
          {
            "kind": "OBJECT",
            "name": "MenuGroup"
          },
          {
            "kind": "OBJECT",
            "name": "NavigationMenu"
          },
          {
            "kind": "OBJECT",
            "name": "NtAudience"
          },
          {
            "kind": "OBJECT",
            "name": "NtExperience"
          },
          {
            "kind": "OBJECT",
            "name": "Page"
          },
          {
            "kind": "OBJECT",
            "name": "Seo"
          },
          {
            "kind": "OBJECT",
            "name": "TopicBusinessInfo"
          },
          {
            "kind": "OBJECT",
            "name": "TopicPerson"
          },
          {
            "kind": "OBJECT",
            "name": "TopicProduct"
          },
          {
            "kind": "OBJECT",
            "name": "TopicProductFeature"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "EntryCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "EntryFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "EntryFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "EntryFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "EntryOrder",
        "enumValues": [
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "FooterMenu",
        "fields": [
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "facebookLink",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "instagramLink",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "legalLinks",
            "type": {
              "kind": "OBJECT",
              "name": "MenuGroup",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "MenuGroupFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "FooterMenuLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "linkedinLink",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "menuItemsCollection",
            "type": {
              "kind": "OBJECT",
              "name": "FooterMenuMenuItemsCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "FooterMenuMenuItemsCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "MenuGroupFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "twitterLink",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "FooterMenuCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "FooterMenu",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FooterMenuFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "FooterMenuFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "FooterMenuFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "facebookLink",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "facebookLink_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "facebookLink_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "facebookLink_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "facebookLink_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "facebookLink_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "facebookLink_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "instagramLink",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "instagramLink_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "instagramLink_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "instagramLink_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "instagramLink_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "instagramLink_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "instagramLink_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "legalLinks",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cfMenuGroupNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "legalLinks_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "linkedinLink",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "linkedinLink_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "linkedinLink_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "linkedinLink_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "linkedinLink_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "linkedinLink_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "linkedinLink_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "menuItems",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cfMenuGroupNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "menuItemsCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "twitterLink",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "twitterLink_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "twitterLink_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "twitterLink_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "twitterLink_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "twitterLink_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "twitterLink_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "FooterMenuLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FooterMenuMenuItemsCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MenuGroup",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "FooterMenuMenuItemsCollectionOrder",
        "enumValues": [
          {
            "name": "groupName_ASC"
          },
          {
            "name": "groupName_DESC"
          },
          {
            "name": "internalTitle_ASC"
          },
          {
            "name": "internalTitle_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "FooterMenuOrder",
        "enumValues": [
          {
            "name": "facebookLink_ASC"
          },
          {
            "name": "facebookLink_DESC"
          },
          {
            "name": "instagramLink_ASC"
          },
          {
            "name": "instagramLink_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "linkedinLink_ASC"
          },
          {
            "name": "linkedinLink_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          },
          {
            "name": "twitterLink_ASC"
          },
          {
            "name": "twitterLink_DESC"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "HexColor"
      },
      {
        "kind": "ENUM",
        "name": "ImageFormat",
        "enumValues": [
          {
            "name": "AVIF"
          },
          {
            "name": "JPG"
          },
          {
            "name": "JPG_PROGRESSIVE"
          },
          {
            "name": "PNG"
          },
          {
            "name": "PNG8"
          },
          {
            "name": "WEBP"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ImageResizeFocus",
        "enumValues": [
          {
            "name": "BOTTOM"
          },
          {
            "name": "BOTTOM_LEFT"
          },
          {
            "name": "BOTTOM_RIGHT"
          },
          {
            "name": "CENTER"
          },
          {
            "name": "FACE"
          },
          {
            "name": "FACES"
          },
          {
            "name": "LEFT"
          },
          {
            "name": "RIGHT"
          },
          {
            "name": "TOP"
          },
          {
            "name": "TOP_LEFT"
          },
          {
            "name": "TOP_RIGHT"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ImageResizeStrategy",
        "enumValues": [
          {
            "name": "CROP"
          },
          {
            "name": "FILL"
          },
          {
            "name": "FIT"
          },
          {
            "name": "PAD"
          },
          {
            "name": "SCALE"
          },
          {
            "name": "THUMB"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ImageTransformOptions",
        "inputFields": [
          {
            "name": "backgroundColor",
            "type": {
              "kind": "SCALAR",
              "name": "HexColor",
              "ofType": null
            }
          },
          {
            "name": "cornerRadius",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "format",
            "type": {
              "kind": "ENUM",
              "name": "ImageFormat",
              "ofType": null
            }
          },
          {
            "name": "height",
            "type": {
              "kind": "SCALAR",
              "name": "Dimension",
              "ofType": null
            }
          },
          {
            "name": "quality",
            "type": {
              "kind": "SCALAR",
              "name": "Quality",
              "ofType": null
            }
          },
          {
            "name": "resizeFocus",
            "type": {
              "kind": "ENUM",
              "name": "ImageResizeFocus",
              "ofType": null
            }
          },
          {
            "name": "resizeStrategy",
            "type": {
              "kind": "ENUM",
              "name": "ImageResizeStrategy",
              "ofType": null
            }
          },
          {
            "name": "width",
            "type": {
              "kind": "SCALAR",
              "name": "Dimension",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "JSON"
      },
      {
        "kind": "OBJECT",
        "name": "MenuGroup",
        "fields": [
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "featuredPagesCollection",
            "type": {
              "kind": "OBJECT",
              "name": "MenuGroupFeaturedPagesCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "MenuGroupFeaturedPagesFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "groupLink",
            "type": {
              "kind": "UNION",
              "name": "MenuGroupGroupLink",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "MenuGroupGroupLinkFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "groupName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "internalTitle",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "MenuGroupLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MenuGroupCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MenuGroup",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MenuGroupFeaturedPagesCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "UNION",
                  "name": "MenuGroupFeaturedPagesItem",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MenuGroupFeaturedPagesFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MenuGroupFeaturedPagesFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MenuGroupFeaturedPagesFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "extraSection",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cfextraSectionMultiTypeNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "extraSectionCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "pageContent_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "pageName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "pageName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "pageName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "seo_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "slug_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "slug_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "topSection",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cftopSectionMultiTypeNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "topSectionCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "MenuGroupFeaturedPagesItem",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Page"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MenuGroupFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MenuGroupFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MenuGroupFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "featuredPages",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cffeaturedPagesMultiTypeNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "featuredPagesCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "groupLink",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cfgroupLinkMultiTypeNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "groupLink_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "groupName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "groupName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "groupName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "groupName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "groupName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "groupName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "groupName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalTitle",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalTitle_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalTitle_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalTitle_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalTitle_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalTitle_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalTitle_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "MenuGroupGroupLink",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Page"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MenuGroupGroupLinkFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MenuGroupGroupLinkFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MenuGroupGroupLinkFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "extraSection",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cfextraSectionMultiTypeNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "extraSectionCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "pageContent_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "pageName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "pageName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "pageName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "seo_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "slug_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "slug_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "topSection",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cftopSectionMultiTypeNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "topSectionCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MenuGroupLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "footerMenuCollection",
            "type": {
              "kind": "OBJECT",
              "name": "FooterMenuCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "MenuGroupLinkingCollectionsFooterMenuCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "navigationMenuCollection",
            "type": {
              "kind": "OBJECT",
              "name": "NavigationMenuCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "MenuGroupLinkingCollectionsNavigationMenuCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "MenuGroupLinkingCollectionsFooterMenuCollectionOrder",
        "enumValues": [
          {
            "name": "facebookLink_ASC"
          },
          {
            "name": "facebookLink_DESC"
          },
          {
            "name": "instagramLink_ASC"
          },
          {
            "name": "instagramLink_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "linkedinLink_ASC"
          },
          {
            "name": "linkedinLink_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          },
          {
            "name": "twitterLink_ASC"
          },
          {
            "name": "twitterLink_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "MenuGroupLinkingCollectionsNavigationMenuCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "MenuGroupOrder",
        "enumValues": [
          {
            "name": "groupName_ASC"
          },
          {
            "name": "groupName_DESC"
          },
          {
            "name": "internalTitle_ASC"
          },
          {
            "name": "internalTitle_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NavigationMenu",
        "fields": [
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "NavigationMenuLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "menuItemsCollection",
            "type": {
              "kind": "OBJECT",
              "name": "NavigationMenuMenuItemsCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "NavigationMenuMenuItemsCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "MenuGroupFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NavigationMenuCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "NavigationMenu",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NavigationMenuFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "NavigationMenuFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "NavigationMenuFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "menuItems",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cfMenuGroupNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "menuItemsCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NavigationMenuLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "NavigationMenuMenuItemsCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MenuGroup",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "NavigationMenuMenuItemsCollectionOrder",
        "enumValues": [
          {
            "name": "groupName_ASC"
          },
          {
            "name": "groupName_DESC"
          },
          {
            "name": "internalTitle_ASC"
          },
          {
            "name": "internalTitle_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "NavigationMenuOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NtAudience",
        "fields": [
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "NtAudienceLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "ntAudienceId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntDescription",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntMetadata",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntRules",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NtAudienceCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "NtAudience",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NtAudienceFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "NtAudienceFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "NtAudienceFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "nt_audience_id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_audience_id_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_audience_id_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_audience_id_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_audience_id_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_audience_id_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_audience_id_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_description_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_description_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_description_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_description_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_description_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_description_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_metadata_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_name_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_name_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_name_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_name_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_name_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_name_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_rules_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NtAudienceLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntExperienceCollection",
            "type": {
              "kind": "OBJECT",
              "name": "NtExperienceCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "NtAudienceLinkingCollectionsNtExperienceCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "NtAudienceLinkingCollectionsNtExperienceCollectionOrder",
        "enumValues": [
          {
            "name": "nt_experience_id_ASC"
          },
          {
            "name": "nt_experience_id_DESC"
          },
          {
            "name": "nt_name_ASC"
          },
          {
            "name": "nt_name_DESC"
          },
          {
            "name": "nt_type_ASC"
          },
          {
            "name": "nt_type_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "NtAudienceOrder",
        "enumValues": [
          {
            "name": "nt_audience_id_ASC"
          },
          {
            "name": "nt_audience_id_DESC"
          },
          {
            "name": "nt_name_ASC"
          },
          {
            "name": "nt_name_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NtExperience",
        "fields": [
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "NtExperienceLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "ntAudience",
            "type": {
              "kind": "OBJECT",
              "name": "NtAudience",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "NtAudienceFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntConfig",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntDescription",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntExperienceId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntMetadata",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntType",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntVariantsCollection",
            "type": {
              "kind": "OBJECT",
              "name": "NtExperienceNt_variantsCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NtExperienceCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "NtExperience",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NtExperienceFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "NtExperienceFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "NtExperienceFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "nt_audience",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cfNtAudienceNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "nt_audience_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_config_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_description_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_description_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_description_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_description_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_description_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_description_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_experience_id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_experience_id_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_experience_id_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_experience_id_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_experience_id_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_experience_id_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_experience_id_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_metadata_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_name_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_name_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_name_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_name_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_name_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_name_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_type",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_type_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_type_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_type_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_type_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_type_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_type_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_variantsCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NtExperienceLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "NtExperienceNt_variantsCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "NtExperienceOrder",
        "enumValues": [
          {
            "name": "nt_experience_id_ASC"
          },
          {
            "name": "nt_experience_id_DESC"
          },
          {
            "name": "nt_name_ASC"
          },
          {
            "name": "nt_name_DESC"
          },
          {
            "name": "nt_type_ASC"
          },
          {
            "name": "nt_type_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Page",
        "fields": [
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "extraSectionCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageExtraSectionCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PageExtraSectionFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "PageLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "pageContent",
            "type": {
              "kind": "UNION",
              "name": "PagePageContent",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "seo",
            "type": {
              "kind": "OBJECT",
              "name": "Seo",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SeoFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "topSectionCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageTopSectionCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PageTopSectionFilter",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PageCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Page",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageExtraSectionCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "UNION",
                  "name": "PageExtraSectionItem",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PageExtraSectionFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PageExtraSectionFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PageExtraSectionFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "PageExtraSectionItem",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ComponentCta"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentDuplex"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentHeroBanner"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentInfoBlock"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentQuote"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentTextBlock"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PageFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PageFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PageFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "extraSection",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cfextraSectionMultiTypeNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "extraSectionCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "pageContent_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "pageName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "pageName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "pageName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "seo",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cfSeoNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "seo_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "slug_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "slug_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "topSection",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cftopSectionMultiTypeNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "topSectionCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PageLinkingCollections",
        "fields": [
          {
            "name": "componentCtaCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentCtaCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "PageLinkingCollectionsComponentCtaCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentDuplexCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentDuplexCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "PageLinkingCollectionsComponentDuplexCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentHeroBannerCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentHeroBannerCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "PageLinkingCollectionsComponentHeroBannerCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "menuGroupCollection",
            "type": {
              "kind": "OBJECT",
              "name": "MenuGroupCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "PageLinkingCollectionsMenuGroupCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "PageLinkingCollectionsComponentCtaCollectionOrder",
        "enumValues": [
          {
            "name": "colorPalette_ASC"
          },
          {
            "name": "colorPalette_DESC"
          },
          {
            "name": "ctaText_ASC"
          },
          {
            "name": "ctaText_DESC"
          },
          {
            "name": "headline_ASC"
          },
          {
            "name": "headline_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          },
          {
            "name": "urlParameters_ASC"
          },
          {
            "name": "urlParameters_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "PageLinkingCollectionsComponentDuplexCollectionOrder",
        "enumValues": [
          {
            "name": "colorPalette_ASC"
          },
          {
            "name": "colorPalette_DESC"
          },
          {
            "name": "containerLayout_ASC"
          },
          {
            "name": "containerLayout_DESC"
          },
          {
            "name": "ctaText_ASC"
          },
          {
            "name": "ctaText_DESC"
          },
          {
            "name": "headline_ASC"
          },
          {
            "name": "headline_DESC"
          },
          {
            "name": "imageStyle_ASC"
          },
          {
            "name": "imageStyle_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "PageLinkingCollectionsComponentHeroBannerCollectionOrder",
        "enumValues": [
          {
            "name": "colorPalette_ASC"
          },
          {
            "name": "colorPalette_DESC"
          },
          {
            "name": "ctaText_ASC"
          },
          {
            "name": "ctaText_DESC"
          },
          {
            "name": "headline_ASC"
          },
          {
            "name": "headline_DESC"
          },
          {
            "name": "heroSize_ASC"
          },
          {
            "name": "heroSize_DESC"
          },
          {
            "name": "imageStyle_ASC"
          },
          {
            "name": "imageStyle_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "PageLinkingCollectionsMenuGroupCollectionOrder",
        "enumValues": [
          {
            "name": "groupName_ASC"
          },
          {
            "name": "groupName_DESC"
          },
          {
            "name": "internalTitle_ASC"
          },
          {
            "name": "internalTitle_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "PageOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "pageName_ASC"
          },
          {
            "name": "pageName_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "PagePageContent",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ComponentProductTable"
          },
          {
            "kind": "OBJECT",
            "name": "TopicBusinessInfo"
          },
          {
            "kind": "OBJECT",
            "name": "TopicProduct"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PageTopSectionCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "UNION",
                  "name": "PageTopSectionItem",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PageTopSectionFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PageTopSectionFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PageTopSectionFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "PageTopSectionItem",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ComponentCta"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentDuplex"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentHeroBanner"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentInfoBlock"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentQuote"
          },
          {
            "kind": "OBJECT",
            "name": "ComponentTextBlock"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Quality"
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "_node",
            "type": {
              "kind": "INTERFACE",
              "name": "_Node",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "asset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "assetCollection",
            "type": {
              "kind": "OBJECT",
              "name": "AssetCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "AssetOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssetFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentCta",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentCta",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentCtaCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentCtaCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentCtaOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ComponentCtaFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentDuplex",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentDuplex",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentDuplexCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentDuplexCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentDuplexOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ComponentDuplexFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentHeroBanner",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentHeroBanner",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentHeroBannerCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentHeroBannerCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentHeroBannerOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ComponentHeroBannerFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentInfoBlock",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentInfoBlock",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentInfoBlockCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentInfoBlockCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentInfoBlockOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ComponentInfoBlockFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentProductTable",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentProductTable",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentProductTableCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentProductTableCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentProductTableOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ComponentProductTableFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentQuote",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentQuote",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentQuoteCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentQuoteCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentQuoteOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ComponentQuoteFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentTextBlock",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentTextBlock",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "componentTextBlockCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentTextBlockCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ComponentTextBlockOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ComponentTextBlockFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "editorTest",
            "type": {
              "kind": "OBJECT",
              "name": "EditorTest",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "editorTestCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EditorTestCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "EditorTestOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "EditorTestFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "EntryOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "EntryFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "footerMenu",
            "type": {
              "kind": "OBJECT",
              "name": "FooterMenu",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "footerMenuCollection",
            "type": {
              "kind": "OBJECT",
              "name": "FooterMenuCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "FooterMenuOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FooterMenuFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "menuGroup",
            "type": {
              "kind": "OBJECT",
              "name": "MenuGroup",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "menuGroupCollection",
            "type": {
              "kind": "OBJECT",
              "name": "MenuGroupCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "MenuGroupOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "MenuGroupFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "navigationMenu",
            "type": {
              "kind": "OBJECT",
              "name": "NavigationMenu",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "navigationMenuCollection",
            "type": {
              "kind": "OBJECT",
              "name": "NavigationMenuCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "NavigationMenuOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "NavigationMenuFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntAudience",
            "type": {
              "kind": "OBJECT",
              "name": "NtAudience",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntAudienceCollection",
            "type": {
              "kind": "OBJECT",
              "name": "NtAudienceCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "NtAudienceOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "NtAudienceFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntExperience",
            "type": {
              "kind": "OBJECT",
              "name": "NtExperience",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "ntExperienceCollection",
            "type": {
              "kind": "OBJECT",
              "name": "NtExperienceCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "NtExperienceOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "NtExperienceFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "page",
            "type": {
              "kind": "OBJECT",
              "name": "Page",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "PageOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PageFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "seo",
            "type": {
              "kind": "OBJECT",
              "name": "Seo",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "seoCollection",
            "type": {
              "kind": "OBJECT",
              "name": "SeoCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SeoOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SeoFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "topicBusinessInfo",
            "type": {
              "kind": "OBJECT",
              "name": "TopicBusinessInfo",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "topicBusinessInfoCollection",
            "type": {
              "kind": "OBJECT",
              "name": "TopicBusinessInfoCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "TopicBusinessInfoOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "TopicBusinessInfoFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "topicPerson",
            "type": {
              "kind": "OBJECT",
              "name": "TopicPerson",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "topicPersonCollection",
            "type": {
              "kind": "OBJECT",
              "name": "TopicPersonCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "TopicPersonOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "TopicPersonFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "topicProduct",
            "type": {
              "kind": "OBJECT",
              "name": "TopicProduct",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "topicProductCollection",
            "type": {
              "kind": "OBJECT",
              "name": "TopicProductCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "TopicProductOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "TopicProductFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "topicProductFeature",
            "type": {
              "kind": "OBJECT",
              "name": "TopicProductFeature",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "topicProductFeatureCollection",
            "type": {
              "kind": "OBJECT",
              "name": "TopicProductFeatureCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "TopicProductFeatureOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "TopicProductFeatureFilter",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "ID"
      },
      {
        "kind": "OBJECT",
        "name": "ResourceLink",
        "fields": [
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ResourceSys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ResourceSys",
        "fields": [
          {
            "name": "linkType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "urn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Seo",
        "fields": [
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "image",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "SeoLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "noFollow",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "noIndex",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SeoCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Seo",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SeoFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "SeoFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "SeoFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "description_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "image_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "name_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "noFollow",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "noFollow_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "noFollow_not",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "noIndex",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "noIndex_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "noIndex_not",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "title_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SeoLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SeoLinkingCollectionsPageCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SeoLinkingCollectionsPageCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "pageName_ASC"
          },
          {
            "name": "pageName_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "SeoOrder",
        "enumValues": [
          {
            "name": "description_ASC"
          },
          {
            "name": "description_DESC"
          },
          {
            "name": "name_ASC"
          },
          {
            "name": "name_DESC"
          },
          {
            "name": "noFollow_ASC"
          },
          {
            "name": "noFollow_DESC"
          },
          {
            "name": "noIndex_ASC"
          },
          {
            "name": "noIndex_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          },
          {
            "name": "title_ASC"
          },
          {
            "name": "title_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Sys",
        "fields": [
          {
            "name": "environmentId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "firstPublishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "publishedVersion",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "spaceId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SysFilter",
        "inputFields": [
          {
            "name": "firstPublishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt_gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt_gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "firstPublishedAt_lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt_lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt_not",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "id_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "id_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "id_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "id_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "id_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "publishedAt_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "publishedAt_gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "publishedAt_gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "publishedAt_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "publishedAt_lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "publishedAt_lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "publishedAt_not",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "publishedAt_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "publishedVersion",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion_gt",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion_gte",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "publishedVersion_lt",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion_lte",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion_not",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Float"
      },
      {
        "kind": "OBJECT",
        "name": "TopicBusinessInfo",
        "fields": [
          {
            "name": "body",
            "type": {
              "kind": "OBJECT",
              "name": "TopicBusinessInfoBody",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "featuredImage",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "TopicBusinessInfoLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "shortDescription",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TopicBusinessInfoBody",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicBusinessInfoBodyLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicBusinessInfoBodyAssets",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicBusinessInfoBodyEntries",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicBusinessInfoBodyLinks",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicBusinessInfoBodyAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicBusinessInfoBodyEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicBusinessInfoBodyResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicBusinessInfoBodyResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicBusinessInfoCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TopicBusinessInfo",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TopicBusinessInfoFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TopicBusinessInfoFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TopicBusinessInfoFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "body_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "body_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "body_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "featuredImage_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "name_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "shortDescription",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "shortDescription_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "shortDescription_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "shortDescription_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "shortDescription_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "shortDescription_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "shortDescription_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TopicBusinessInfoLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "TopicBusinessInfoLinkingCollectionsPageCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "TopicBusinessInfoLinkingCollectionsPageCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "pageName_ASC"
          },
          {
            "name": "pageName_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "TopicBusinessInfoOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "name_ASC"
          },
          {
            "name": "name_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TopicPerson",
        "fields": [
          {
            "name": "avatar",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "bio",
            "type": {
              "kind": "OBJECT",
              "name": "TopicPersonBio",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "cardStyle",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "TopicPersonLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "location",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "website",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TopicPersonBio",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicPersonBioLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicPersonBioAssets",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicPersonBioEntries",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicPersonBioLinks",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicPersonBioAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicPersonBioEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicPersonBioResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicPersonBioResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicPersonCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TopicPerson",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TopicPersonFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TopicPersonFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TopicPersonFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "avatar_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "bio_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "bio_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "bio_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "cardStyle",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "cardStyle_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "cardStyle_not",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "location",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "location_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "location_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "location_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "location_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "location_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "location_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "name_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "website",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "website_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "website_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "website_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "website_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "website_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "website_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TopicPersonLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "TopicPersonOrder",
        "enumValues": [
          {
            "name": "cardStyle_ASC"
          },
          {
            "name": "cardStyle_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "location_ASC"
          },
          {
            "name": "location_DESC"
          },
          {
            "name": "name_ASC"
          },
          {
            "name": "name_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          },
          {
            "name": "website_ASC"
          },
          {
            "name": "website_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TopicProduct",
        "fields": [
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "OBJECT",
              "name": "TopicProductDescription",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "featuredImage",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "featuresCollection",
            "type": {
              "kind": "OBJECT",
              "name": "TopicProductFeaturesCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "TopicProductFeaturesCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "TopicProductFeatureFilter",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "TopicProductLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "price",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TopicProduct",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductDescription",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicProductDescriptionLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductDescriptionAssets",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductDescriptionEntries",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductDescriptionLinks",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicProductDescriptionAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicProductDescriptionEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicProductDescriptionResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductDescriptionResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeature",
        "fields": [
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "TopicProductFeatureLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "longDescription",
            "type": {
              "kind": "OBJECT",
              "name": "TopicProductFeatureLongDescription",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "shortDescription",
            "type": {
              "kind": "OBJECT",
              "name": "TopicProductFeatureShortDescription",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeatureCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TopicProductFeature",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TopicProductFeatureFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TopicProductFeatureFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TopicProductFeatureFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "longDescription_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "longDescription_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "longDescription_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "name_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "shortDescription_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "shortDescription_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "shortDescription_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeatureLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "topicProductCollection",
            "type": {
              "kind": "OBJECT",
              "name": "TopicProductCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "TopicProductFeatureLinkingCollectionsTopicProductCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "TopicProductFeatureLinkingCollectionsTopicProductCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "name_ASC"
          },
          {
            "name": "name_DESC"
          },
          {
            "name": "price_ASC"
          },
          {
            "name": "price_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeatureLongDescription",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicProductFeatureLongDescriptionLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeatureLongDescriptionAssets",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeatureLongDescriptionEntries",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeatureLongDescriptionLinks",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicProductFeatureLongDescriptionAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicProductFeatureLongDescriptionEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicProductFeatureLongDescriptionResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeatureLongDescriptionResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "TopicProductFeatureOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "name_ASC"
          },
          {
            "name": "name_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeatureShortDescription",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicProductFeatureShortDescriptionLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeatureShortDescriptionAssets",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeatureShortDescriptionEntries",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeatureShortDescriptionLinks",
        "fields": [
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicProductFeatureShortDescriptionAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicProductFeatureShortDescriptionEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TopicProductFeatureShortDescriptionResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeatureShortDescriptionResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductFeaturesCollection",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TopicProductFeature",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "TopicProductFeaturesCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "name_ASC"
          },
          {
            "name": "name_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TopicProductFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TopicProductFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TopicProductFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "description_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "description_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "featuredImage_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "features",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cfTopicProductFeatureNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "featuresCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "name_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "price",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "price_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "price_gt",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "price_gte",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "price_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "price_lt",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "price_lte",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "price_not",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "price_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TopicProductLinkingCollections",
        "fields": [
          {
            "name": "componentProductTableCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ComponentProductTableCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "TopicProductLinkingCollectionsComponentProductTableCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "TopicProductLinkingCollectionsPageCollectionOrder",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "TopicProductLinkingCollectionsComponentProductTableCollectionOrder",
        "enumValues": [
          {
            "name": "headline_ASC"
          },
          {
            "name": "headline_DESC"
          },
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "subline_ASC"
          },
          {
            "name": "subline_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "TopicProductLinkingCollectionsPageCollectionOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "pageName_ASC"
          },
          {
            "name": "pageName_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "TopicProductOrder",
        "enumValues": [
          {
            "name": "internalName_ASC"
          },
          {
            "name": "internalName_DESC"
          },
          {
            "name": "name_ASC"
          },
          {
            "name": "name_DESC"
          },
          {
            "name": "price_ASC"
          },
          {
            "name": "price_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "_Node",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "cfMenuGroupNestedFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfMenuGroupNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfMenuGroupNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "featuredPagesCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "groupLink_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "groupName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "groupName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "groupName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "groupName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "groupName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "groupName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "groupName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalTitle",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalTitle_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalTitle_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalTitle_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalTitle_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalTitle_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalTitle_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "cfNtAudienceNestedFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfNtAudienceNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfNtAudienceNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "nt_audience_id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_audience_id_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_audience_id_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_audience_id_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_audience_id_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_audience_id_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_audience_id_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_description_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_description_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_description_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_description_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_description_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_description_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_metadata_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_name_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_name_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "nt_name_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_name_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_name_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "nt_name_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "nt_rules_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "cfSeoNestedFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfSeoNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfSeoNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "description_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "image_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "name_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "noFollow",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "noFollow_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "noFollow_not",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "noIndex",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "noIndex_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "noIndex_not",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "title_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "cfTopicProductFeatureNestedFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfTopicProductFeatureNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfTopicProductFeatureNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "longDescription_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "longDescription_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "longDescription_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "name_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "shortDescription_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "shortDescription_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "shortDescription_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "cfTopicProductNestedFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfTopicProductNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfTopicProductNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "description_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "description_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "featuredImage_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "featuresCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "name_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "price",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "price_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "price_gt",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "price_gte",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "price_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "price_lt",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "price_lte",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "price_not",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "price_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "cfextraSectionMultiTypeNestedFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfextraSectionMultiTypeNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfextraSectionMultiTypeNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "cffeaturedPagesMultiTypeNestedFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cffeaturedPagesMultiTypeNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cffeaturedPagesMultiTypeNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "extraSectionCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "pageContent_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "pageName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "pageName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "pageName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "seo_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "slug_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "slug_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "topSectionCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "cfgroupLinkMultiTypeNestedFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfgroupLinkMultiTypeNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfgroupLinkMultiTypeNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "extraSectionCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "pageContent_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "pageName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "pageName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "pageName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "seo_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "slug_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "slug_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "topSectionCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "cftopSectionMultiTypeNestedFilter",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cftopSectionMultiTypeNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cftopSectionMultiTypeNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "colorPalette_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "colorPalette_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "internalName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "internalName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "internalName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "internalName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          }
        ]
      }
    ],
    "directives": []
  }
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}