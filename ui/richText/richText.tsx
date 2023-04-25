import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';

type RichTextProps = {
  json: Document;
};

const RichText = (props: RichTextProps) => {
  const { json } = props;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: documentToHtmlString(json)
      }}
    />
  );
};

export default RichText;
