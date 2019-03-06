import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Selector = (props) => (
  <Fragment>
    {props.options.map((el, i) => (
      <div key={i}>
        <input type={props.type} name={props.name} id={el + i} />
        <label htmlFor={el + i}>{el}</label>
      </div>
    ))}
  </Fragment>
);

export default Selector;
