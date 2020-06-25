import React from "react";

export const BaseInputGroup = ({ labelText, id, ...rest }) => (
  <>
    <label htmlFor={id} className="sr-only">
      {labelText}
    </label>
    <input id={id} placeholder={labelText} className="form-control" {...rest} />
  </>
);

export const EmailInputGroup = props => (
  <BaseInputGroup
    labelText={"Email address"}
    id="email"
    name="email"
    type="email"
    className="form-control"
    {...props}
  />
);

export const PasswordInputGroup = props => (
  <BaseInputGroup
    labelText="Password"
    id="password"
    name="password"
    type="password"
    className="form-control"
    {...props}
  />
);

export const FirstNameInputGroup = props => (
  <BaseInputGroup
    labelText={"First Name"}
    id="firstName"
    name="firstName"
    type="firstName"
    className="form-control"
    {...props}
  />
);

export const LastNameInputGroup = props => (
  <BaseInputGroup
    labelText={"Last Name"}
    id="lastName"
    name="lastName"
    type="lastName"
    className="form-control"
    {...props}
  />
);
export const PhoneNumberInputGroup = props => (
  <BaseInputGroup
    labelText={"Phone Number"}
    id="phoneNumber"
    name="phoneNumber"
    type="phoneNumber"
    className="form-control"
    {...props}
  />
);
