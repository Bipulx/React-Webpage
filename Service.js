import React from "react";
import Web from "./../images/service.jpg";
const Service = () => {
  return (
    <div className="service">
      <div className=" my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="conatiner-fluid mb-5">
        <div className="row">
          <div className="row-10 mx-auto">
            <div className="row">
              <div className="col-md-4 col-10 ">
                <div className="card my-4">
                  <img
                    classname="card-img-top"
                    src={Web}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">services</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="card">
                  <img
                    classname="card-img-top"
                    src={Web}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
