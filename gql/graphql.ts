/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentArticleCardCollection?: Maybe<ComponentArticleCardCollection>;
  componentImageAndTextCollection?: Maybe<ComponentImageAndTextCollection>;
  componentMarqueeBannerCollection?: Maybe<ComponentMarqueeBannerCollection>;
  entryCollection?: Maybe<EntryCollection>;
  menuPromoCollection?: Maybe<MenuPromoCollection>;
  productCollection?: Maybe<ProductCollection>;
};


export type AssetLinkingCollectionsComponentArticleCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentImageAndTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentMarqueeBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsMenuPromoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_article_card) */
export type ComponentArticleCard = Entry & {
  __typename?: 'ComponentArticleCard';
  buttonExternalUrl?: Maybe<Scalars['String']>;
  buttonLabel?: Maybe<Scalars['String']>;
  buttonReference?: Maybe<Page>;
  contentfulMetadata: ContentfulMetadata;
  eyebrow?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentArticleCardLinkingCollections>;
  subtext?: Maybe<ComponentArticleCardSubtext>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_article_card) */
export type ComponentArticleCardButtonExternalUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_article_card) */
export type ComponentArticleCardButtonLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_article_card) */
export type ComponentArticleCardButtonReferenceArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_article_card) */
export type ComponentArticleCardEyebrowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_article_card) */
export type ComponentArticleCardImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_article_card) */
export type ComponentArticleCardInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_article_card) */
export type ComponentArticleCardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_article_card) */
export type ComponentArticleCardSubtextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_article_card) */
export type ComponentArticleCardTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentArticleCardCollection = {
  __typename?: 'ComponentArticleCardCollection';
  items: Array<Maybe<ComponentArticleCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentArticleCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentArticleCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentArticleCardFilter>>>;
  buttonExternalUrl?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_contains?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  buttonExternalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonExternalUrl_not?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_not_contains?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLabel?: InputMaybe<Scalars['String']>;
  buttonLabel_contains?: InputMaybe<Scalars['String']>;
  buttonLabel_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLabel_not?: InputMaybe<Scalars['String']>;
  buttonLabel_not_contains?: InputMaybe<Scalars['String']>;
  buttonLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonReference?: InputMaybe<CfPageNestedFilter>;
  buttonReference_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']>;
  eyebrow_contains?: InputMaybe<Scalars['String']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtext_contains?: InputMaybe<Scalars['String']>;
  subtext_exists?: InputMaybe<Scalars['Boolean']>;
  subtext_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentArticleCardLinkingCollections = {
  __typename?: 'ComponentArticleCardLinkingCollections';
  componentThreeCardCollectionCollection?: Maybe<ComponentThreeCardCollectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentArticleCardLinkingCollectionsComponentThreeCardCollectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentArticleCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentArticleCardOrder {
  ButtonExternalUrlAsc = 'buttonExternalUrl_ASC',
  ButtonExternalUrlDesc = 'buttonExternalUrl_DESC',
  ButtonLabelAsc = 'buttonLabel_ASC',
  ButtonLabelDesc = 'buttonLabel_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ComponentArticleCardSubtext = {
  __typename?: 'ComponentArticleCardSubtext';
  json: Scalars['JSON'];
  links: ComponentArticleCardSubtextLinks;
};

export type ComponentArticleCardSubtextAssets = {
  __typename?: 'ComponentArticleCardSubtextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentArticleCardSubtextEntries = {
  __typename?: 'ComponentArticleCardSubtextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentArticleCardSubtextLinks = {
  __typename?: 'ComponentArticleCardSubtextLinks';
  assets: ComponentArticleCardSubtextAssets;
  entries: ComponentArticleCardSubtextEntries;
};

/** Banner with half-width image and half-width text area. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_image_and_text) */
export type ComponentImageAndText = Entry & {
  __typename?: 'ComponentImageAndText';
  buttonExternalUrl?: Maybe<Scalars['String']>;
  buttonLabel?: Maybe<Scalars['String']>;
  buttonReference?: Maybe<Page>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentImageAndTextLinkingCollections>;
  subtext?: Maybe<ComponentImageAndTextSubtext>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Banner with half-width image and half-width text area. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_image_and_text) */
export type ComponentImageAndTextButtonExternalUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with half-width image and half-width text area. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_image_and_text) */
export type ComponentImageAndTextButtonLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with half-width image and half-width text area. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_image_and_text) */
export type ComponentImageAndTextButtonReferenceArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Banner with half-width image and half-width text area. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_image_and_text) */
export type ComponentImageAndTextImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Banner with half-width image and half-width text area. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_image_and_text) */
export type ComponentImageAndTextInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with half-width image and half-width text area. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_image_and_text) */
export type ComponentImageAndTextLayoutArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with half-width image and half-width text area. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_image_and_text) */
export type ComponentImageAndTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Banner with half-width image and half-width text area. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_image_and_text) */
export type ComponentImageAndTextSubtextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Banner with half-width image and half-width text area. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_image_and_text) */
export type ComponentImageAndTextTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentImageAndTextCollection = {
  __typename?: 'ComponentImageAndTextCollection';
  items: Array<Maybe<ComponentImageAndText>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentImageAndTextFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentImageAndTextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentImageAndTextFilter>>>;
  buttonExternalUrl?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_contains?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  buttonExternalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonExternalUrl_not?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_not_contains?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLabel?: InputMaybe<Scalars['String']>;
  buttonLabel_contains?: InputMaybe<Scalars['String']>;
  buttonLabel_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLabel_not?: InputMaybe<Scalars['String']>;
  buttonLabel_not_contains?: InputMaybe<Scalars['String']>;
  buttonLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonReference?: InputMaybe<CfPageNestedFilter>;
  buttonReference_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  layout?: InputMaybe<Scalars['String']>;
  layout_contains?: InputMaybe<Scalars['String']>;
  layout_exists?: InputMaybe<Scalars['Boolean']>;
  layout_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  layout_not?: InputMaybe<Scalars['String']>;
  layout_not_contains?: InputMaybe<Scalars['String']>;
  layout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtext_contains?: InputMaybe<Scalars['String']>;
  subtext_exists?: InputMaybe<Scalars['Boolean']>;
  subtext_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentImageAndTextLinkingCollections = {
  __typename?: 'ComponentImageAndTextLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type ComponentImageAndTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentImageAndTextLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentImageAndTextOrder {
  ButtonExternalUrlAsc = 'buttonExternalUrl_ASC',
  ButtonExternalUrlDesc = 'buttonExternalUrl_DESC',
  ButtonLabelAsc = 'buttonLabel_ASC',
  ButtonLabelDesc = 'buttonLabel_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ComponentImageAndTextSubtext = {
  __typename?: 'ComponentImageAndTextSubtext';
  json: Scalars['JSON'];
  links: ComponentImageAndTextSubtextLinks;
};

export type ComponentImageAndTextSubtextAssets = {
  __typename?: 'ComponentImageAndTextSubtextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentImageAndTextSubtextEntries = {
  __typename?: 'ComponentImageAndTextSubtextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentImageAndTextSubtextLinks = {
  __typename?: 'ComponentImageAndTextSubtextLinks';
  assets: ComponentImageAndTextSubtextAssets;
  entries: ComponentImageAndTextSubtextEntries;
};

/** Image and text banner used at the top of pages containing the page title. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_marquee_banner) */
export type ComponentMarqueeBanner = Entry & {
  __typename?: 'ComponentMarqueeBanner';
  backgroundImage?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentMarqueeBannerLinkingCollections>;
  subtext?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Image and text banner used at the top of pages containing the page title. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_marquee_banner) */
export type ComponentMarqueeBannerBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Image and text banner used at the top of pages containing the page title. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_marquee_banner) */
export type ComponentMarqueeBannerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Image and text banner used at the top of pages containing the page title. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_marquee_banner) */
export type ComponentMarqueeBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Image and text banner used at the top of pages containing the page title. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_marquee_banner) */
export type ComponentMarqueeBannerSubtextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Image and text banner used at the top of pages containing the page title. [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_marquee_banner) */
export type ComponentMarqueeBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentMarqueeBannerCollection = {
  __typename?: 'ComponentMarqueeBannerCollection';
  items: Array<Maybe<ComponentMarqueeBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentMarqueeBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentMarqueeBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentMarqueeBannerFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtext?: InputMaybe<Scalars['String']>;
  subtext_contains?: InputMaybe<Scalars['String']>;
  subtext_exists?: InputMaybe<Scalars['Boolean']>;
  subtext_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtext_not?: InputMaybe<Scalars['String']>;
  subtext_not_contains?: InputMaybe<Scalars['String']>;
  subtext_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentMarqueeBannerLinkingCollections = {
  __typename?: 'ComponentMarqueeBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type ComponentMarqueeBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentMarqueeBannerLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentMarqueeBannerOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubtextAsc = 'subtext_ASC',
  SubtextDesc = 'subtext_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_section) */
export type ComponentSection = Entry & {
  __typename?: 'ComponentSection';
  columnsCollection?: Maybe<ComponentSectionColumnsCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ComponentSectionLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_section) */
export type ComponentSectionColumnsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_section) */
export type ComponentSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_section) */
export type ComponentSectionNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionCollection = {
  __typename?: 'ComponentSectionCollection';
  items: Array<Maybe<ComponentSection>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentSectionColumnsCollection = {
  __typename?: 'ComponentSectionColumnsCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSectionFilter>>>;
  columnsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSectionLinkingCollections = {
  __typename?: 'ComponentSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentSectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_text_cta) */
export type ComponentTextCta = Entry & {
  __typename?: 'ComponentTextCta';
  buttonExternalUrl?: Maybe<Scalars['String']>;
  buttonLabel?: Maybe<Scalars['String']>;
  buttonReference?: Maybe<Entry>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['JSON']>;
  linkedFrom?: Maybe<ComponentTextCtaLinkingCollections>;
  subtext?: Maybe<ComponentTextCtaSubtext>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_text_cta) */
export type ComponentTextCtaButtonExternalUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_text_cta) */
export type ComponentTextCtaButtonLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_text_cta) */
export type ComponentTextCtaButtonReferenceArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_text_cta) */
export type ComponentTextCtaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_text_cta) */
export type ComponentTextCtaLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_text_cta) */
export type ComponentTextCtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_text_cta) */
export type ComponentTextCtaSubtextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_text_cta) */
export type ComponentTextCtaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentTextCtaCollection = {
  __typename?: 'ComponentTextCtaCollection';
  items: Array<Maybe<ComponentTextCta>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentTextCtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTextCtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentTextCtaFilter>>>;
  buttonExternalUrl?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_contains?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  buttonExternalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonExternalUrl_not?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_not_contains?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLabel?: InputMaybe<Scalars['String']>;
  buttonLabel_contains?: InputMaybe<Scalars['String']>;
  buttonLabel_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLabel_not?: InputMaybe<Scalars['String']>;
  buttonLabel_not_contains?: InputMaybe<Scalars['String']>;
  buttonLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonReference_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  subtext_contains?: InputMaybe<Scalars['String']>;
  subtext_exists?: InputMaybe<Scalars['Boolean']>;
  subtext_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentTextCtaLinkingCollections = {
  __typename?: 'ComponentTextCtaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type ComponentTextCtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentTextCtaLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentTextCtaOrder {
  ButtonExternalUrlAsc = 'buttonExternalUrl_ASC',
  ButtonExternalUrlDesc = 'buttonExternalUrl_DESC',
  ButtonLabelAsc = 'buttonLabel_ASC',
  ButtonLabelDesc = 'buttonLabel_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ComponentTextCtaSubtext = {
  __typename?: 'ComponentTextCtaSubtext';
  json: Scalars['JSON'];
  links: ComponentTextCtaSubtextLinks;
};

export type ComponentTextCtaSubtextAssets = {
  __typename?: 'ComponentTextCtaSubtextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentTextCtaSubtextEntries = {
  __typename?: 'ComponentTextCtaSubtextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentTextCtaSubtextLinks = {
  __typename?: 'ComponentTextCtaSubtextLinks';
  assets: ComponentTextCtaSubtextAssets;
  entries: ComponentTextCtaSubtextEntries;
};

/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_text_section) */
export type ComponentTextSection = Entry & {
  __typename?: 'ComponentTextSection';
  body?: Maybe<ComponentTextSectionBody>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentTextSectionLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_text_section) */
