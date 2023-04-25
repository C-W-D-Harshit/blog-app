import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { BsHeartPulse, BsBookmark, BsGear } from "react-icons/bs";
import { BiBook, BiCar } from "react-icons/bi";
import { TbBallFootball } from "react-icons/tb";
import { GiHotMeal } from "react-icons/gi";
import { RiAccountBoxLine } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  return (
    <div className="header">
      <Link href="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <p>B</p>
        </div>
      </Link>
      <div className="header__menu">
        <Link href="/">
          <div className="header__menu_">
            <GoHome
              className={
                router.pathname === "/"
                  ? "active_ico header__ico"
                  : "header__ico"
              }
            />
          </div>
        </Link>
        <Link href="/health">
          <div className="header__menu_">
            <BsHeartPulse
              className={
                router.pathname === "/health"
                  ? "active_ico header__ico"
                  : "header__ico"
              }
            />
          </div>
        </Link>
        <Link href="/education">
          <div className="header__menu_">
            <BiBook
              className={
                router.pathname === "/education"
                  ? "active_ico header__ico"
                  : "header__ico"
              }
            />
          </div>
        </Link>
        <Link href="/sports">
          <div className="header__menu_">
            <TbBallFootball
              className={
                router.pathname === "/sports"
                  ? "active_ico header__ico"
                  : "header__ico"
              }
            />
          </div>
        </Link>
        <Link href="/food">
          <div className="header__menu_">
            <GiHotMeal
              className={
                router.pathname === "/food"
                  ? "active_ico header__ico"
                  : "header__ico"
              }
            />
          </div>
        </Link>
        <Link href="/travel">
          <div className="header__menu_">
            <BiCar
              className={
                router.pathname === "/travel"
                  ? "active_ico header__ico"
                  : "header__ico"
              }
            />
          </div>
        </Link>
        <Link href="/user/saved">
          <div className="header__menu_">
            <BsBookmark
              className={
                router.pathname === "/user/saved"
                  ? "active_ico header__ico"
                  : "header__ico"
              }
            />
          </div>
        </Link>
      </div>
      <div className="header__user">
        <div className="header__menu_">
          <MdOutlineNotifications className="header__ico" />
        </div>
        <div className="header__menu_">
          <RiAccountBoxLine className="header__ico" />
        </div>
        <div className="header__menu_">
          <BsGear className="header__ico" />
        </div>
      </div>
    </div>
  );
};

export default Header;
