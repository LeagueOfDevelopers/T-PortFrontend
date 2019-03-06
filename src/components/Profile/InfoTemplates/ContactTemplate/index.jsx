import React, { Component } from "react";
import styled from "styled-components";
import StyledInput from "../../PersonalInfoInput";

const ContactForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class ContactTemplate extends Component {
  state = {};
  render() {
    return (
      <ContactForm id={this.props.id}>
        <StyledInput
          title="Телефон"
          type="tel"
          id="telInput"
          name="phone"
          autoComplete="tel"
          placeholder="+7-999-12-34-5678s"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <StyledInput
          title="Email"
          type="email"
          id="emailInput"
          name="email"
          autoComplete="email"
          placeholder="name@example.com"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
      </ContactForm>
    );
  }
}

export default ContactTemplate;
