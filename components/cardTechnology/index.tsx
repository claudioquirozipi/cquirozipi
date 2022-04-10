import { CardTechnologyProps } from "./interface";
import style from "./style.module.css";

const CardTechnology = (props: CardTechnologyProps) => {
  const { technology } = props;
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <img
          className={style.img}
          src={technology.data.technology_image}
          alt=""
        />
        <h1 className={style.title}>{technology.data.title}</h1>
      </div>
    </div>
  );
};

export default CardTechnology;
