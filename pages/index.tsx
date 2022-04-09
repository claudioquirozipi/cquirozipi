import type { NextPage, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { getMarkdown } from "../utils/functions";
import Layout from "../components/layout";
import { Data, Home, SocialMedia } from "../utils/interface";

interface HomeProps {
  home: Data<Home>[];
  socialMedia: Data<SocialMedia>[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { home, socialMedia } = props;
  return (
    <Layout socialMedia={socialMedia}>
      {home.map((d, i) => (
        <div key={i}>
          <h1>{d.data.title}</h1>
          <ReactMarkdown>{d.data.description}</ReactMarkdown>
          <img src={d.data.home_image} alt="" />
          <a href={d.data.url}>link</a>
        </div>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const home = getMarkdown("home");
  const socialMedia = getMarkdown("social_media");
  return {
    props: {
      home,
      socialMedia,
    },
  };
};

export default Home;
