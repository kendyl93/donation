import React from "react";
import { NavbarWrapper } from "./styles";
import { Logo } from "./Logo";

export const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Logo />
    </NavbarWrapper>
  );
};