export type ComponentTextSectionBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_text_section) */
export type ComponentTextSectionInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_text_section) */
export type ComponentTextSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentTextSectionBody = {
  __typename?: 'ComponentTextSectionBody';
  json: Scalars['JSON'];
  links: ComponentTextSectionBodyLinks;
};

export type ComponentTextSectionBodyAssets = {
  __typename?: 'ComponentTextSectionBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentTextSectionBodyEntries = {
  __typename?: 'ComponentTextSectionBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentTextSectionBodyLinks = {
  __typename?: 'ComponentTextSectionBodyLinks';
  assets: ComponentTextSectionBodyAssets;
  entries: ComponentTextSectionBodyEntries;
};

export type ComponentTextSectionCollection = {
  __typename?: 'ComponentTextSectionCollection';
  items: Array<Maybe<ComponentTextSection>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentTextSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTextSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentTextSectionFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentTextSectionLinkingCollections = {
  __typename?: 'ComponentTextSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type ComponentTextSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentTextSectionLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentTextSectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_three_card_collection) */
export type ComponentThreeCardCollection = Entry & {
  __typename?: 'ComponentThreeCardCollection';
  buttonExternalUrl?: Maybe<Scalars['String']>;
  buttonLabel?: Maybe<Scalars['String']>;
  buttonReference?: Maybe<Page>;
  cardsCollection?: Maybe<ComponentThreeCardCollectionCardsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentThreeCardCollectionLinkingCollections>;
  subtext?: Maybe<ComponentThreeCardCollectionSubtext>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_three_card_collection) */
export type ComponentThreeCardCollectionButtonExternalUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_three_card_collection) */
export type ComponentThreeCardCollectionButtonLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_three_card_collection) */
export type ComponentThreeCardCollectionButtonReferenceArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_three_card_collection) */
export type ComponentThreeCardCollectionCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_three_card_collection) */
export type ComponentThreeCardCollectionInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_three_card_collection) */
export type ComponentThreeCardCollectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_three_card_collection) */
export type ComponentThreeCardCollectionSubtextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/component_three_card_collection) */
export type ComponentThreeCardCollectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentThreeCardCollectionCardsCollection = {
  __typename?: 'ComponentThreeCardCollectionCardsCollection';
  items: Array<Maybe<ComponentArticleCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentThreeCardCollectionCollection = {
  __typename?: 'ComponentThreeCardCollectionCollection';
  items: Array<Maybe<ComponentThreeCardCollection>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentThreeCardCollectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentThreeCardCollectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentThreeCardCollectionFilter>>>;
  buttonExternalUrl?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_contains?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  buttonExternalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonExternalUrl_not?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_not_contains?: InputMaybe<Scalars['String']>;
  buttonExternalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLabel?: InputMaybe<Scalars['String']>;
  buttonLabel_contains?: InputMaybe<Scalars['String']>;
  buttonLabel_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLabel_not?: InputMaybe<Scalars['String']>;
  buttonLabel_not_contains?: InputMaybe<Scalars['String']>;
  buttonLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonReference?: InputMaybe<CfPageNestedFilter>;
  buttonReference_exists?: InputMaybe<Scalars['Boolean']>;
  cardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtext_contains?: InputMaybe<Scalars['String']>;
  subtext_exists?: InputMaybe<Scalars['Boolean']>;
  subtext_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentThreeCardCollectionLinkingCollections = {
  __typename?: 'ComponentThreeCardCollectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type ComponentThreeCardCollectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentThreeCardCollectionLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentThreeCardCollectionOrder {
  ButtonExternalUrlAsc = 'buttonExternalUrl_ASC',
  ButtonExternalUrlDesc = 'buttonExternalUrl_DESC',
  ButtonLabelAsc = 'buttonLabel_ASC',
  ButtonLabelDesc = 'buttonLabel_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ComponentThreeCardCollectionSubtext = {
  __typename?: 'ComponentThreeCardCollectionSubtext';
  json: Scalars['JSON'];
  links: ComponentThreeCardCollectionSubtextLinks;
};

export type ComponentThreeCardCollectionSubtextAssets = {
  __typename?: 'ComponentThreeCardCollectionSubtextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentThreeCardCollectionSubtextEntries = {
  __typename?: 'ComponentThreeCardCollectionSubtextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentThreeCardCollectionSubtextLinks = {
  __typename?: 'ComponentThreeCardCollectionSubtextLinks';
  assets: ComponentThreeCardCollectionSubtextAssets;
  entries: ComponentThreeCardCollectionSubtextEntries;
};

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/megaMenu) */
export type MegaMenu = Entry & {
  __typename?: 'MegaMenu';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  itemsCollection?: Maybe<MegaMenuItemsCollection>;
  linkedFrom?: Maybe<MegaMenuLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/megaMenu) */
export type MegaMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/megaMenu) */
export type MegaMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/megaMenu) */
export type MegaMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MegaMenuCollection = {
  __typename?: 'MegaMenuCollection';
  items: Array<Maybe<MegaMenu>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/megaMenuDropdown) */
