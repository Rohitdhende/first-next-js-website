import Head from "next/head";
import { useEffect, useState } from "react";

const Home = () => {
  const [isNightMode, setIsNightMode] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("NightMode") === "true") {
      setIsNightMode(true);
    }
  }, [isNightMode]);

  return (
    <div
      className={isNightMode ? "darkMode" : "lightMode"}
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="This is Home Page" />
      </Head>
      <div className="parentFlex">
        <h1>This is Home Page </h1>

        <h2>Click on Blogs to see the blogs</h2>
      </div>
    </div>
  );
};

export default Home;
