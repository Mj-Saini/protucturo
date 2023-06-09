import React, { useState } from "react";
import logo from "../assets/img/svg/logo.svg";

function Header() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <section id="Header">
      <nav className=" z_index5 position-relative">
        <div className="container pt-3 z-3">
          <div className="d-flex justify-content-between align-items-center pt-sm-4 py-3">
            <ul className="mb-0 p-0">
              <a href="#">
                <img className="logo_size" src={logo} alt="LOGO-ICON" />
              </a>
            </ul>

            <div
              className={
                navShow
                  ? "threeline d-lg-none cursor_pointer"
                  : "threeline d-lg-none cursor_pointer"
              }
              onClick={() => setNavShow(!navShow)}
            >
              <div
                className={navShow ? " falseline1" : "  threelinechild"}
              ></div>
              <div className={navShow ? "falseline" : " threelinechild"}></div>
              <div className={navShow ? "falseline3 " : "threelinechild"}></div>
            </div>
            <ul className="mb-0 p-0 d-flex gap-xl-5 gap-4 d-none d-lg-flex align-items-center">
              <li className="overflow-hidden">
                <a
                  className="ff_gilroy-semibold fs_xl text_gray bottom_line position-relative transition_300"
                  href="#control"
                >
                  Benefits
                </a>
              </li>
              <li className="overflow-hidden">
                <a
                  className="ff_gilroy-semibold fs_xl text_gray bottom_line position-relative transition_300"
                  href="#Privacy"
                >
                  Privacy
                </a>
              </li>
              <li className="overflow-hidden">
                <a
                  className="ff_gilroy-semibold fs_xl text_gray bottom_line position-relative transition_300"
                  href="#Products"
                >
                  Products
                </a>
              </li>
              <li className="overflow-hidden">
                <a
                  className="ff_gilroy-semibold fs_xl text_gray bottom_line position-relative transition_300"
                  href="#App"
                >
                  App
                </a>
              </li>
              <li className="overflow-hidden">
                <a
                  className="ff_gilroy-semibold fs_xl text_gray bottom_line position-relative transition_300"
                  href="#Features"
                >
                  Features
                </a>
              </li>
              <li className="overflow-hidden me-xl-4">
                <a
                  className="ff_gilroy-semibold fs_xl text_gray bottom_line position-relative transition_300"
                  href="#FAQ"
                >
                  FAQs
                </a>
              </li>

              <li>
                <button className="main_btn">Get started</button>
              </li>
            </ul>
          </div>
          <div
            className={
              navShow
                ? "shownav d-flex flex-column justify-content-center align-items-center"
                : "hidenav d-flex flex-column justify-content-center align-items-center"
            }
          >
            <ul className="mb-0 p-0 d-flex gap-4 flex-column justify-content-center align-items-center">
              {" "}
              <li className="overflow-hidden">
                <a
                  onClick={() => setNavShow(!navShow)}
                  className="ff_gilroy-semibold fs_xl text_gray bottom_line position-relative transition_300"
                  href="#control"
                >
                  Benefits
                </a>
              </li>
              <li className="overflow-hidden">
                <a
                  onClick={() => setNavShow(!navShow)}
                  className="ff_gilroy-semibold fs_xl text_gray bottom_line position-relative transition_300"
                  href="#Privacy"
                >
                  Privacy
                </a>
              </li>
              <li className="overflow-hidden">
                <a
                  onClick={() => setNavShow(!navShow)}
                  className="ff_gilroy-semibold fs_xl text_gray bottom_line position-relative transition_300"
                  href="#Products"
                >
                  Products
                </a>
              </li>
              <li className="overflow-hidden">
                <a
                  onClick={() => setNavShow(!navShow)}
                  className="ff_gilroy-semibold fs_xl text_gray bottom_line position-relative transition_300"
                  href="#App"
                >
                  App
                </a>
              </li>
              <li className="overflow-hidden">
                <a
                  onClick={() => setNavShow(!navShow)}
                  className="ff_gilroy-semibold fs_xl text_gray bottom_line position-relative transition_300"
                  href="#Features"
                >
                  Features
                </a>
              </li>
              <li className="overflow-hidden me-xl-4">
                <a
                  onClick={() => setNavShow(!navShow)}
                  className="ff_gilroy-semibold fs_xl text_gray bottom_line position-relative transition_300"
                  href="#FAQ"
                >
                  FAQs
                </a>
              </li>
              <li>
                <button className="main_btn">Get started</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