export type MegaMenuDropdown = Entry & {
  __typename?: 'MegaMenuDropdown';
  columnOneItemsCollection?: Maybe<MegaMenuDropdownColumnOneItemsCollection>;
  columnThreeItemsCollection?: Maybe<MegaMenuDropdownColumnThreeItemsCollection>;
  columnTwoItemsCollection?: Maybe<MegaMenuDropdownColumnTwoItemsCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkReference?: Maybe<Page>;
  linkedFrom?: Maybe<MegaMenuDropdownLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/megaMenuDropdown) */
export type MegaMenuDropdownColumnOneItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/megaMenuDropdown) */
export type MegaMenuDropdownColumnThreeItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/megaMenuDropdown) */
export type MegaMenuDropdownColumnTwoItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/megaMenuDropdown) */
export type MegaMenuDropdownLinkReferenceArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/megaMenuDropdown) */
export type MegaMenuDropdownLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/megaMenuDropdown) */
export type MegaMenuDropdownTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type MegaMenuDropdownCollection = {
  __typename?: 'MegaMenuDropdownCollection';
  items: Array<Maybe<MegaMenuDropdown>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MegaMenuDropdownColumnOneItemsCollection = {
  __typename?: 'MegaMenuDropdownColumnOneItemsCollection';
  items: Array<Maybe<MenuLinkGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MegaMenuDropdownColumnThreeItemsCollection = {
  __typename?: 'MegaMenuDropdownColumnThreeItemsCollection';
  items: Array<Maybe<MegaMenuDropdownColumnThreeItemsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MegaMenuDropdownColumnThreeItemsItem = MenuLinkGroup | MenuPromo;

export type MegaMenuDropdownColumnTwoItemsCollection = {
  __typename?: 'MegaMenuDropdownColumnTwoItemsCollection';
  items: Array<Maybe<MenuLinkGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MegaMenuDropdownFilter = {
  AND?: InputMaybe<Array<InputMaybe<MegaMenuDropdownFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MegaMenuDropdownFilter>>>;
  columnOneItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  columnThreeItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  columnTwoItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  linkReference?: InputMaybe<CfPageNestedFilter>;
  linkReference_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MegaMenuDropdownLinkingCollections = {
  __typename?: 'MegaMenuDropdownLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  megaMenuCollection?: Maybe<MegaMenuCollection>;
};


export type MegaMenuDropdownLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MegaMenuDropdownLinkingCollectionsMegaMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MegaMenuDropdownOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type MegaMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<MegaMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MegaMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type MegaMenuItemsCollection = {
  __typename?: 'MegaMenuItemsCollection';
  items: Array<Maybe<MegaMenuDropdown>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MegaMenuLinkingCollections = {
  __typename?: 'MegaMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MegaMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MegaMenuOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuLink) */
export type MenuLink = Entry & {
  __typename?: 'MenuLink';
  contentfulMetadata: ContentfulMetadata;
  linkReference?: Maybe<Page>;
  linkText?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<MenuLinkLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuLink) */
export type MenuLinkLinkReferenceArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuLink) */
export type MenuLinkLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuLink) */
export type MenuLinkLinkUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuLink) */
export type MenuLinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MenuLinkCollection = {
  __typename?: 'MenuLinkCollection';
  items: Array<Maybe<MenuLink>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MenuLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuLinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  linkReference?: InputMaybe<CfPageNestedFilter>;
  linkReference_exists?: InputMaybe<Scalars['Boolean']>;
  linkText?: InputMaybe<Scalars['String']>;
  linkText_contains?: InputMaybe<Scalars['String']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkText_not?: InputMaybe<Scalars['String']>;
  linkText_not_contains?: InputMaybe<Scalars['String']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkUrl?: InputMaybe<Scalars['String']>;
  linkUrl_contains?: InputMaybe<Scalars['String']>;
  linkUrl_exists?: InputMaybe<Scalars['Boolean']>;
  linkUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkUrl_not?: InputMaybe<Scalars['String']>;
  linkUrl_not_contains?: InputMaybe<Scalars['String']>;
  linkUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuLinkGroup) */
export type MenuLinkGroup = Entry & {
  __typename?: 'MenuLinkGroup';
  contentfulMetadata: ContentfulMetadata;
  groupTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<MenuLinkGroupLinkingCollections>;
  linksCollection?: Maybe<MenuLinkGroupLinksCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuLinkGroup) */
export type MenuLinkGroupGroupTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuLinkGroup) */
export type MenuLinkGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuLinkGroup) */
export type MenuLinkGroupLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type MenuLinkGroupCollection = {
  __typename?: 'MenuLinkGroupCollection';
  items: Array<Maybe<MenuLinkGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MenuLinkGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuLinkGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuLinkGroupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  groupTitle?: InputMaybe<Scalars['String']>;
  groupTitle_contains?: InputMaybe<Scalars['String']>;
  groupTitle_exists?: InputMaybe<Scalars['Boolean']>;
  groupTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupTitle_not?: InputMaybe<Scalars['String']>;
  groupTitle_not_contains?: InputMaybe<Scalars['String']>;
  groupTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type MenuLinkGroupLinkingCollections = {
  __typename?: 'MenuLinkGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  megaMenuDropdownCollection?: Maybe<MegaMenuDropdownCollection>;
};


export type MenuLinkGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MenuLinkGroupLinkingCollectionsMegaMenuDropdownCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type MenuLinkGroupLinksCollection = {
  __typename?: 'MenuLinkGroupLinksCollection';
  items: Array<Maybe<MenuLink>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum MenuLinkGroupOrder {
  GroupTitleAsc = 'groupTitle_ASC',
  GroupTitleDesc = 'groupTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type MenuLinkLinkingCollections = {
  __typename?: 'MenuLinkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  menuLinkGroupCollection?: Maybe<MenuLinkGroupCollection>;
};


export type MenuLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MenuLinkLinkingCollectionsMenuLinkGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MenuLinkOrder {
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  LinkUrlAsc = 'linkUrl_ASC',
  LinkUrlDesc = 'linkUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuPromo) */
export type MenuPromo = Entry & {
  __typename?: 'MenuPromo';
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<MenuPromoLinkingCollections>;
  subtext?: Maybe<MenuPromoSubtext>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuPromo) */
export type MenuPromoImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuPromo) */
export type MenuPromoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuPromo) */
export type MenuPromoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuPromo) */
export type MenuPromoSubtextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/menuPromo) */
export type MenuPromoTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type MenuPromoCollection = {
  __typename?: 'MenuPromoCollection';
  items: Array<Maybe<MenuPromo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MenuPromoFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuPromoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuPromoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtext_contains?: InputMaybe<Scalars['String']>;
  subtext_exists?: InputMaybe<Scalars['Boolean']>;
  subtext_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MenuPromoLinkingCollections = {
  __typename?: 'MenuPromoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  megaMenuDropdownCollection?: Maybe<MegaMenuDropdownCollection>;
};


export type MenuPromoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MenuPromoLinkingCollectionsMegaMenuDropdownCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MenuPromoOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type MenuPromoSubtext = {
  __typename?: 'MenuPromoSubtext';
  json: Scalars['JSON'];
  links: MenuPromoSubtextLinks;
};

export type MenuPromoSubtextAssets = {
  __typename?: 'MenuPromoSubtextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type MenuPromoSubtextEntries = {
  __typename?: 'MenuPromoSubtextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type MenuPromoSubtextLinks = {
  __typename?: 'MenuPromoSubtextLinks';
  assets: MenuPromoSubtextAssets;
  entries: MenuPromoSubtextEntries;
};

/** Represents a web page in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  content?: Maybe<PageContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Represents a web page in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/page) */
export type PageContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a web page in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a web page in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/page) */
export type PageNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a web page in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/page) */
export type PageSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a web page in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a web page in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageContent = PageLanding;

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/page_landing) */
export type PageLanding = Entry & {
  __typename?: 'PageLanding';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageLandingLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sectionsCollection?: Maybe<PageLandingSectionsCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/page_landing) */
