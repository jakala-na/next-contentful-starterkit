import { type ReactNode } from 'react';
import { Link } from '../link';

import { Image, type ImageProps } from '@repo/ui/components/image';

export interface TopicBusinessInfoProps {
  name?: string | null;
  bio?: ReactNode;
  avatar?: ImageProps | null;
  website?: string | null;
  location?: string | null;
  cardStyle: boolean | null;
  addAttributes?: (name: string) => object | null;
}

export function TopicPerson({
  name,
  bio,
  avatar,
  website,
  location,
  cardStyle,
  addAttributes = () => ({}),
}: TopicBusinessInfoProps) {
  return (
    <div className="my-12 flex flex-col items-center rounded-xl bg-secondaryDark px-10 py-6 text-white md:flex-row md:gap-10">
      {avatar ? (
        <div className="flex shrink-0 flex-col items-center">
          <div className="shrink-0 overflow-hidden rounded-xl shadow-lg">
            <Image {...addAttributes('image')} {...avatar} alt={avatar.alt} />
          </div>
          {!cardStyle && (
            <div className="mt-3 rounded-md bg-accent px-3 py-2 text-xs text-black">
              <strong>Leader profile</strong>
            </div>
          )}
        </div>
      ) : null}

      <div className="py-6">
        {name ? <h2 className="text-3xl">{name}</h2> : null}
        {bio ? <div className="pt-6">{bio}</div> : null}
        {website ? (
          <div className="pt-6">
            <Link href={website}>{website}</Link>
          </div>
        ) : null}
        {location ? <div className="pt-6">{location}</div> : null}
      </div>
    </div>
  );
}
