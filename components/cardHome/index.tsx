import ReactMarkdown from "react-markdown";

import style from "./style.module.css";
import { CardHomeProps } from "./interface";

const CardHome = (props: CardHomeProps) => {
  const { home, isEven } = props;

  return (
    <div className={`${style.cardContainer} ${isEven && style.reverse}`}>
      <div className={style.textContainer}>
        <h1 className={style.title}>{home.data.title}</h1>
        <ReactMarkdown className={style.markdown}>
          {home.data.description}
        </ReactMarkdown>
        {home.data.url && (
          <a className={style.link} href={home.data.url} target="_blank">
            Go to
          </a>
        )}
      </div>
      <img src={home.data.home_image} alt="" className={style.img} />
    </div>
  );
};

export default CardHome;
