import React, { useRef, useState } from "react";
import Slider from "react-slick";
import mobileImg from "../assets/img/png/second-mobile.png";
import scanner from "../assets/img/png/scanner.png";
import check from "../assets/img/svg/phone.svg";
import buy from "../assets/img/svg/buy.svg";
import squar from "../assets/img/svg/squares.svg";
import redVector from "../assets/img/svg/red-vector.svg";
import line from "../assets/img/svg/Line 2.svg";

function Esim() {
  return (
    <>
      <section id="control" className="py-5 my-md-5 position-relative">
        <img
          style={{ rotate: "180deg" }}
          className="red_vector_img1 position-absolute top-50 end-0 d-md-flex d-none z-0"
          src={redVector}
          alt="vector"
        />
        <div className="container z_index1 position-relative">
          <div className="row flex-column-reverse flex-lg-row justify-content-lg-between justify-content-center align-items-center z_index1 position-relative">
            <div className="col-lg-5 col-sm-8 mt-4 mt-lg-0 pe-xl-4">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-delay="800"
                data-aos-duration="2000"
                data-aos-offset="200"
                className="mobile_header position-relative z_index_5 pe-lg-5 d-flex justify-content-end flex-column align-items-center text-center position-relative"
              >
                <img className="w_sm_100 w-50" src={mobileImg} alt="img" />

                <div className="d-flex flex-column justify-content-center pe-lg-5 text-center z_index1 position-absolute w-100 h-100 top-0 start-0">
                  <div className="mt-5">
                    <img className="w-25 w_sm_50" src={scanner} alt="img" />
                    <h4
                      style={{ letterSpacing: "-0.03em" }}
                      className=" ff_gilroy-semibold fs_2x4l mt-5 text-white text-center mb-4"
                    >
                      Scan the QR code to
                      <span className="d-block">activate eSIM</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
                data-aos-delay="800"
                data-aos-duration="2000"
                data-aos-offset="200"
                className="d-flex flex-column justify-content-center h-100"
              >
                <p className=" ff_gilroy-bold fs_2x4l text_gradient_red">
                  How it works
                </p>
                <h2 className="common_heading text-white mb-0">
                  Learn how does &nbsp;{" "}
                  <span className="d-lg-block">international eSIM work</span>
                </h2>
                <div className="row justify-content-between mt-4 mt-sm-0">
                  <div className="col-sm-3 custom_margin_110 position-relative">
                    <img
                      className="position-absolute line_position d-none d-sm-flex"
                      src={line}
                      alt="img"
                    />

                    <img className="mb-sm-4 mb-2" src={check} alt="img" />
                    <h3 className=" ff_gilroy-semibold fs_2x4l text-white mb-0">
                      Check
                    </h3>
                    <p className="ff_gilroy-medium fs_md text_gray pe-xl-4 pt-sm-2 mb-0">
                      that your smartphone supports eSIM
                    </p>
                  </div>
                  <div className="col-sm-3 mt-md-5 mt-4 position-relative">
                    <img
                      className="position-absolute line_position2 d-none d-sm-flex"
                      src={line}
                      alt="img"
                    />
                    <img className="mb-sm-4 mb-2" src={buy} alt="img" />
                    <h3 className=" ff_gilroy-semibold fs_2x4l text-white mb-0">
                      Buy
                    </h3>
                    <p className="ff_gilroy-medium fs_md text_gray pe-xl-4 pt-sm-2 mb-0">
                      Your eSIM card to travel
                    </p>
                  </div>
                  <div className="col-sm-3 custom_margin_110 mt-4 mt-sm-0">
                    <div className="d-flex flex-column justify-content-end h-100">
                      <span>
                        {" "}
                        <img className="mb-sm-4 mb-2" src={squar} alt="img" />
                      </span>
                      <h3 className=" ff_gilroy-semibold fs_2x4l text-white mb-0">
                        Install the QR
                      </h3>
                      <p className="ff_gilroy-medium fs_md text_gray pe-xl-4 pt-sm-2 mb-0">
                        and configure it. Activate it just before your leave
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Esim;
