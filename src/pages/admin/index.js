import { parseCookies } from "nookies";
import React from "react";

const index = () => {
  return <div>index</div>;
};

export async function getServerSideProps(ctx) {
  const cookie = parseCookies(ctx);
  const user_role = cookie.user_role ? cookie.user_role : "";
  if (user_role === "user") {
    const { res } = ctx;
    res.writeHead(302, { Location: "/" });
    res.end();
  }
  return {
    props: {},
  };
}

export default index;
