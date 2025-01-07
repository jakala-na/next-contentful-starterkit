import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { transformerTwoslash } from 'fumadocs-twoslash';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      transformers: [...(rehypeCodeDefaultOptions.transformers ?? []), transformerTwoslash()],
    },
  },
});
