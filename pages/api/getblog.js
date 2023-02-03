import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, result) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
    // console.log(result)
    res.status(200).json(JSON.parse(result));

  });
}
