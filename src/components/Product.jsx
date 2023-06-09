import React from "react";
import ryden from "../assets/img/webp/ryden.webp";
import dots from "../assets/img/png/dots.png";
import web from "../assets/img/svg/web.svg";
import detect from "../assets/img/svg/dail.svg";
import security from "../assets/img/svg/hand-mobile.svg";
import unlimeted from "../assets/img/svg/setting.svg";

function Product() {
  return (
    <>
      <section id="Products" className="py-md-5 my-sm-5 position-relative">
        <div className="container py-lg-5 my-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 ">
              <div className="d-flex flex-column justify-content-center h-100">
                <p className=" ff_gilroy-bold fs_2x4l text_gradient_red">
                  Our product benefits
                </p>
                <h2 className="common_heading text-white mb-0">
                  What you will
                  <span className="d-lg-block">get with Protecturo</span>
                </h2>
                <p className=" ff_gilroy-medium fs_2x2l text_gray pt-md-4 pt-2 mb-0 pe-lg-4">
                  Your creativity is endless. Your IoT project shouldn't be held
                  back by cellular connectivity. Let's build a new unicorn
                  together.
                </p>
                <div className="row justify-content-between">
                  <div className="col-md-5 mt-md-5 mt-4">
                    <span>
                      <img src={web} alt="icon" />
                    </span>
                    <h3 className="mt-3 ff_gilroy-semibold fs_2x4l text-white mb-0">
                      Stay connected
                    </h3>
                    <p className="ff_gilroy-medium fs_md text_gray pe-xl-4 pt-2 mb-0">
                      Travel and stay connected without roaming or surprise
                      bills.
                    </p>
                  </div>
                  <div className="col-md-5 mt-md-5 mt-4">
                    <span>
                      <img src={detect} alt="icon" />
                    </span>
                    <h3 className="mt-3 ff_gilroy-semibold fs_2x4l text-white mb-0">
                      International
                    </h3>
                    <p className="ff_gilroy-medium fs_md text_gray pe-xl-4 pt-2 mb-0">
                      Keep your local SIM card to receive all phone calls
                      everywhere.
                    </p>
                  </div>
                  <div className="col-md-5 mt-md-5 mt-4">
                    <span>
                      <img src={security} alt="icon" />
                    </span>
                    <h3 className="mt-3 ff_gilroy-semibold fs_2x4l text-white mb-0">
                      Ease to get
                    </h3>
                    <p className="ff_gilroy-medium fs_md text_gray pe-xl-4 pt-2 mb-0">
                      Purchase and install your eSIM in just one minute.
                    </p>
                  </div>
                  <div className="col-md-5 mt-md-5 mt-4">
                    <span>
                      <img src={unlimeted} alt="icon" />
                    </span>
                    <h3 className="mt-3 ff_gilroy-semibold fs_2x4l text-white mb-0">
                      Data plans
                    </h3>
                    <p className="ff_gilroy-medium fs_md text_gray pe-xl-4 pt-2 mb-0">
                      Get unlimited data plans in according to destinations.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="col-lg-6 col-sm-9 ps-lg-4 mt-4 mt-lg-0">
              <div className="position-relative">
                <img
                  className="position-absolute dots d-none d-md-flex"
                  src={dots}
                  alt="dots"
                />
                <img className="w-100" src={ryden} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
