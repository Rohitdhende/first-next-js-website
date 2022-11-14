import { useRouter } from "next/router";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://minddeft.net/dev_blog/wp-json/wp/v2/ll-blog"
  );
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

  const res = await fetch(
    `https://minddeft.net/dev_blog/wp-json/wp/v2/ll-blog/${id}`
  );
  const data = await res.json();
  return {
    props: { blog: data },
  };
};

const Blog = ({ blog }) => {
  const router = useRouter();
  console.log(blog);
  let options = { year: "numeric", month: "long", day: "numeric" };
  let date = new Date(blog.date).toLocaleDateString("en-US", options);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Head>
        <title>{blog.title.rendered}</title>
        <meta name="description" content={blog.title.rendered} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/blog-logo.png" />
        <meta property={`og:title`} content={`${blog.acf.fb_og_title}`} />
        <meta
          property={`og:description`}
          content={`${blog.content.rendered}`}
        />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          height: "100%",
          marginTop: "4rem",
          alignItems: "center",
        }}
      >
        {blog.img && <Image alt={"blog"} src={blog.img} thumbnail={true} />}
        <h1
          style={{
            fontWeight: 400,
            fontSize:
              "clamp(2.719rem, 2.719rem + ((1vw - 0.48rem) * 5.229), 5.438rem)",
            marginBottom: "{var(--wp--preset--spacing--40)}",
          }}
        >
          {blog.title.rendered}
        </h1>
        <div
          style={{
            fontSize: "clamp(1rem, 1rem + ((1vw - 0.48rem) * 0.24), 1.125rem)",
          }}
          dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginTop: "1rem" }}>
            Posted {date} in by {blog.author}
          </div>
          <div style={{ margin: "1rem" }}>
            tags{" "}
            {blog.tags?.map((tag) => {
              return <span>{tag}</span>;
            })}
          </div>
        </div>
        <hr
          style={{
            color: "#000",
            width: "100%",
            backgroundColor: "#000",
            height: 3,
          }}
        />
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
