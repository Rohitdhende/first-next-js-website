import { useRouter } from "next/router";
import Head from "next/head";
import Button from "react-bootstrap/Button";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((blog) => {
    return {
      params: { id: blog.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: { blog: data },
  };
};

const Blog = ({ blog }) => {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.title} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/blog-logo.png" />
        <meta property={`og:title`} content={`${blog.title}`} />
        <meta property={`og:description`} content={`${blog.body}`} />
      </Head>
      <div style={{ textAlign: "center" }}>
        <h4>{blog.title}</h4>
        <p>{blog.body}</p>
      </div>

      <Button
        variant="success"
        onClick={() => {
          router.push("/blogs");
        }}
        style={{ width: "fit-content" }}
      >
        Go back
      </Button>
    </div>
  );
};

export default Blog;
