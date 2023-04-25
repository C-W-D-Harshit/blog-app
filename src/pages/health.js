import React, { useEffect, useState } from "react";
import baseUrl from "../../helpers/baseUrl";
import useSWR from "swr";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import Card from "../../components/cards/card";

const Health = () => {
  const [blogs, setBlogs] = useState(null);
  const [keyword, setKeyword] = useState("");
  // let blogs = [];
  async function getData() {
    const data_ = await axios.get(
      `/api/blogs?category=health&keyword=${keyword}`
    );
    // blogs = data_.data.blogs;
    // console.log(blogs);
    setBlogs(data_.data.blogs);
  }
  useEffect(() => {
    getData();
  });

  const handleSearch = (e) => {
    setKeyword(e.target.value);
    getData();
  };
  const handleSearch_ = (e) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      setKeyword(e.target.value);
      getData();
    }
  };

  return (
    <div className="health">
      <div className="health__top">
        <div className="health__title">
          <p>Health Blogs</p>
        </div>
        <div className="health__search">
          <input
            type="text"
            placeholder="Search for Blogs"
            onChange={(e) => {
              handleSearch(e);
            }}
            onKeyDown={(e) => {
              handleSearch_(e);
            }}
          />
          <BiSearch className="health_ico" />
        </div>
      </div>
      <div className="health_cont">
        {blogs ? (
          blogs &&
          blogs
            .reverse()
            .map((blog) => (
              <Card
                key={blog._id}
                id={blog._id}
                title={blog.title}
                img={blog.imageUrl}
                date={blog.createdAt}
                category={blog.category}
                content={blog.content}
                views={blog.views}
              />
            ))
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
};

export default Health;
