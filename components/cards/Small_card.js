import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Small_card = ({ category, title, id, date }) => {
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
      <div className="smallcard">
        <div>
          <p style={{ textTransform: "uppercase" }}>{cat}</p>
          <p>{dateString}</p>
        </div>
        <div>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Small_card;
