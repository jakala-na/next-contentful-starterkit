import Image from 'next/image';
import styles from './page.module.css';

type Time = {
  unixtime: number;
};

export default async function Home() {
  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/America/Chicago',
    {
      next: {
        revalidate: 5
      }
    }
  );
  const datetime: Time = await res.json();
  return <h1>{datetime.unixtime}</h1>;

  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js 13!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing <code className={styles.code}>app/page.tsx</code>
      </p>

      <div className={styles.grid}>
        <a href="https://beta.nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js 13</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </>
  );
}
