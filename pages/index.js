import Head from "next/head";
import { useAppContext } from "../context/state";

const Home = () => {
  const { theme } = useAppContext();
  return (
    <div
      className={`${
        theme == "light" ? "lightMode" : "darkMode"
      } parentFlex fluidContainer`}
    >
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="This is Home Page" />
      </Head>
      <div
        className={`${
          theme == "light"
            ? "lightMode lightModeColor"
            : "darkMode darkModeColor"
        } parentFlex `}
      >
        <h1>This is Rsd Page </h1>

        <h2>Click on Blogs to see the blogs</h2>
      </div>
    </div>
  );
};

export default Home;
