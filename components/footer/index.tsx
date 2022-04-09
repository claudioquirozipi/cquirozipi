import { FooterProps } from "./interface";
import style from "./footer.module.css";

const Footer = (props: FooterProps) => {
  const { socialMedia } = props;
  console.log(socialMedia);

  return (
    <footer className={style.footerContainer}>
      {socialMedia.map((sm, i) => (
        <a href={sm.data.url} target="_blank" rel="" key={i}>
          <div className={style.link}>
            <img
              className={style.img}
              src={sm.data.social_media_image}
              alt=""
            />
            <span className={style.title}>{sm.data.title}</span>
          </div>
        </a>
      ))}
    </footer>
  );
};

export default Footer;
