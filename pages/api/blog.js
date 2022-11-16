// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//Get all blogs
export const getBlogs = async () => {
  const res = await fetch(
    `https://minddeft.net/dev_blog/wp-json/wp/v2/ll-blog`
  );
  const data = await res.json();
  return data;
};

//Get a single blog
export const getBlog = async (id) => {
  const res = await fetch(
    `https://minddeft.net/dev_blog/wp-json/wp/v2/ll-blog/${id}`
  );
  const data = await res.json();
  return data;
};

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
