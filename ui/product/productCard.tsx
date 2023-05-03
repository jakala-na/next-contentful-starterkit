import Link from 'next/link';
import { FragmentType, useFragment } from '#/gql';
import { SysFieldsFragment } from '../sys';
import { ProductFieldsFragment } from './product';

type ProductCardProps = {
  product: FragmentType<typeof ProductFieldsFragment>;
};

const ProductCard = (props: ProductCardProps) => {
  const product = useFragment(ProductFieldsFragment, props.product);
  const sys = useFragment(SysFieldsFragment, product.sys);
  const { slug, title } = product;

  return (
    <div id={sys.id}>
      <h2>
        <Link href={`/parallel-routes/${slug}`}>{title}</Link>
      </h2>
    </div>
  );
};

export default ProductCard;
