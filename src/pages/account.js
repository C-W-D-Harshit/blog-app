import { parseCookies } from "nookies";
import React from "react";

const Account = () => {
  return <div>Account</div>;
};

export async function getServerSideProps(ctx) {
  const { token } = parseCookies(ctx);
  if (!token) {
    const { res } = ctx;
    res.writeHead(302, { Location: "/login" });
    res.end();
  }
  return {
    props: {},
  };
}

export default Account;
