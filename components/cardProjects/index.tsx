import ReactMarkdown from "react-markdown";

import { CardProjectsProps } from "./interface";
import style from "./style.module.css";

const CardProjects = (props: CardProjectsProps) => {
  const { project } = props;

  return (
    <div className={style.container}>
      <img className={style.img} src={project.data.project_image} alt="" />
      <div className={style.containerTexts}>
        <h1 className={style.title}>{project.data.title}</h1>
        <ReactMarkdown className={style.markdown}>
          {project.data.description}
        </ReactMarkdown>
      </div>
      {(project.data.urlGithub || project.data.urlWeb) && (
        <div className={style.containerLinks}>
          {project.data.urlGithub && (
            <a className={style.link} href={project.data.urlGithub}>
              Github
            </a>
          )}
          {project.data.urlWeb && (
            <a className={style.link} href={project.data.urlWeb}>
              URL Web
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default CardProjects;
