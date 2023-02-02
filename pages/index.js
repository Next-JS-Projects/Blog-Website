import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Blogger Coder - Homepage</title>
        <meta
          name="description"
          content="The Homepage of Blogger Coder website "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="nextjs, blogger coder, blogger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1>Blogger Coder</h1>
        <p className={styles.desc}>
          A perfect blog for Coders who wants to code like professional - by
          Blogger Coder{" "}
        </p>

        {/* <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
  </div> */}

        <div className={styles.datalist}>
        <h2>Popular Blogs</h2>
          <div className={styles.dataitem}>
            <h3>How to Learn JavaScript in 2023?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus
            </p>
          </div>
          <div className={styles.dataitem}>
            <h3>How to Learn JavaScript in 2023?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus
            </p>
          </div>
          <div className={styles.dataitem}>
            <h3>How to Learn JavaScript in 2023?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