export type PageLandingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/page_landing) */
export type PageLandingNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/page_landing) */
export type PageLandingSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PageLandingCollection = {
  __typename?: 'PageLandingCollection';
  items: Array<Maybe<PageLanding>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageLandingFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageLandingLinkingCollections = {
  __typename?: 'PageLandingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type PageLandingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLandingLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageLandingOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageLandingSectionsCollection = {
  __typename?: 'PageLandingSectionsCollection';
  items: Array<Maybe<PageLandingSectionsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageLandingSectionsItem = ComponentImageAndText | ComponentMarqueeBanner | ComponentTextCta | ComponentTextSection | ComponentThreeCardCollection;

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  componentArticleCardCollection?: Maybe<ComponentArticleCardCollection>;
  componentImageAndTextCollection?: Maybe<ComponentImageAndTextCollection>;
  componentThreeCardCollectionCollection?: Maybe<ComponentThreeCardCollectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  megaMenuDropdownCollection?: Maybe<MegaMenuDropdownCollection>;
  menuLinkCollection?: Maybe<MenuLinkCollection>;
};


export type PageLinkingCollectionsComponentArticleCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsComponentImageAndTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsComponentThreeCardCollectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsMegaMenuDropdownCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsMenuLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/product) */
export type Product = Entry & {
  __typename?: 'Product';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ProductDescription>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ProductLinkingCollections>;
  price?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/product) */
