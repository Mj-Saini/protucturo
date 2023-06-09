import React from "react";
import playStore from "../assets/img/svg/play-store.svg";
import appStore from "../assets/img/svg/app-store.svg";
import solutionImg from "../assets/img/png/solution-img.png";

function Solution() {
  return (
    <>
      <section className="position-relative bg_black mt-5">
        <div className="container position-relative z_index1">
          <div className="py-lg-5 px-2 position-relative">
            <img
              src={solutionImg}
              alt="img"
              className="solution_img d-xl-flex d-none position-absolute bottom-0 end-0 "
            />
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="pb-4 py-md-4  pe-xl-5">
                  <h2 className="common_heading mb-0 mt-5 mt-lg-0">
                    Global IoT connectivity to deploy and scale your solutions
                  </h2>
                  <p className=" ff_gilroy-bold fs_2x2l text_gray mb-0 mt-3">
                    If you're serious about getting your IoT build off the
                    ground - Protecturo is ready to make it quick, frictionless
                    and smart. Get started today with a free SIM & data, or
                    explore enterprise options with our team of IoT experts.
                  </p>
                  <button className="main_btn mt-sm-5 mt-4">Get started</button>
                </div>
              </div>
              <div className="col-lg-5 d-xl-none">
                <img className="w-100" src={solutionImg} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Solution;
