import React from "react";
import "./_Spinner.scss";
// IMAGES
import LogoMab from "../../../assets/images/Logo de MAB.png";

const SpinnerDotsLine = () => {
  return (
    <div className="snippetPage" data-title=".dot-floating">
      <img className="spinner-logoMab-line" src={LogoMab} alt="Logo de MAB" />
      <div className="dot-floating"></div>
    </div>
  );
};

export default SpinnerDotsLine;
