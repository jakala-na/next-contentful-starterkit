import Link from 'next/link';

const Page = () => {
  return (
    <>
      <h1>Dashboard Children</h1>
      <p>This is the children param.</p>
      <p>
        <Link href="/parallel-routes">Reset</Link>
      </p>
      <p>
        <Link href="/parallel-routes/foo">To Foo</Link>
      </p>
      <p>
        <Link href="/parallel-routes/bar">To Bar</Link>
      </p>
      <p>
        <Link href="/parallel-routes/baz">To Baz</Link>
      </p>
      <p>
        <Link href="/parallel-routes/posts">To Post List</Link>
      </p>
      <p>
        <Link href="/parallel-routes/products">To Product List</Link>
      </p>
    </>
  );
};

export default Page;
