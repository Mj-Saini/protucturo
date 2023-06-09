import React from "react";
import vector from "../assets/img/png/overlay.png";

function YouGo() {
  return (
    <>
      <section className="py-5">
        <div className="container z_index1 position-relative">
          <div className="red_box py-5 px-4 d-flex flex-column align-items-center position-relative overflow-hidden z_index0">
            <img
              className="position-absolute w-100 h-100 top-0 z_index0"
              src={vector}
              alt="img"
            />{" "}
            <h2 className="z_index3 common_heading text-white text-center mt-2">
              Stay connect wherever you go
            </h2>
            <p className="z_index3 ff_gilroy-medium fs_2x2l text_light_gray text-center pt-2">
              Buy an international eSIM card, stay connected wherever you go,
              <span className="d-lg-block">
                {" "}
                and avoid expensive phone bills.
              </span>
            </p>
            <button
              style={{ background: "#000" }}
              className="main_btn mt-4 mb-2 z_index3 z_index2 position-relative "
            >
              Get started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default YouGo;
