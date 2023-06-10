import React from "react";
import { cyber } from "../js/CardData";

function CyberSefaty() {
  return (
    <>
      <section id="Features" className="py-md-5 position-relative">
        <span className="red_shadow position-absolute top-50 start-100 translate-middle z_index0"></span>

        <div className="container z_index2 position-relative my-lg-5">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-offset="100"
          >
            {" "}
            <p className="ff_gilroy-bold fs_2x4l text_gradient_red mb-0">
              Features
            </p>
            <h2 className="common_heading mt-3 mb-lg-4 mb-0">
              Best-in-class Cyber safety{" "}
              <span className="d-lg-block ">for commercial and personal.</span>
            </h2>
          </div>
          <div className="row">
            {cyber.map((data) => {
              return (
                <div className="col-xl-3 col-lg-4 col-sm-6 mt-4">
                  <div
                    data-aos="flip-left"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="800"
                    data-aos-duration="2000"
                    data-aos-offset="200"
                    className="bg_black px-xxl-5 px-lg-4 px-3 py-xxl-5 py-4 features_box_shadow transition_300 h-100 position-relative overflow-hidden"
                  >
                    <div className="overlay_on_cards position-absolute"></div>
                    <img
                      className=" z_index2 position-relative"
                      src={data.dataImg}
                      alt="img"
                    />
                    <h4 className="ff_gilroy-semibold fs_2x4l mb-0 z_index2 position-relative text_white_gray mt-4 pt-2">
                      {data.heading}
                    </h4>
                    <p className=" ff_gilroy-medium fs_md z_index2 position-relative text_gray mb-0 mt-2">
                      {data.lorem}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default CyberSefaty;
