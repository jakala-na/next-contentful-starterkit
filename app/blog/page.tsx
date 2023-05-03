import Link from 'next/link';

const Page = () => {
  return (
    <>
      <h1>Blog Children</h1>
      <p>This is the children param.</p>
      <Link href="/blog">Latest Post</Link>
    </>
  );
};

export default Page;
