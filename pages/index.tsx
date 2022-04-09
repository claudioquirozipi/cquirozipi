import type { NextPage, GetStaticProps } from "next";

import { getMarkdown } from "../utils/functions";
import Layout from "../components/layout";
import { Data, Home, SocialMedia } from "../utils/interface";
import CardHome from "../components/cardHome";

interface HomeProps {
  home: Data<Home>[];
  socialMedia: Data<SocialMedia>[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { home, socialMedia } = props;
  return (
    <Layout socialMedia={socialMedia}>
      {home.map((d, i) => (
        <CardHome home={d} key={i} isEven={i % 2 !== 0} />
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
