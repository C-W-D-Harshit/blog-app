import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiBookmark, BiShare } from "react-icons/bi";

const Big_card = ({ id, title, content, date, img, views, category }) => {
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
    <div className="big_card">
      <div className="bigcard__img">
        {img ? (
          <Link href={`/blog/${id}`} className="bigcard__img">
            <Image
              alt="Image"
              src={img}
              height={400}
              width={580}
              className="bigcard__img_"
            />
          </Link>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <div className="bigcard__cont">
        <div>
          <p style={{ textTransform: "uppercase" }}>{cat}</p>
          <p>{dateString}</p>
        </div>
        <div>
          <p>{title}</p>
        </div>
        <Link href={`/blog/${id}`}>
          <div>
            <p>{content}</p>
          </div>
        </Link>
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
    </div>
  );
};

export default Big_card;
