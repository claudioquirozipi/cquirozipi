import type { NextPage, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { getMarkdown } from "../utils/functions";
import Layout from "../components/layout";
import { Data, SocialMedia, Technologies } from "../utils/interface";

interface TechnologiesProps {
  technologies: Data<Technologies>[];
  socialMedia: Data<SocialMedia>[];
}

const Technologies: NextPage<TechnologiesProps> = (props) => {
  const { technologies, socialMedia } = props;
  return (
    <Layout socialMedia={socialMedia}>
      {technologies.map((d, i) => (
        <div key={i}>
          <h1>{d.data.title}</h1>
          <img src={d.data.technology_image} alt="" />
        </div>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const technologies = getMarkdown("technologies");
  const socialMedia = getMarkdown("social_media");
  return {
    props: {
      technologies,
      socialMedia,
    },
  };
};

export default Technologies;
