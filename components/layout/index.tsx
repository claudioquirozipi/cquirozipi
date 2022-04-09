import Head from "next/head";

import { LayoutProps } from "./interface";
import style from "./style.module.css";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = (props: LayoutProps) => {
  const { children, socialMedia } = props;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={style.children}>{children}</div>
      <Footer socialMedia={socialMedia} />
    </div>
  );
};

export default Layout;