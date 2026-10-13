import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "120px", height: "auto" }}
          />
          <p className="text-small text-muted mt-3 ">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "120px", height: "auto" }}
          />
          <p className="text-small text-muted mt-3">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "120px", height: "auto" }}
          />
          <p className="text-small text-muted mt-3">Opening trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/ZerodhaFundhouse.png"
            style={{ width: "120px", height: "auto" }}
          />
          <p className="text-small text-muted mt-3">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/GoldenpiLogo.png"
            style={{ width: "120px", height: "auto" }}
          />
          <p className="text-small text-muted mt-3">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/DittoLogo.png"
            style={{ width: "120px", height: "auto" }}
          />
          <p className="text-small text-muted mt-3">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
