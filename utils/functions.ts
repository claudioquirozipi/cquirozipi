import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getMarkdown(content: string) {

 const files = fs.readdirSync(path.join(`content/${content}`));

  const response = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const markDownWithMeta = fs.readFileSync(
      path.join(`content/${content}`, fileName),
      "utf-8"
    );
    const { data } = matter(markDownWithMeta);
    let allData :any= {}
    for (const property in data) {
      if( typeof data[property] === "object") {
        allData[property] =JSON.stringify(data[property]).replaceAll('"', "").replaceAll("/", "")
      } else {
        allData[property] =data[property]
      }
    }
    return {
      slug,
      data: allData,
    };
  });

  return response

}