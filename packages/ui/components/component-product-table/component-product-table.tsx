import { Card, type CardProps } from '../card';

export interface ComponentProductTableProps {
  headline?: string | null;
  subline?: string | null;
  items?: CardProps[] | null;
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
      {headline ? <h2 className="text-3xl">{headline}</h2> : null}
      {subline ? <div className="mt-6">{subline}</div> : null}
      {items ? (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <Card
              key={`item-${index}`}
              headline={item.headline}
              bodyText={item.bodyText}
              image={item.image}
              link={item.link}
              onClickEvent={item.onClickEvent}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
