import parse from 'html-react-parser';

import { HeaderProps } from '#/types/layout';
import { draftMode } from 'next/headers';
import Link from 'next/link';

export function SiteHeader(props: HeaderProps) {
  const { isEnabled: isDraftMode } = draftMode();
  return (
    <>
      {isDraftMode && (
        <div
          className='mb-4 bg-accent border-primary border-b-2 px-6 py-5 text-base text-primary'
          role='alert'
        >
          You are in draft mode. As part of draft mode you can see unpublished
          content. To exit draft mode click{' '}
          <a className={'underline'} href='/api/disable-draft'>
            here
          </a>
          .
        </div>
      )}
      <div className='note-div'>
        {props?.notification_bar.show_announcement &&
          typeof props.notification_bar.announcement_text === 'string' && (
            <div {...(props.notification_bar.$?.announcement_text as {})}>
              {parse(props.notification_bar.announcement_text)}
            </div>
          )}
      </div>
      <header className='site-header container mx-auto'>
        <div className='flex items-center justify-between py-5'>
          <div className='wrapper-logo'>
            {props && (
              <Link href='/' className='logo-tag' title='Contentstack'>
                <img
                  className='logo'
                  src={props.logo.url}
                  alt={props.title}
                  title={props.title}
                  {...(props.logo.$?.url as {})}
                />
              </Link>
            )}
          </div>
          <input className='hidden' type='checkbox' id='menu-btn' />
          <label className='cursor-pointer inline-block float-right relative select-none px-5 py-7 lg:hidden' htmlFor='menu-btn'>
            <span className='navicon' />
          </label>
          <nav>
            <ul className='flex space-x-4'>
              {props &&
                props.navigation_menu.map((list) => {
                  return (
                    <li
                      key={list.label}
                      {...(list.page_reference[0].$?.url as {})}
                    >
                      <Link href={list.page_reference[0].url} className='font-bold text-base hover:text-destructive'>
                        {list.label}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
