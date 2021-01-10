import { Typography } from "@material-ui/core";
import React from "react";
import "./Profile.css";
import displaypic from "../../assets/images/sam.png";
import CustomTimeline from "../Timeline/Timeline";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Sam</Typography>
        <Typography className="title">Sam</Typography>
      </div>

      <figure className="profile_image">
        <img src={displaypic} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline></CustomTimeline>
        <button>button</button>
      </div>
    </div>
  );
};

export default Profile;
