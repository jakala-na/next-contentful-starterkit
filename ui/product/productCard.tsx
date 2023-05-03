import Link from 'next/link';
import { FragmentType, useFragment } from '#/gql';
import { SysFieldsFragment } from '../sys';
import { ProductFieldsFragment, getPermalink } from './product';

type ProductCardProps = {
  product: FragmentType<typeof ProductFieldsFragment>;
  linkPrefix?: string;
};

const ProductCard = (props: ProductCardProps) => {
  const product = useFragment(ProductFieldsFragment, props.product);
  const sys = useFragment(SysFieldsFragment, product.sys);
  const { slug, title } = product;
  const url = props.linkPrefix
    ? `${props.linkPrefix}/${slug}`
    : getPermalink(slug!);

  return (
    <div id={sys.id}>
      <h2>
        <Link href={url}>{title}</Link>
      </h2>
    </div>
  );
};

export default ProductCard;
