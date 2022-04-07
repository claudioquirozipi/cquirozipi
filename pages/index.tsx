import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Remarkable } from "remarkable";
let md = new Remarkable();
// import marked from "marked";
interface Props {
  content: { attributes: HomeAttributes };
}
interface HomeAttributes {
  hero_title: string;
  hero_description: string;
  hero_image: string;
}
const Home: NextPage<any> = (props) => {
  const { home } = props;
  console.log("props", props);
  // const { hero_title, hero_description, hero_image } = props.content.attributes;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hola mundo</h1>
      {JSON.stringify(home)}
      {home.map((d: any, i: number) => (
        <div key={i}>
          <h1>{d.data.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: md.render(d.data.description) }}
          ></div>
          <p>{md.render(d.data.description)}</p>
          <img src={d.data.home_image} alt="" />
          <a href={d.data.url}>link</a>
        </div>
      ))}
      {/* <h1>{hero_title}</h1>
      <p>{hero_description}</p>
      <p>{hero_image}</p> */}
      {/* <Image src={hero_image} alt="hero image" /> */}
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  let props = {};
  const homeFiles = fs.readdirSync(path.join("content/home"));
  console.log("files", homeFiles);

  const home = homeFiles.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const markDownWithMeta = fs.readFileSync(
      path.join("content/home", fileName),
      "utf-8"
    );
    const { data } = matter(markDownWithMeta);
    return {
      slug,
      data,
    };
  });

  console.log("home", home);
  return {
    props: {
      home,
    },
  };
};

export default Home;
