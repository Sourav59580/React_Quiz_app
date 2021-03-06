import React from "react";
function Home() {
  return (
    <React.Fragment>
      <div
        className="container-fluid p-4"
        style={{ backgroundColor: "#071a52 ", width: "100%", height: "100vh" }}
      >
        <div class="row mt-5">
          <div class="col-md-6 m-auto">
            <div class="card card-body text-center text-light" style={{backgroundColor:'#070d59'}}>
              <h1>
                <i class="fab fa-node-js fa-3x"></i>
              </h1>
              <p>Create an account or login</p>
              <a href="/register" class="btn btn-success btn-block mb-2">
                Play Now
              </a>
              <a href="/register" class="btn btn-danger btn-block mb-2">
                Register
              </a>
              <a href="/login" class="btn btn-primary btn-block">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
