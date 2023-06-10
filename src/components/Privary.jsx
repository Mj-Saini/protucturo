import React from "react";
import standerd from "../assets/img/webp/privacy-img.webp";
import dots from "../assets/img/png/dots.png";

function Privacy() {
  return (
    <>
      <section
        id="Privacy"
        className="py-sm-5 pt-4 pb-5 my-xl-5 my-lg-4 position-relative z_index3"
      >
        <span className="red_rectangle position-absolute z_index0 d-none d-sm-flex"></span>
        <div className=" container z_index1 position-relative">
          <div
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-offset="100"
            className="col-xxl-7 col-md-9 mb-md-5 mb-4"
          >
            <h4 className=" text_gradient_red ff_gilroy-bold fs_2x4l">
              Our standards
            </h4>
            <h2 className="common_heading mb-0">
              <span className="d-lg-block"> Privacy standards</span> not seen
              before in telecom
            </h2>
          </div>
          <div className="row justify-content-between">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-offset="100"
              className="col-lg-6 col-sm-9  pe-xxl-4 "
            >
              <img className="w-100" src={standerd} alt="" />
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-offset="100"
              className="col-lg-6 position-relative ps-lg-4"
            >
              <img
                src={dots}
                alt=""
                className="privacy_dots d-none d-lg-flex position-absolute z_index0 "
              />
              <div className="d-flex justify-content-end flex-column h-100 py-md-1 z_index2 position-relative mt-md-4 mt-2 mt-lg-0">
                <h3
                  style={{ letterSpacing: "-0.04em" }}
                  className="ff_gilroy-bold fs_5x6l text_light_gray mb-0"
                >
                  Get started
                  <span className="d-lg-block">with Protecturo</span>
                </h3>
                <p className="ff_gilroy-medium fs_xl text_gray mb-0 my-xl-4 mt-3">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident.
                </p>
                <p className="ff_gilroy-medium fs_xl text_gray mb-0 mt-3">
                  Your personal information is 100% safe with us, because we do
                  not require any personal information besides email. Of course
                  no contracts, no credit checks and no fine prints. To protect
                  your privacy online, our data plans come with a Privacy IP
                  address.
                </p>

                <span className="mt-4 mt-xl-5">
                  <button className="main_btn">Get started</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Privacy;
