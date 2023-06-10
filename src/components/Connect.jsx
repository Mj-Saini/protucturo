import React from "react";
import playStore from "../assets/img/svg/play-store.svg";
import appStore from "../assets/img/svg/app-store.svg";
import connectivity from "../assets/img/png/connectivity.png";

function Connect() {
  return (
    <>
      <section id="App" className="py-xl-5 my-xl-5 my-lg-4 position-relative">
        <span className="red_shadow position-absolute top-0 end-50 translate-middle z_index0"></span>

        <div className="container position-relative z_index1 py-md-5 my-lg-5 my-4">
          <div
            style={{ backgroundColor: "#121212" }}
            className="py-xl-5 px-lg-5 px-sm-4 px-2   position-relative"
          >
            <img
              src={connectivity}
              alt="img"
              className="connective_img d-xl-flex d-none position-absolute bottom-0 end-0 "
            />
            <div className="row px-xxl-4 mt-4">
              <div className="col-xl-7 col-lg-6">
                <div
                  data-aos="fade-right"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-offset="100"
                  className="pb-4 py-md-4 pe-xl-4"
                >
                  <h2 className="common_heading mb-0 pe-xl-5 mt-4 mt-lg-0">
                    Instant connectivity with the Protecturo app
                  </h2>
                  <p className=" ff_gilroy-bold fs_2x2l text_gray mb-0 mt-3">
                    The ideal for the 21st century roadwarrior. The Protecturo
                    app lets you to grab a single data plan where and when you
                    want - at home or in any of our 190+ destinations. Select a
                    plan from the app, download an{" "}
                    <span className=" ff_gilroy-medium fs_2x2l text_gradient_red">
                      eSIM
                    </span>
                    , and you'll connect on the spot, on physical SIM card
                    required.
                  </p>
                  <div className="d-flex justify-content-center justify-content-md-start gap-3 gap-md-4 mt-xl-5 mt-4  ">
                    {" "}
                    <span className="cursor_pointer">
                      {"  "}
                      <img
                        className="d-inline-block w_costom transition_300 "
                        src={playStore}
                        alt="img"
                      />
                    </span>
                    <span className="cursor_pointer">
                      {" "}
                      <img
                        className="d-inline-block w_costom transition_300 cursor_pointer"
                        src={appStore}
                        alt="img"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 d-xl-none">
                <img className="w-100" src={connectivity} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Connect;
