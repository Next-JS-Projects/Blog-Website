import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";

// 1. Find file corresponding to the slug

// 2. Populate them inside the page

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  const router = useRouter();

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((data) => {
  //       setBlog(data);
  //     });
  // }, [router.isReady]);

  return (
    <div className={styles.blogpostcontainer}>
      <main>
        <h1>{blog && blog.title}</h1>
        <hr />
        <p>{blog && blog.content}</p>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();

  return {
    props: { myBlog },
  };
}

export default Slug;