export type ProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/product) */
export type ProductImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/product) */
export type ProductInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/product) */
export type ProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/product) */
export type ProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/product) */
export type ProductSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/product) */
export type ProductTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ProductCollection = {
  __typename?: 'ProductCollection';
  items: Array<Maybe<Product>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProductDescription = {
  __typename?: 'ProductDescription';
  json: Scalars['JSON'];
  links: ProductDescriptionLinks;
};

export type ProductDescriptionAssets = {
  __typename?: 'ProductDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ProductDescriptionEntries = {
  __typename?: 'ProductDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ProductDescriptionLinks = {
  __typename?: 'ProductDescriptionLinks';
  assets: ProductDescriptionAssets;
  entries: ProductDescriptionEntries;
};

export type ProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Float']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductLinkingCollections = {
  __typename?: 'ProductLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  productSectionCollection?: Maybe<ProductSectionCollection>;
};


export type ProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ProductLinkingCollectionsProductSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProductOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Single Product Content Type [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/productSection) */
export type ProductSection = Entry & {
  __typename?: 'ProductSection';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ProductSectionLinkingCollections>;
  productsCollection?: Maybe<ProductSectionProductsCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Single Product Content Type [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/productSection) */
export type ProductSectionInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Single Product Content Type [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/productSection) */
export type ProductSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Single Product Content Type [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/productSection) */
export type ProductSectionProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Single Product Content Type [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/productSection) */
export type ProductSectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ProductSectionCollection = {
  __typename?: 'ProductSectionCollection';
  items: Array<Maybe<ProductSection>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProductSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductSectionLinkingCollections = {
  __typename?: 'ProductSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProductSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProductSectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ProductSectionProductsCollection = {
  __typename?: 'ProductSectionProductsCollection';
  items: Array<Maybe<Product>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentArticleCard?: Maybe<ComponentArticleCard>;
  componentArticleCardCollection?: Maybe<ComponentArticleCardCollection>;
  componentImageAndText?: Maybe<ComponentImageAndText>;
  componentImageAndTextCollection?: Maybe<ComponentImageAndTextCollection>;
  componentMarqueeBanner?: Maybe<ComponentMarqueeBanner>;
  componentMarqueeBannerCollection?: Maybe<ComponentMarqueeBannerCollection>;
  componentSection?: Maybe<ComponentSection>;
  componentSectionCollection?: Maybe<ComponentSectionCollection>;
  componentTextCta?: Maybe<ComponentTextCta>;
  componentTextCtaCollection?: Maybe<ComponentTextCtaCollection>;
  componentTextSection?: Maybe<ComponentTextSection>;
  componentTextSectionCollection?: Maybe<ComponentTextSectionCollection>;
  componentThreeCardCollection?: Maybe<ComponentThreeCardCollection>;
  componentThreeCardCollectionCollection?: Maybe<ComponentThreeCardCollectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  megaMenu?: Maybe<MegaMenu>;
  megaMenuCollection?: Maybe<MegaMenuCollection>;
  megaMenuDropdown?: Maybe<MegaMenuDropdown>;
  megaMenuDropdownCollection?: Maybe<MegaMenuDropdownCollection>;
  menuLink?: Maybe<MenuLink>;
  menuLinkCollection?: Maybe<MenuLinkCollection>;
  menuLinkGroup?: Maybe<MenuLinkGroup>;
  menuLinkGroupCollection?: Maybe<MenuLinkGroupCollection>;
  menuPromo?: Maybe<MenuPromo>;
  menuPromoCollection?: Maybe<MenuPromoCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  pageLanding?: Maybe<PageLanding>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  product?: Maybe<Product>;
  productCollection?: Maybe<ProductCollection>;
  productSection?: Maybe<ProductSection>;
  productSectionCollection?: Maybe<ProductSectionCollection>;
  redirect?: Maybe<Redirect>;
  redirectCollection?: Maybe<RedirectCollection>;
  seo?: Maybe<Seo>;
  seoCollection?: Maybe<SeoCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentArticleCardArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentArticleCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentArticleCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentArticleCardFilter>;
};


export type QueryComponentImageAndTextArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentImageAndTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentImageAndTextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentImageAndTextFilter>;
};


export type QueryComponentMarqueeBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentMarqueeBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentMarqueeBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentMarqueeBannerFilter>;
};


