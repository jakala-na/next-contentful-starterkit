"use client";
import { getPageLinkProps } from "#/components/page";
import { ComponentHeroBannerFieldsFragment } from "#/gql/graphql";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner(
  originalData: ComponentHeroBannerFieldsFragment
) {
  const inspectorProps = useContentfulInspectorMode({
    entryId: originalData.sys.id,
  });
  const data = useContentfulLiveUpdates(originalData);
  return (
    <>
      {data.image?.url && (
        <Image
          {...inspectorProps({ fieldId: "image" })}
          src={data.image.url}
          width={1200}
          height={200}
          alt={""}
        />
      )}
      <h1 {...inspectorProps({ fieldId: "headline" })}>{data.headline}</h1>
      {data.targetPage && <Link {...getPageLinkProps(data.targetPage)} />}
    </>
  );
}
