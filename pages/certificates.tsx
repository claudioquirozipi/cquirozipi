import type { NextPage, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { getMarkdown } from "../utils/functions";
import Layout from "../components/layout";
import { Data, Certificates, SocialMedia } from "../utils/interface";

interface CertificatesProps {
  certificates: Data<Certificates>[];
  socialMedia: Data<SocialMedia>[];
}

const Certificates: NextPage<CertificatesProps> = (props) => {
  console.log("props", props);
  const { certificates, socialMedia } = props;
  return (
    <Layout socialMedia={socialMedia}>
      {certificates.map((d, i) => (
        <div key={i}>
          <h1>{d.data.title}</h1>
          <ReactMarkdown>{d.data.description}</ReactMarkdown>
          <img
            style={{ width: "100px", height: "100px" }}
            src={d.data.certificates_image}
            alt=""
          />
          <p>{d.data.institute}</p>
          <p style={{ marginLeft: "20px" }}>{d.data.date + " " + new Date()}</p>
          <p>{new Date(d.data.date).toString()}</p>
        </div>
      ))}
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
