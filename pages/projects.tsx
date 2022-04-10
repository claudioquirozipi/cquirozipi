import type { NextPage, GetStaticProps } from "next";

import style from "../styles/projects.module.css";
import { getMarkdown } from "../utils/functions";
import Layout from "../components/layout";
import { Data, Projects, SocialMedia } from "../utils/interface";
import CardProjects from "../components/cardProjects";

interface HomeProps {
  projects: Data<Projects>[];
  socialMedia: Data<SocialMedia>[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { projects, socialMedia } = props;
  return (
    <Layout socialMedia={socialMedia}>
      <div className={style.projectsContainer}>
        {projects.map((d, i) => (
          <CardProjects project={d} key={i} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getMarkdown("projects");
  const socialMedia = getMarkdown("social_media");
  return {
    props: {
      projects,
      socialMedia,
    },
  };
};

export default Home;
