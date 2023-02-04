import Head from "next/head";
// import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
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

      <main className={styles.main}>
        <h1> Code Blogger</h1>
        {/*<Image
          className={styles.myImg}
          src="/coder.jpg"
          alt=""
          width={237}
          height={158}
        />*/}
        <img
          className={styles.myImg}
          src="/coder.jpg"
          alt=""
          width={237}
          height={158}
        />
        <p className={styles.desc}>
          A perfect blog for Coders who wants to code like professional - by
          Code Blogger{" "}
        </p>

        <div className={styles.datalist}>
          <h2>Latest Blogs</h2>
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
    </div>
  );
}
