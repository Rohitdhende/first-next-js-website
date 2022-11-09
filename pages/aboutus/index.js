import Head from "next/head";
import { useAppContext } from "../../context/state";

const index = () => {
  const { theme } = useAppContext();

  return (
    <div
      className={`${
        theme == "light" ? "lightMode lightModeColor" : "darkMode darkModeColor"
      } parentFlex fluidContainer`}
    >
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Us Page" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="This is About Us Page" />
      </Head>
      <h1>About Us</h1>
      <h2>We are blockchain company</h2>
      <p>
        A blockchain is a decentralized ledger of all transactions across a
        peer-to-peer network. Using this technology, participants can confirm
        transactions without a need for a central clearing authority. Potential
        applications can include fund transfers, settling trades, voting and
        many other issues.
      </p>
    </div>
  );
};

export default index;
