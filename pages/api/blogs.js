import * as fs from "fs";

export default async function handler(req, res) {
  let result = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];

  for (let index = 0; index < result.length; index++) {
    const item = result[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  res.status(200).json(allBlogs);
  //   let allBlogs = [];
  //   res.status(200).json(JSON.parse(allBlogs));
  // });
}
