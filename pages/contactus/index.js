import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <div className="parentFlex">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us Page" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="This is Contact Us Page" />
      </Head>
      <h1>Contact Us</h1>
      <h2>Queries?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
    </div>
  );
};

export default index;