export type QueryComponentSectionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentSectionFilter>;
};


export type QueryComponentTextCtaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentTextCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextCtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentTextCtaFilter>;
};


export type QueryComponentTextSectionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentTextSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentTextSectionFilter>;
};


export type QueryComponentThreeCardCollectionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentThreeCardCollectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentThreeCardCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentThreeCardCollectionFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryMegaMenuArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMegaMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MegaMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MegaMenuFilter>;
};


export type QueryMegaMenuDropdownArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMegaMenuDropdownCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MegaMenuDropdownOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MegaMenuDropdownFilter>;
};


export type QueryMenuLinkArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMenuLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuLinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuLinkFilter>;
};


export type QueryMenuLinkGroupArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMenuLinkGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuLinkGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuLinkGroupFilter>;
};


export type QueryMenuPromoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMenuPromoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuPromoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuPromoFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryPageLandingArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageLandingFilter>;
};


export type QueryProductArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductFilter>;
};


export type QueryProductSectionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProductSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProductSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductSectionFilter>;
};


export type QueryRedirectArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryRedirectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<RedirectOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RedirectFilter>;
};


export type QuerySeoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SeoFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/redirect) */
export type Redirect = Entry & {
  __typename?: 'Redirect';
  contentfulMetadata: ContentfulMetadata;
  from?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<RedirectLinkingCollections>;
  sys: Sys;
  to?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/redirect) */
