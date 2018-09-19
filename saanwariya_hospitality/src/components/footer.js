import React from "react";
// import "../styles/bootstrap4/bootstrap.min.css";
// import "../styles/main_styles.css";

const Footer = () => (
  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 order-lg-1 order-2  ">
          <div
            className="copyright_content flex-row text-center"
            style={{ marginTop: "25px" }}
          >
            <div>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | Powered by{" "}
              <a href="http://www.panthrax.com" target="_blank">
                PDA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
