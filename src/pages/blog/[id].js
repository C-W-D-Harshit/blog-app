import React, { useState } from "react";
import baseUrl from "../../helpers/baseUrl";
import { useRouter } from "next/router";

const Id = ({ blog }) => {
  // const [cat, setCat] = useState(category);
  const router = useRouter();
  if (!blog) {
    return <h1>Loading...</h1>;
  }
  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const [month, day, year] = formattedDate.split(" ");
  const titleCaseMonth = month.charAt(0).toUpperCase() + month.slice(1);
  const dateString = `${day} ${titleCaseMonth} ${year}`;
  return (
    <div className="blog">
      <div className="blog_">
        <p>
          <span style={{ textTransform: "capitalize" }}>{blog.category} </span>{" "}
          Blogs
        </p>
      </div>
      <div className="blog__top">
        <div className="blog__title">
          <p>{blog.title}</p>
        </div>
        <div className="blog__date">
          <p>{dateString}</p>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  let res = null;
  let data = null;
  try {
    res = await fetch(`${baseUrl}/api/blog/${id}`);
    data = await res.json();
  } catch (err) {}
  return {
    props: {
      success: data.success,
      blog: data.blog,
    },
  };
}

export default Id;
