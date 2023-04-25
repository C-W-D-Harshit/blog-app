import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiBookmark, BiShare } from "react-icons/bi";

const Card = ({ id, title, img, content, date, category, views }) => {
  const [cat, setCat] = useState(category);
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const [month, day, year] = formattedDate.split(" ");
  const titleCaseMonth = month.charAt(0).toUpperCase() + month.slice(1);
  const dateString = `${day} ${titleCaseMonth} ${year}`;
  return (
    <div className="card">
      <div
        className="card_img"
        onClick={() => {
          router.push(`/blog/${id}`);
        }}
      >
        <Image
          alt="IMage"
          width={200}
          height={220}
          src={img}
          className="card_img_"
        />
      </div>
      <div
        onClick={() => {
          router.push(`/blog/${id}`);
        }}
      >
        <p style={{ textTransform: "uppercase" }}>{cat}</p>
        <p>{dateString}</p>
      </div>
      <div
        onClick={() => {
          router.push(`/blog/${id}`);
        }}
      >
        <p>{title}</p>
      </div>
      <div>
        <div className="bigcard_views">
          <p>{views}</p>
          <p>People saw</p>
        </div>
        <div className="bigcard_but">
          <BiBookmark />
          <BiShare />
        </div>
      </div>
    </div>
  );
};

export default Card;
