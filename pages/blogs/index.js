import { useState, useRef } from "react";
import CardWrapper from "../../components/CardWrapper";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";
import Head from "next/head";
import { useAppContext } from "../../context/state";
import { getBlogs, getCategories } from "../api/blog";
import { useEffect } from "react";

export const getServerSideProps = async () => {
  const data = await getBlogs();
  const categories = await getCategories();
  return {
    props: { blogs: data, categories: categories },
  };
};

const Blog = ({ blogs, categories }) => {
  let input = useRef();
  const [search, setSearch] = useState("all");
  const { theme } = useAppContext();
  const [searchedData, setSearchedData] = useState([]);
  useEffect(() => {
    setSearchedData(search.match(/\b[-?(\w+)?]+\b/gi));
  }, [search]);

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
          className={`hover-zoom`}
          variant={`${
            search === "all" || search === "" ? "dark" : "outline-dark"
          }`}
          style={{
            borderColor: `${theme === "light" ? "black" : "white"}`,
            "&:hover": {
              opacity: 0,
            },
            color: `${
              search === "all" || search === ""
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
        {categories?.map((category, index) => (
          <Button
            key={index}
            className={`hover-zoom`}
            variant={`${
              search === category.name.toLowerCase() ? "dark" : "outline-dark"
            }`}
            style={{
              borderColor: `${theme === "light" ? "black" : "white"}`,
              "&:hover": {
                opacity: 0,
              },
              color: `${
                search === category.name.toLowerCase()
                  ? theme === "light"
                    ? "white"
                    : "white"
                  : theme === "light"
                  ? "black"
                  : "white"
              }`,
            }}
            onClick={() => {
              setSearch(category.slug);
            }}
          >
            {category.name}
          </Button>
        ))}
      </ButtonGroup>
      <CardWrapper searchedData={searchedData} data={blogs} />
    </div>
  );
};

export default Blog;
