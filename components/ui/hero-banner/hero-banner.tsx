"use client";
import { getPageLinkProps } from "#/components/page";
import { CtfRichtext } from "#/components/rich-text-ctf";
import { ComponentHeroBannerFieldsFragment } from "#/gql/graphql";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button/button";

export default function HeroBanner(
  originalData: ComponentHeroBannerFieldsFragment
) {
  const data = useContentfulLiveUpdates(originalData);

  const {
    image,
    imageStyle: imageStyleBoolean,
    headline,
    // Tutorial: uncomment the line below to make the Greeting field available to render
    // greeting,
    bodyText,
    ctaText,
    targetPage,
    colorPalette,
    sys: { id },
    heroSize: heroSizeBoolean,
  } = data;

  // const colorConfig = getColorConfigFromPalette(colorPalette || "");
  const imageStyle = imageStyleBoolean ? "partial" : "full";
  const heroSize =
    heroSizeBoolean === null || heroSizeBoolean === true
      ? "full_screen"
      : "fixed_height";

  const inspectorProps = useContentfulInspectorMode({
    entryId: id,
  });

  return (
    <div className="relative min-h-[calc(100vh-9rem)] flex items-center">
      {image?.url && (
        <Image
          {...inspectorProps({ fieldId: "image" })}
          className="-z-10 w-full h-[calc(100vh-9rem)] absolute object-cover object-center"
          src={image.url}
          sizes={"100vw"}
          width={image?.width ?? 1200}
          height={image?.height ?? 800}
          alt={""}
        />
      )}
      <div className="mx-auto pt-10 w-full max-w-[80rem]">
        {headline && (
          <h1
            {...inspectorProps({ fieldId: "headline" })}
            className={
              "w-[40rem] mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl"
            }
          >
            {headline}
          </h1>
        )}
        {bodyText && <CtfRichtext {...bodyText} className={""} />}
        {targetPage && (
          <div className="mt-6">
            <Button asChild>
              <Link {...getPageLinkProps(targetPage)} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
