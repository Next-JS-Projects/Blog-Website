import Head from "next/head";
// import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import * as fs from "fs";
import { useState } from "react";

export default function Home(props) {
  const [blog, setBlog] = useState(props.allBlogs);

  console.log("INDEX FILE", props);
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
            {blog &&
              blog.map((blogitem, index) => {
                return (
                  <div key={index}>
                    <Link href={`/blogpost/${blogitem.slug}`}>
                      <h3>{blogitem.title}</h3>
                    </Link>
                    <p>{blogitem.metadesc.substr(0, 140)}...</p>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  let result = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];

  for (let index = 0; index < result.length; index++) {
    const item = result[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs },
  };
}
