import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Showcase from "./Showcase";
import { useRouter } from "next/router";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Event Managment",
  description: "Book the Hottest Parties in Town",
  keywords: "Music, Events, Parties, Vodka, DJ ",
};
