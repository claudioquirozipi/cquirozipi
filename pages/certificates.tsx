import type { NextPage, GetStaticProps } from "next";

import { Data, Certificate, SocialMedia } from "../utils/interface";
import CardCertificates from "../components/cardCertificates";
import style from "../styles/certificates.module.css";
import { getMarkdown } from "../utils/functions";
import Layout from "../components/layout";

interface CertificatesProps {
  certificates: Data<Certificate>[];
  socialMedia: Data<SocialMedia>[];
}

const Certificates: NextPage<CertificatesProps> = (props) => {
  const { certificates, socialMedia } = props;
  return (
    <Layout socialMedia={socialMedia}>
      <h1 className={style.title}>Certificates</h1>
      <div className={style.container}>
        {certificates.map((d, i) => (
          <CardCertificates key={i} certificate={d} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const certificates = getMarkdown("certificates");
  const socialMedia = getMarkdown("social_media");
  return {
    props: {
      certificates,
      socialMedia,
    },
  };
};

export default Certificates;
