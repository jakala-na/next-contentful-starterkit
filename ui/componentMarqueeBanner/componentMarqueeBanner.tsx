import { FragmentType, graphql, useFragment } from '#/gql';
import Image from 'next/image';

const ComponentMarqueeBannerFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentMarqueeBannerItem on ComponentMarqueeBanner {
    sys {
      id
    }
    title
    subtextString: subtext
    backgroundImage {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
  }
`);

type ComponentMarqueeBannerProps = {
  componentMarqueeBanner: FragmentType<
    typeof ComponentMarqueeBannerFieldsFragment
  >;
};

const ComponentMarqueeBanner = (props: ComponentMarqueeBannerProps) => {
  const componentMarqueeBanner = useFragment(
    ComponentMarqueeBannerFieldsFragment,
    props.componentMarqueeBanner
  );
  const { sys, title, subtextString, backgroundImage } = componentMarqueeBanner;

  if (!sys?.id) return null;

  return (
    <>
      <h2>ComponentMarqueeBanner</h2>
      <div>Id: {sys.id}</div>
      <h3>{title}</h3>
      {subtextString && <div>{subtextString}</div>}
      {backgroundImage &&
        backgroundImage.url &&
        backgroundImage.width &&
        backgroundImage.height && (
          <div>
            <Image
              src={backgroundImage.url}
              width={backgroundImage.width / 2}
              height={backgroundImage.height / 2}
              alt={
                backgroundImage.description ||
                backgroundImage.title ||
                'Untitled'
              }
            />
          </div>
        )}
    </>
  );
};

export default ComponentMarqueeBanner;
