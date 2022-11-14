import { useState, useRef } from "react";
import CardWrapper from "../../components/CardWrapper";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import Head from "next/head";
import { useAppContext } from "../../context/state";

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://minddeft.net/dev_blog/wp-json/wp/v2/ll-blog`
  );
  const data = await res.json();
  return {
    props: { blogs: data },
  };
};

const Blog = ({ blogs }) => {
  let input = useRef();
  const [search, setSearch] = useState("all");
  const { theme } = useAppContext();

  return (
    <div
      className={`${theme === "dark" ? "darkMode" : "lightMode"} parentFlex`}
    >
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Blogs Page" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/blog-logo.png" />
        <meta property="og:title" content="This is Blogs Page" />
      </Head>

      <Form
        className={`d-flex`}
        style={{ width: "300px", marginTop: "5rem" }}
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(input.current.value.toLowerCase());
        }}
      >
        <Form.Control
          ref={input}
          type="search"
          placeholder="Search"
          className={`me-2`}
          aria-label="Search"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
      </Form>
      <ButtonGroup
        style={{
          marginTop: "20px",
        }}
      >
        <Button
          variant={`${search === "all" ? "dark" : "outline-dark"}
          }`}
          style={{
            borderColor: `${theme === "light" ? "black" : "white"}`,

            color: `${
              search === "all"
                ? theme === "light"
                  ? "white"
                  : "white"
                : theme === "light"
                ? "black"
                : "white"
            }`,
          }}
          onClick={() => {
            setSearch("all");
          }}
        >
          All
        </Button>
        <Button
          variant={`${search === "defi" ? "dark" : "outline-dark"}
          }`}
          style={{
            borderColor: `${theme === "light" ? "black" : "white"}`,

            color: `${
              search === "defi"
                ? theme === "light"
                  ? "white"
                  : "white"
                : theme === "light"
                ? "black"
                : "white"
            }`,
          }}
          onClick={() => {
            setSearch("defi");
          }}
        >
          Defi
        </Button>
        <Button
          variant={`${search === "nft" ? "dark" : "outline-dark"}
          }`}
          style={{
            borderColor: `${theme === "light" ? "black" : "white"}`,

            color: `${
              search === "nft"
                ? theme === "light"
                  ? "white"
                  : "white"
                : theme === "light"
                ? "black"
                : "white"
            }`,
          }}
          onClick={() => {
            setSearch("nft");
          }}
        >
          NFT
        </Button>
        <Button
          variant={`${search === "token" ? "dark" : "outline-dark"}
          }`}
          style={{
            borderColor: `${theme === "light" ? "black" : "white"}`,

            color: `${
              search === "token"
                ? theme === "light"
                  ? "white"
                  : "white"
                : theme === "light"
                ? "black"
                : "white"
            }`,
          }}
          onClick={() => {
            setSearch("token");
          }}
        >
          Token
        </Button>
        <Button
          variant={`${search === "ether" ? "dark" : "outline-dark"}
          }`}
          style={{
            borderColor: `${theme === "light" ? "black" : "white"}`,

            color: `${
              search === "ether"
                ? theme === "light"
                  ? "white"
                  : "white"
                : theme === "light"
                ? "black"
                : "white"
            }`,
          }}
          onClick={() => {
            setSearch("ether");
          }}
        >
          Ether
        </Button>
      </ButtonGroup>
      <CardWrapper searchedData={search} data={blogs} />
    </div>
  );
};

export default Blog;
