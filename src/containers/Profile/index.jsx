import React, { Component, Fragment } from "react";
import styled from "styled-components";
import LoginPopUp from "../LoginPopUp";
import PersonalDataSwitch from "../PersonalData";

const Profile = () => {
  return (
    <Fragment>
      <LoginPopUp />
      <PersonalDataSwitch/>
    </Fragment>
  );
};

export default Profile;
