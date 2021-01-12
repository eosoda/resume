import React from "react";
import { Button } from "@material-ui/core";

const CustomButton = ({ text, icon }) => {
  return (
    <Button
      className="site_btn"
      endIcon={icon ? <div className="icon_container">{icon}</div> : null}
    >
      <span className="btn_text"></span>
    </Button>
  );
};

export default CustomButton;
