import type { NextPage, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { getMarkdown } from "../utils/functions";
import Layout from "../components/layout";
import { Data, Projects, SocialMedia } from "../utils/interface";

interface HomeProps {
  projects: Data<Projects>[];
  socialMedia: Data<SocialMedia>[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { projects, socialMedia } = props;
  return (
    <Layout socialMedia={socialMedia}>
      {projects.map((d, i) => (
        <div key={i}>
          <h1>{d.data.title}</h1>
          <ReactMarkdown>{d.data.description}</ReactMarkdown>
          <img src={d.data.project_image} alt="" />
          {d.data.urlGithub && <a href={d.data.urlGithub}>link gitgun</a>}
          {d.data.urlGithub && <a href={d.data.urlWeb}>link web</a>}
        </div>
      ))}
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
