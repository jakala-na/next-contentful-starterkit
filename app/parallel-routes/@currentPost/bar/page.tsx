import Link from "next/link";

const Page = () => {
  return (
    <>
      <h1>currentPost Bar</h1>
      <p>
        <Link href="/parallel-routes/foo">To Foo</Link>
      </p>
      <p>
        <Link href="/parallel-routes/baz">To Baz</Link>
      </p>
    </>
  );
};

export default Page
