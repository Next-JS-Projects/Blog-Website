import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import * as fs from "fs";

// 1. Collect all files from blogdata directory

// 2. Iterate through them and display them

const Blog = (props) => {
  const [blog, setBlog] = useState(props.allBlogs);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((data) => {
  //       setBlog(data);
  //     });
  // }, []);

  return (
    <div>
      <div className={styles.datalist}>
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
    </div>
  );
};

export async function getStaticProps(context) {
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

// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/blogs");
//   let allBlogs = await data.json();

//   return {
//     props: { allBlogs },
//   };
// }

export default Blog;
