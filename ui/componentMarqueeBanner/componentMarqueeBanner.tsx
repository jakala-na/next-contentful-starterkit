import { FragmentType, graphql, useFragment } from '#/gql';
import { SysFieldsFragment } from '../sys';
import { ImageAsset } from '../asset';

const ComponentMarqueeBannerFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentMarqueeBannerItem on ComponentMarqueeBanner {
    sys {
      ...SysItem
    }
    title
    subtextString: subtext
    backgroundImage {
      ...AssetItem
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
  const sys = useFragment(SysFieldsFragment, componentMarqueeBanner.sys);
  const { title, subtextString, backgroundImage } = componentMarqueeBanner;

  return (
    <>
      <h2>ComponentMarqueeBanner</h2>
      <div>Id: {sys.id}</div>
      <h3>{title}</h3>
      {subtextString && <div>{subtextString}</div>}
      {backgroundImage && (
        <div>
          <ImageAsset asset={backgroundImage} />
        </div>
      )}
    </>
  );
};

export default ComponentMarqueeBanner;
