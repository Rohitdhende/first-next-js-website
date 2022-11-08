import Head from "next/head";
import { useEffect, useState } from "react";

const index = () => {
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
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="This is Home Page" />
      </Head>
      <div>This is Home Page, Click on Blogs to see the blogs</div>
    </div>
  );
};

export default index;
