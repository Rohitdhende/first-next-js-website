import { useState, useRef, useEffect } from "react";
import CardWrapper from "../../components/CardWrapper";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: { blogs: data },
  };
};

const blog = ({ blogs }) => {
  let input = useRef();
  const [search, setSearch] = useState("all");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Blogs Page" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/blog-logo.png" />
        <meta property="og:title" content="This is Blogs Page" />
      </Head>

      <Form
        className="d-flex"
        style={{ width: "300px" }}
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(input.current.value.toLowerCase());
        }}
      >
        <Form.Control
          ref={input}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
      </Form>
      <ButtonGroup style={{ marginTop: "20px" }}>
        <Button
          variant={search === "all" ? "success" : "outline-success"}
          onClick={() => {
            setSearch("all");
          }}
        >
          All
        </Button>
        <Button
          variant={search === "defi" ? "success" : "outline-success"}
          onClick={() => {
            setSearch("defi");
          }}
        >
          Defi
        </Button>
        <Button
          variant={search === "nft" ? "success" : "outline-success"}
          onClick={() => {
            setSearch("nft");
          }}
        >
          NFT
        </Button>
        <Button
          variant={search === "token" ? "success" : "outline-success"}
          onClick={() => {
            setSearch("token");
          }}
        >
          Token
        </Button>
        <Button
          variant={search === "ether" ? "success" : "outline-success"}
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

export default blog;
