import React, { Component, Fragment } from "react";
import styled from "styled-components";
import LoginPopUp from "../LoginPopUp";
import PersonalDataSwitch from "../PersonalData";

// const StyledProfile = styled.div`
//   width: 100%;
//   height: 100%;
//   display: inline-block;
//   background-color: #f1f3f4;
// `;

const Profile = () => {
  return (
    <Fragment>
      <LoginPopUp />
      <PersonalDataSwitch />
    </Fragment>
  );
};

export default Profile;
