import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const Radio = ({ name, onChange, lfState }) => {
  return (
    <Label isselected={(lfState === name).toString()} id={name}>
      <RadioAccess id={name} onChange={onChange} />
      <FormattedMessage id={`l${name}`} />
    </Label>
  );
};

const Label = styled.label`
  color: ${(props) =>
    props.isselected === "true" ? "hsla(150,100%,10%,0.9)" : "hsla(150,100%,30%,0.9)"};
  background-color: ${(props) => (props.isselected === "true" ? "white" : "mintcream")};
  border: 1px solid
    ${(props) => (props.isselected === "true" ? "hsla(150,100%,40%,0.9)" : "white")};
  border-radius: 4px;
  padding: 2px 4px;
  margin: 0px 2px;
`;

const RadioAccess = styled.input.attrs((props) => ({
  type: "radio",
  name: "lang",
  value: props.id,
  htmlFor: props.id,
  onChange: props.onChange,
}))`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
`;

const LangFilter = ({ names, handleRadioLang, lf }) => {
  return (
    <div id="lf">
      <FormattedMessage id="langFilter" />:
      {names.map((name) => {
        return (
          <Radio
            name={name}
            onChange={handleRadioLang}
            lfState={lf}
            key={name}
          />
        );
      })}
    </div>
  );
};

export default LangFilter;
