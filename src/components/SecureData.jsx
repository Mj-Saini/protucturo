import React from "react";
import eSIM from "../assets/img/svg/sim-card.svg";
import qrCode from "../assets/img/svg/qr-code.svg";
import redVector from "../assets/img/svg/esim-vector.svg";
import wifi from "../assets/img/svg/wifi.svg";
function SecureData() {
  return (
    <>
      <section className="pt-5 my-lg-4 my-xl-5 mb-5 position-relative">
        <img
          className="red_vector_img top-100 end-0 d-md-flex d-none z_index0"
          src={redVector}
          alt="vector"
        />
        <span className="red_shadow position-absolute header_shadow_bottom top-100 translate-middle ms-5 mt-5 z_index0"></span>
        <span className="red_shadow position-absolute secure_data_shadow z_index0"></span>

        <div className="container z_index2 position-relative">
          <div>
            <div className="col-xl-8 col-lg-10 mx-auto ">
              {" "}
              <h3 className="text_gradient_red text-center">
                Our products
              </h3>{" "}
              <h2 className=" ff_gilroy_bold fw-bold text_light_gray fs_6x5l text-center pb-md-4 mb-0 mt-2">
                Allow us to secure your data{" "}
                <span className="d-xxl-block">with Protecturo’s products </span>
              </h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                {" "}
                <div className="row mt-sm-4 justify-content-center">
                  <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                    <div className="p-xxl-5 p-4 bg_black text-center  d-flex flex-column justify-content-end h-100">
                      <div className=" d-flex justify-content-center">
                        <img className="img_esim" src={qrCode} alt="" />
                      </div>{" "}
                      <h4 className="mt-md-4 mt-2 ff_gilroy-semibold fs_2x4l text_white_gray text-center">
                        eSIM
                      </h4>
                      <p className=" ff_gilroy-medium fs_md text_gray text-center mt-md-3">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis
                      </p>
                      <span className=" d-inline-block mt-md-3">
                        <button className="main_btn">Learn more</button>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                    <div className="p-xxl-5 p-4 bg_black text-center text-center d-flex flex-column justify-content-end h-100">
                      <div className=" d-flex justify-content-center">
                        <img className="img_esim" src={eSIM} alt="" />
                      </div>{" "}
                      <h4 className="mt-md-4 mt-2 ff_gilroy-semibold fs_2x4l text_white_gray text-center">
                        SIM card
                      </h4>
                      <p className=" ff_gilroy-medium fs_md text_gray text-center mt-md-3">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis
                      </p>
                      <span className=" d-inline-block mt-md-3">
                        <button className="main_btn">Learn more</button>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                    <div className="p-xxl-5 p-4 d-flex flex-column justify-content-end bg_black text-center h-100">
                      <img className="img_esim" src={wifi} alt="" />

                      <h4 className="mt-md-4 mt-2 ff_gilroy-semibold fs_2x4l text_white_gray text-center">
                        Mobile Wifi Hotspot
                      </h4>
                      <p className=" ff_gilroy-medium fs_md text_gray text-center mt-md-3">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis
                      </p>
                      <span className="d-inline-block mt-md-3">
                        <button className="main_btn">Learn more</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecureData;