export type RedirectFromArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/redirect) */
export type RedirectLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/redirect) */
export type RedirectToArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type RedirectCollection = {
  __typename?: 'RedirectCollection';
  items: Array<Maybe<Redirect>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type RedirectFilter = {
  AND?: InputMaybe<Array<InputMaybe<RedirectFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RedirectFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  from?: InputMaybe<Scalars['String']>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_exists?: InputMaybe<Scalars['Boolean']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  to?: InputMaybe<Scalars['String']>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_exists?: InputMaybe<Scalars['Boolean']>;
  to_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RedirectLinkingCollections = {
  __typename?: 'RedirectLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type RedirectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum RedirectOrder {
  FromAsc = 'from_ASC',
  FromDesc = 'from_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ToAsc = 'to_ASC',
  ToDesc = 'to_DESC'
}

/** SEO Metadata for web pages in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/seo) */
export type Seo = Entry & {
  __typename?: 'Seo';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedFrom?: Maybe<SeoLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  noFollow?: Maybe<Scalars['Boolean']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** SEO Metadata for web pages in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/seo) */
export type SeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** SEO Metadata for web pages in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/seo) */
export type SeoKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** SEO Metadata for web pages in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/seo) */
export type SeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** SEO Metadata for web pages in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/seo) */
export type SeoNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** SEO Metadata for web pages in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/seo) */
export type SeoNoFollowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** SEO Metadata for web pages in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/seo) */
export type SeoNoIndexArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** SEO Metadata for web pages in Compose. DO NOT DELETE [See type definition](https://app.contentful.com/spaces/1peef7rr1q3c/content_types/seo) */
export type SeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  items: Array<Maybe<Seo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  no_follow?: InputMaybe<Scalars['Boolean']>;
  no_follow_exists?: InputMaybe<Scalars['Boolean']>;
  no_follow_not?: InputMaybe<Scalars['Boolean']>;
  no_index?: InputMaybe<Scalars['Boolean']>;
  no_index_exists?: InputMaybe<Scalars['Boolean']>;
  no_index_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SeoLinkingCollections = {
  __typename?: 'SeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type SeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SeoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SeoOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NoFollowAsc = 'no_follow_ASC',
  NoFollowDesc = 'no_follow_DESC',
  NoIndexAsc = 'no_index_ASC',
  NoIndexDesc = 'no_index_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type CfPageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  no_follow?: InputMaybe<Scalars['Boolean']>;
  no_follow_exists?: InputMaybe<Scalars['Boolean']>;
  no_follow_not?: InputMaybe<Scalars['Boolean']>;
  no_index?: InputMaybe<Scalars['Boolean']>;
  no_index_exists?: InputMaybe<Scalars['Boolean']>;
  no_index_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageItemFragment = { __typename?: 'Page', slug?: string | null, title?: string | null, sys: { __typename?: 'Sys', id: string } } & { ' $fragmentName'?: 'PageItemFragment' };

export type PageBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PageBySlugQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<(
      { __typename?: 'Page' }
      & { ' $fragmentRefs'?: { 'PageItemFragment': PageItemFragment } }
    ) | null> } | null };

