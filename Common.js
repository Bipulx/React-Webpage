import React from "react";
import { Link } from "react-router-dom";
const About = (props) => {
  return (
    <div className="adjust-all">
      <div>
        <section>
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                    <h1>
                      {props.name}
                      <strong className="text-success">Bipul Khanal</strong>
                    </h1>
                    <h2 className="my-3">We are the creative devloper</h2>
                    <div className="mt-3">
                      <Link
                        className="btn btn-outline-success"
                        to={props.visit}
                      >
                        {props.btname}
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={props.src} height alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
