import { ReactNode } from "react";
import { Button } from "../button/button";

interface HeroBannerProps {
  headline?: string | null;
  bodyText?: ReactNode;
  imageUrl?: string | null;
  imageAlt?: string | null;
  ctaText?: string | null;
  ctaLink?: string | null;
  addAttributes?: (name: string) => object | null;
}

export function HeroBanner(props: HeroBannerProps) {
  const {
    imageUrl,
    imageAlt = "",
    headline,
    bodyText,
    ctaText,
    ctaLink,
    addAttributes = () => ({}), // Default to no-op.
  } = props;

  return (
    <div className="relative min-h-[calc(100vh-9rem)] flex items-center">
      {imageUrl && (
        <img
          {...addAttributes("image")}
          className="-z-10 w-full h-[calc(100vh-9rem)] absolute object-cover object-center"
          src={imageUrl}
          // TODO: Add props back when we'll use next/image
          // sizes={"100vw"}
          // width={image?.width ?? 1200}
          // height={image?.height ?? 800}
          alt={imageAlt || ""}
        />
      )}
      <div className="mx-auto pt-10 w-full max-w-[80rem] pl-5">
        {headline && (
          <h1
            {...addAttributes("headline")}
            className={
              "w-[40rem] mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl"
            }
          >
            {headline}
          </h1>
        )}
        {bodyText}
        {ctaLink && ctaText && (
          <div className="mt-6">
            <Button {...addAttributes("ctaText")} asChild>
              {/* TODO: Use next/link */}
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
