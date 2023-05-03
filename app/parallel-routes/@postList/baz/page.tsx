import Link from "next/link";

const Page = () => {
  return (
    <>
      <h1>postList Baz</h1>
      <p>
        <Link href="/parallel-routes/foo">To Foo</Link>
      </p>
      <p>
        <Link href="/parallel-routes/bar">To Bar</Link>
      </p>
    </>
  );
};

export default Page
