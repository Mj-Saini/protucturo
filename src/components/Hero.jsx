import React, { useRef, useState } from "react";
import Slider from "react-slick";
import prevArrow from "../assets/img/svg/prev-arrow.svg";
import nextArrow from "../assets/img/svg/next-arrow.svg";
import mobileImg from "../assets/img/svg/mobile-header.svg";
import vector from "../assets/img/svg/header-vector.svg";
import vector2 from "../assets/img/svg/header-vector2.svg";

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [color, setColor] = useState(0);

  const onActive = (e) => {
    setActiveSlide(e);
  };
  const chagneColor = (e) => {
    setColor(e);
  };

  const settingSlide = {
    dots: true,
    infinite: true,
    fade: true,
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const myBtn = useRef();
  return (
    <>
      <section className="min_vh_100 d-flex py-sm-5 py-4 position-relative">
        <span className="red_shadow position-absolute header_shadow_top z_index0"></span>
        <span className="red_shadow position-absolute header_shadow_bottom z_index0"></span>
        <img
          className="position-absolute hero_vector2 z_index0"
          src={vector2}
          alt="img"
        />
        <img
          className="position-absolute hero_vector z_index0"
          src={vector}
          alt="img"
        />
        <div className="container position-relative d-flex flex-column flex-grow-1 justify-content-xxl-around justify-content-center">
          <div className="row mt-xl-5">
            <div className="col-xl-7">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-delay="2000"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                <h1
                  style={{ letterSpacing: " -0.04em" }}
                  className="ff_gilroy-semibold fs_8x5l text_light_gray mb-0"
                >
                  A platform to secure your all digital assets.
                </h1>
                <p className="ff_gilroy-medium fs_2x2l text_gray mb-0 mt-md-4 mt-2">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  <span className="d-xl-block">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure
                  </span>{" "}
                  <span className="d-xl-block">
                    {" "}
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu
                  </span>{" "}
                  fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {" "}
            <div className="col-md-6 col-lg-5 col-12 z_index5 mobile_slider mt-5 mt-xl-0 mt-xl-0">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
                data-aos-delay="2000"
                data-aos-duration="1000"
                data-aos-offset="0"
                className="mobile_header z_index_5 d-flex justify-content-end flex-column align-items-center text-center position-relative"
              >
                <img className="mobile_size" src={mobileImg} alt="img" />
                <Slider
                  ref={myBtn}
                  className="w-100 position-absolute mt-5 pt-5 margin_custom"
                  {...settingSlide}
                >
                  <div className="d-flex flex-column justify-content-center text-center z_index_-1">
                    <div className="">
                      <h4
                        style={{ letterSpacing: "-0.03em" }}
                        className="text_gradient_red ff_gilroy-semibold fs_3x6l"
                      >
                        Satisfaction
                      </h4>

                      <p
                        style={{ letterSpacing: "-0.04em" }}
                        className="ff_gilroy-semibold fs_2xl text_white_gray text-center"
                      >
                        98% of our valued customers{" "}
                        <span className="d-block">
                          are secured from cyber frauds.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-center text-center  ">
                    {" "}
                    <div className="transform_y">
                      <h4
                        style={{ letterSpacing: "-0.03em" }}
                        className="text_gradient_red ff_gilroy-semibold fs_3x6l"
                      >
                        Satisfaction
                      </h4>

                      <p
                        style={{ letterSpacing: "-0.04em" }}
                        className="ff_gilroy-semibold fs_2xl text_white_gray text-center"
                      >
                        98% of our valued customers{" "}
                        <span className="d-block">
                          are secured from cyber frauds.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-center text-center  ">
                    {" "}
                    <div className="transform_y">
                      <h4
                        style={{ letterSpacing: "-0.03em" }}
                        className="text_gradient_red ff_gilroy-semibold fs_3x6l"
                      >
                        Satisfaction
                      </h4>

                      <p
                        style={{ letterSpacing: "-0.04em" }}
                        className="ff_gilroy-semibold fs_2xl text_white_gray text-center"
                      >
                        98% of our valued customers{" "}
                        <span className="d-block">
                          are secured from cyber frauds.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-center text-center  ">
                    {" "}
                    <div className="transform_y">
                      <h4
                        style={{ letterSpacing: "-0.03em" }}
                        className="text_gradient_red ff_gilroy-semibold fs_3x6l"
                      >
                        Satisfaction
                      </h4>

                      <p
                        style={{ letterSpacing: "-0.04em" }}
                        className="ff_gilroy-semibold fs_2xl text_white_gray text-center"
                      >
                        98% of our valued customers{" "}
                        <span className="d-block">
                          are secured from cyber frauds.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-center text-center  ">
                    {" "}
                    <div className="transform_y">
                      <h4
                        style={{ letterSpacing: "-0.03em" }}
                        className="text_gradient_red ff_gilroy-semibold fs_3x6l"
                      >
                        Satisfaction
                      </h4>

                      <p
                        style={{ letterSpacing: "-0.04em" }}
                        className="ff_gilroy-semibold fs_2xl text_white_gray text-center"
                      >
                        98% of our valued customers{" "}
                        <span className="d-block">
                          are secured from cyber frauds.
                        </span>
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>{" "}
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="2500"
            data-aos-duration="1000"
            data-aos-offset="0"
            className="mt-lg-5 mt-4 py-lg-5"
          >
            {" "}
            <span className="d-flex gap-3 justify-content-center justify-content-xl-start pb-3">
              <img
                className=" cursor_pointer"
                onClick={() => myBtn.current.slickPrev()}
                src={prevArrow}
                alt="arrow"
              />
              <img
                className=" cursor_pointer"
                onClick={() => myBtn.current.slickNext()}
                style={{ rotate: "180deg" }}
                src={prevArrow}
                alt="arrow"
              />
            </span>
            <Slider
              className="bg-transparent mt-2 mt-lg-4"
              ref={myBtn}
              {...settings}
            >
              <div className="d-flex justify-content-center justify-content-lg-start d-flex justify-content-center bg-transparent justify-content-lg-start ">
                <div
                  className={`d-flex flex-column text-centerpx-4 position-relative py-4 px-4 slider_red_cards ${
                    activeSlide === 0
                      ? "slider_red_card text-white"
                      : "slider_red_cards"
                  }`}
                  onClick={() => onActive(0)}
                >
                  <h3
                    onClick={() => chagneColor(0)}
                    style={{
                      letterSpacing: "-0.02em",
                    }}
                    className={`ff_gilroy-semibold fs_2xl text_white_gray ${
                      color ? "" : "text-white"
                    }`}
                  >
                    Secure <span className="d-block">payments</span>
                  </h3>
                  <img
                    className="position-absolute end-0 bottom-0 mx-4 my-4 cursor_pointer"
                    src={nextArrow}
                    alt="IMG"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <div
                  className={`d-flex flex-column text-centerpx-4 position-relative py-4 px-4 slider_red_cards ${
                    activeSlide === 1 ? "slider_red_card" : "slider_red_cards"
                  }`}
                  onClick={() => onActive(1)}
                >
                  <h3
                    style={{ letterSpacing: "-0.02em" }}
                    className=" ff_gilroy-semibold fs_2xl text_white_gray"
                  >
                    Operational <span className="d-block">securities</span>
                  </h3>
                  <img
                    className="position-absolute end-0 bottom-0 mx-4 my-4 cursor_pointer"
                    src={nextArrow}
                    alt="IMG"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <div
                  className={`d-flex flex-column text-centerpx-4 position-relative py-4 px-4 slider_red_cards ${
                    activeSlide === 2 ? "slider_red_card" : "slider_red_cards"
                  }`}
                  onClick={() => onActive(2)}
                >
                  {" "}
                  <h3
                    style={{ letterSpacing: "-0.02em" }}
                    className=" ff_gilroy-semibold fs_2xl text_white_gray"
                  >
                    Secure data <span className="d-block">networks</span>
                  </h3>
                  <img
                    className="position-absolute end-0 bottom-0 mx-4 my-4 cursor_pointer"
                    src={nextArrow}
                    alt="IMG"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <div
                  className={`d-flex flex-column text-centerpx-4 position-relative py-4 px-4 slider_red_cards ${
                    activeSlide === 3 ? "slider_red_card" : "slider_red_cards"
                  }`}
                  onClick={() => onActive(3)}
                >
                  {" "}
                  <h3
                    style={{ letterSpacing: "-0.02em" }}
                    className=" ff_gilroy-semibold fs_2xl text_white_gray"
                  >
                    Encrypted <span className="d-block">transactions</span>
                  </h3>
                  <img
                    className="position-absolute end-0 bottom-0 mx-4 my-4 cursor_pointer"
                    src={nextArrow}
                    alt="IMG"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <div
                  className={`d-flex flex-column text-centerpx-4 position-relative py-4 px-4 slider_red_cards ${
                    activeSlide === 4 ? "slider_red_card" : "slider_red_cards"
                  }`}
                  onClick={() => onActive(4)}
                >
                  {" "}
                  <h3
                    style={{ letterSpacing: "-0.02em" }}
                    className=" ff_gilroy-semibold fs_2xl text_white_gray"
                  >
                    Secure <span className="d-block">payments</span>
                  </h3>
                  <img
                    className="position-absolute end-0 bottom-0 mx-4 my-4 cursor_pointer"
                    src={nextArrow}
                    alt="IMG"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <div
                  className={`d-flex flex-column text-centerpx-4 position-relative py-4 px-4 slider_red_cards ${
                    activeSlide === 5 ? "slider_red_card" : "slider_red_cards"
                  }`}
                  onClick={() => onActive(5)}
                >
                  {" "}
                  <h3
                    style={{ letterSpacing: "-0.02em" }}
                    className=" ff_gilroy-semibold fs_2xl text_white_gray"
                  >
                    Secure data <span className="d-block">networks</span>
                  </h3>
                  <img
                    className="position-absolute end-0 bottom-0 mx-4 my-4 cursor_pointer"
                    src={nextArrow}
                    alt="IMG"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <div
                  className={`d-flex flex-column text-centerpx-4 position-relative py-4 px-4 slider_red_cards ${
                    activeSlide === 6 ? "slider_red_card" : "slider_red_cards"
                  }`}
                  onClick={() => onActive(6)}
                >
                  {" "}
                  <h3
                    style={{ letterSpacing: "-0.02em" }}
                    className=" ff_gilroy-semibold fs_2xl text_white_gray"
                  >
                    Secure <span className="d-block">payments</span>
                  </h3>
                  <img
                    className="position-absolute end-0 bottom-0 mx-4 my-4 cursor_pointer"
                    src={nextArrow}
                    alt="IMG"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <div
                  className={`d-flex flex-column text-centerpx-4 position-relative py-4 px-4 slider_red_cards ${
                    activeSlide === 7 ? "slider_red_card" : "slider_red_cards"
                  }`}
                  onClick={() => onActive(7)}
                >
                  {" "}
                  <h3
                    style={{ letterSpacing: "-0.02em" }}
                    className=" ff_gilroy-semibold fs_2xl text_white_gray"
                  >
                    Secure data <span className="d-block">networks</span>
                  </h3>
                  <img
                    className="position-absolute end-0 bottom-0 mx-4 my-4 cursor_pointer"
                    src={nextArrow}
                    alt="IMG"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
