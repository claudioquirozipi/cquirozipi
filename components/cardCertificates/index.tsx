import ReactMarkdown from "react-markdown";

import style from "./style.module.css";
import { CardCertificatesProps } from "./interface";

const CardCertificates = (props: CardCertificatesProps) => {
  const { certificate } = props;
  return (
    <div className={style.container}>
      <img
        className={style.img}
        src={certificate.data.certificates_image}
        alt=""
      />
      <div className={style.containerText}>
        <h1>{certificate.data.title}</h1>
        <ReactMarkdown>{certificate.data.description}</ReactMarkdown>
        <p>{certificate.data.institute}</p>
        <p>{dateFormated(certificate.data.date)}</p>
      </div>
    </div>
  );
};

function dateFormated(date: any) {
  const newDate = new Date(date);
  const d =
    newDate.getDate() < 9 ? `0${newDate.getDate() + 1}` : newDate.getDate() + 1;
  const m =
    newDate.getMonth() < 9
      ? `0${newDate.getMonth() + 1}`
      : newDate.getMonth() + 1;
  const y = newDate.getFullYear();

  return `${d}-${m}-${y}`;
}

export default CardCertificates;
