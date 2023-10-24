import { ReactElement } from "react";
import { FieldWrapper, LabelWrapper } from "./styles";
import React from "react";

type FieldProps = {
  children: ReactElement;
  label: string;
};

export const Field: React.FC<FieldProps> = ({ children, label, ...rest }) => (
  <FieldWrapper>
    <LabelWrapper>{label}</LabelWrapper>
    {React.cloneElement(React.Children.only(children), {
      ...rest,
    })}
  </FieldWrapper>
);
