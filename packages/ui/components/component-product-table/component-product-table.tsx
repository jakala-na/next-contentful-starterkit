import { type ReactNode } from 'react';

export interface ComponentProductTableProps {
  headline?: string | null;
  subline?: string | null;
  items?: ReactNode[] | null;
  addAttributes?: (name: string) => object | null;
}

export function ComponentProductTable({
  headline,
  subline,
  items,
  addAttributes = () => ({}),
}: ComponentProductTableProps) {
  return (
    <div {...addAttributes('attributes')}>
      {Boolean(headline) && <h2 className="text-3xl">{headline}</h2>}
      {Boolean(subline) && <div className="mt-6">{subline}</div>}
      {items && <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">{items}</div>}
    </div>
  );
}
