import Link from "next/link";

const Page = () => {
  return (
    <>
      <h1>currentPost Foo</h1>
      <p>
        <Link href="/parallel-routes/bar">To Bar</Link>
      </p>
      <p>
        <Link href="/parallel-routes/baz">To Baz</Link>
      </p>
    </>
  );
};

export default Page
