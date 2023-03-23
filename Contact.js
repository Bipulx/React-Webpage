import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="">
        <h1 className="text-center">contact</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="form-group row my-3">
                <label for="inputPassword" class="col-sm-2 col-form-label ">
                  Full Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder=""
                  />
                </div>
              </div>
              <div class="form-group row my-3">
                <label for="adress" class="col-sm-2 col-form-label">
                  Adress
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    placeholder="input your adress"
                  />
                </div>
              </div>

              <div class="form-group row my-3">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="staticEmail"
                    value="email@example.com"
                  />
                </div>
              </div>
              <div class="form-group row my-3">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  Password
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                  />
                </div>
              </div>
            </form>
            <button type="button" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
