"use client";

import { Duplex } from "#/components/ui/duplex";
import { RichText } from "#/components/contentstack/rich-text";
import { getPageLinkChildProps } from "#/components/contentstack/page";
import { useComponentPreview } from "#/components/hooks/use-component-preview";
import { getImageChildProps } from "#/components/contentstack/image";
import { ComponentDuplexFieldsFragment } from "./duplex";
import { ResultOf } from "gql.tada";

export const DuplexClient: React.FC<{
  data: ResultOf<typeof ComponentDuplexFieldsFragment>;
}> = (props) => {
  const { data: originalData } = props;
  // const { data, addAttributes } =
  //   useComponentPreview(originalData);//useComponentPreview<typeof originalData>(originalData);@TODO Make ContentStack Preview

  return (<></>
    // <Duplex
    //   headline={data.headline}
    //   bodyText={
    //     data.bodyText && (
    //       <div {...addAttributes("bodyText")}>
    //         <RichText {...data.bodyText} />
    //       </div>
    //     )
    //   }
    //   image={
    //     data.image &&
    //     getImageChildProps({
    //       data: data.image,
    //       priority: true,
    //       sizes: "100vw",
    //     })
    //   }
    //   imageAlignment={data.containerLayout ? "left" : "right"}
    //   imageHeight={data.imageStyle ? "fixed" : "full"}
    //   addAttributes={addAttributes}
    //   cta={
    //     data.targetPage &&
    //     getPageLinkChildProps({
    //       data: data.targetPage,
    //       children: data.ctaText,
    //     })
    //   }
    //   colorPalette={data.colorPalette}
    // />
  );
};
