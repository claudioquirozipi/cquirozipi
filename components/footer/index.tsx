import { FooterProps } from "./interface";

const Footer = (props: FooterProps) => {
  const { socialMedia } = props;
  return (
    <div>
      {socialMedia.map((sm, i) => (
        <div key={i}>
          <a href={sm.url} target="_blank" rel="noopener noreferrer">
            <h1>{sm.title}</h1>
            <img src={sm.social_media_image} alt="" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Footer;
