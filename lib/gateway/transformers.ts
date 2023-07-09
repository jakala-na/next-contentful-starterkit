import { GraphQLInterfaceType, GraphQLSchema, TypeInfo } from "graphql";
import { ExecutionRequest, mapSchema, MapperKind } from "@graphql-tools/utils";
import { visit, Kind, visitWithTypeInfo, GraphQLObjectType } from "graphql";

const data = {
  Entry: {
    Page: {
      "5FRqxevmVGFgo7IGlAhj8Z": {},
    },
    PageLanding: {
      "6LGCqM05dlW5GiyE0qFdPI": {
        sectionsCollection: 1,
      },
    },
  },
  Asset: {},
};

class ArgumentLimitTransformer {
  private schema: GraphQLSchema;

  constructor(schema: GraphQLSchema) {
    this.schema = schema;
  }

  transformRequest(originalRequest: ExecutionRequest) {
    // const fieldPath: Array<string> = [];
    const typeInfo = new TypeInfo(this.schema);
    const document = visit(
      originalRequest.document,
      visitWithTypeInfo(typeInfo, {
        [Kind.FIELD]: {
          enter: (node, key, parent, path, ancestors) => {
            // fieldPath.push(node.name.value);
            typeInfo.getFieldDef()?.type;
            // typeInfo.getParentType();
            return {
              ...node,
              // value: { ...node.value, value: 1}
            };
          },
          leave: () => {
            // fieldPath.pop();
          },
        },
      })
    );
    return {
      ...originalRequest,
      document,
    };
  }
}

class SlugFieldTransformer {
  transformSchema(originalWrappingSchema: GraphQLSchema) {
    return mapSchema(originalWrappingSchema, {
      // Transform object types
      [MapperKind.OBJECT_TYPE]: (type: GraphQLObjectType) => {
        // Find if type has slug field.
        const slugField = type.getFields().slug;
        if (slugField) {
          // Create a new object type that extends the original type and implements `PageEntry`
          const extendedType = new GraphQLObjectType({
            ...type.toConfig(),
            interfaces: [
              ...type.getInterfaces(),
              originalWrappingSchema.getType(
                "PageEntry"
              ) as GraphQLInterfaceType,
            ],
          });

          return extendedType;
        }

        return type;
      },
    });
  }
}

export { ArgumentLimitTransformer, SlugFieldTransformer };
