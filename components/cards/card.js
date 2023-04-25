import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Card = ({ id, title, img, content, date, category }) => {
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
      <div className="card">
        <div className="card_img">
          <Image
            alt="IMage"
            width={200}
            height={200}
            src={img}
            className="card_img_"
          />
        </div>
        <div>
          <p style={{ textTransform: "uppercase" }}>{cat}</p>
          <p>{dateString}</p>
        </div>
        <div>
          <p>{title}</p>
        </div>
        <div></div>
      </div>
    </Link>
  );
};

export default Card;
