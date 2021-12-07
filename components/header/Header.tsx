import Link from "next/link";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import { navbarImage } from "../../utils/constant.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faHandshake,
  faCalendarAlt,
  faUserFriends,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import logoSVG from "../../utils/svgs/logo.svg";
import Image from "next/image";

export default function Header(props: any) {
  const dropdownStyle = { display: "block" };
  const [imageNumber, setImageNumber] = useState(0);
  const [title, setTitle] = useState("#");
  const [scrollStyle, setScrollStyle] = useState({
    height: "90px",
    backgroundColor: "",
    border: "",
  });
  const [showDropDown, setShowDropDown] = useState(false);
  const teamImage = require("../../utils/images/2.jpeg").default.src;

  console.log();
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    return () => {};
  }, []);
  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setScrollStyle({
        height: "55px",
        backgroundColor: "#198FC1",
        border: "none",
      });
    } else {
      setScrollStyle({ height: "90px", backgroundColor: "", border: "" });
    }
  }
  return (
    <div
      className={styles.container}
      id="nav"
      style={{
        backgroundImage: `url(${
          imageNumber !== 3 ? navbarImage[imageNumber].src : teamImage
        })`,
      }}
    >
      <nav className={styles.nav} style={scrollStyle}>
        <div className={styles.logo}>
          <Image
            src={logoSVG}
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
        <ul>
          <li
            onClick={() => {
              setImageNumber(0);
              setTitle("#");
            }}
          >
            <Link href="/"> HOME</Link>
          </li>
          <li
            onClick={() => {
              setImageNumber(1);
              setTitle("");
            }}
          >
            <Link href="/join">JOIN</Link>
          </li>
          <li
            onClick={() => {
              setImageNumber(2);
              setTitle("Events");
            }}
          >
            <Link href="/events">EVENTS</Link>
          </li>
          <li
            onClick={() => {
              setImageNumber(3);
              setTitle("");
            }}
          >
            <Link href="/team">OUR TEAM</Link>
          </li>
          <li
            onClick={() => {
              setImageNumber(4);
              setTitle("About Us");
            }}
          >
            <Link href="/about">ABOUT US</Link>
          </li>
        </ul>
      </nav>

      <nav className={styles.mobileNav}>
        <div className={styles.mobileNavbar}>
          <FontAwesomeIcon
            onClick={() => {
              setShowDropDown(!showDropDown);
            }}
            icon={faBars}
          ></FontAwesomeIcon>
        </div>

        <div className={styles.dropdown}>
          <div
            className={styles.dropdownContent}
            style={
              showDropDown === true
                ? dropdownStyle
                : { display: "none", transition: "all ease 0.5s" }
            }
          >
            <div className={styles.logoContainer}>
              <Image
                src={logoSVG}
                alt="Picture of the author"
                width={140}
                height={140}
              />
            </div>
            <div className={styles.mobileNavmenu}>
              <ul>
                <li
                  onClick={() => {
                    setImageNumber(0);
                    setTitle("");
                  }}
                >
                  <div className={styles.controller}>
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                  </div>
                  <Link href="/">HOME</Link>
                </li>
                <li
                  onClick={() => {
                    setImageNumber(1);
                    setTitle("");
                  }}
                >
                  <div className={styles.controller}>
                    <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
                  </div>
                  <Link href="/join">JOIN</Link>
                </li>
                <li
                  onClick={() => {
                    setImageNumber(2);
                    setTitle("Events");
                  }}
                >
                  <div className={styles.controller}>
                    <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
                  </div>
                  <Link href="/events">EVENTS</Link>
                </li>
                <li
                  onClick={() => {
                    setImageNumber(3);
                    setTitle("");
                  }}
                >
                  <div className={styles.controller}>
                    <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
                  </div>
                  <Link href="/team">OUR TEAM</Link>
                </li>
                <li
                  onClick={() => {
                    setImageNumber(4);
                    setTitle("About Us");
                  }}
                >
                  <div className={styles.controller}>
                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
                  </div>
                  <Link href="/about">ABOUT US</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
