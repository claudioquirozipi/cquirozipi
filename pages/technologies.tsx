import type { NextPage, GetStaticProps } from "next";

import { Data, SocialMedia, Technology } from "../utils/interface";
import CardTechnology from "../components/cardTechnology";
import style from "../styles/technologies.module.css";
import { getMarkdown } from "../utils/functions";
import Layout from "../components/layout";

interface TechnologiesProps {
  technologies: Data<Technology>[];
  socialMedia: Data<SocialMedia>[];
}

const Technologies: NextPage<TechnologiesProps> = (props) => {
  const { technologies, socialMedia } = props;
  return (
    <Layout socialMedia={socialMedia}>
      <h1 className={style.title}>Technologies</h1>
      <div className={style.container}>
        {technologies.map((d, i) => (
          <CardTechnology key={i} technology={d} />
        ))}
      </div>
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
