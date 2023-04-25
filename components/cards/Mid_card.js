import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Mid_card = ({ id, title, img, date, category }) => {
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
    <Link href={`/blog/${id}`} className="n">
      <div className="midcard">
        <div>
          <div className="midcard_img">
            <Image
              alt="Image"
              width={120}
              height={120}
              src={img}
              className="midcard_img_"
            />
          </div>
          <div className="midcard_title">
            <p>{title}</p>
          </div>
        </div>
        <div>
          <p style={{ textTransform: "uppercase" }}>{cat}</p>
          <p>{dateString}</p>
        </div>
      </div>
    </Link>
  );
};

export default Mid_card;
