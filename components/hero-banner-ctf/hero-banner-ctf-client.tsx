"use client";

import { HeroBanner } from "../ui/hero-banner";
import { ComponentHeroBannerFieldsFragment } from "#/gql/graphql";
import { RichTextCtf } from "#/components/rich-text-ctf";
import { getPageLinkProps } from "../page";
import { useComponentPreview } from "../hooks/use-component-preview";

export const HeroBannerCtfClient: React.FC<{
  data: ComponentHeroBannerFieldsFragment;
}> = (props) => {
  const { data: originalData } = props;
  const { data, addAttributes } = useComponentPreview(originalData);
  return (
    <HeroBanner
      headline={data.headline}
      bodyText={<RichTextCtf json={data.bodyText?.json} />}
      ctaText={data.ctaText}
      ctaLink={data.targetPage && getPageLinkProps(data.targetPage)?.href}
      imageUrl={data.image?.url}
      addAttributes={addAttributes}
    />
  );
};