export type MenuLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type MenuLinksQuery = { __typename?: 'Query', menuLinkCollection?: { __typename?: 'MenuLinkCollection', items: Array<(
      { __typename?: 'MenuLink' }
      & { ' $fragmentRefs'?: { 'LinkItemFragment': LinkItemFragment } }
    ) | null> } | null };

export type LinkItemFragment = { __typename?: 'MenuLink', linkUrl?: string | null, linkText?: string | null, sys: { __typename?: 'Sys', id: string }, linkReference?: { __typename?: 'Page', title?: string | null, slug?: string | null } | null } & { ' $fragmentName'?: 'LinkItemFragment' };

export const PageItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<PageItemFragment, unknown>;
export const LinkItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkUrl"}},{"kind":"Field","name":{"kind":"Name","value":"linkText"}},{"kind":"Field","name":{"kind":"Name","value":"linkReference"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<LinkItemFragment, unknown>;
export const PageBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageItem"}}]}}]}}]}},...PageItemFragmentDoc.definitions]} as unknown as DocumentNode<PageBySlugQuery, PageBySlugQueryVariables>;
export const MenuLinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MenuLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuLinkCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItem"}}]}}]}}]}},...LinkItemFragmentDoc.definitions]} as unknown as DocumentNode<MenuLinksQuery, MenuLinksQueryVariables>;