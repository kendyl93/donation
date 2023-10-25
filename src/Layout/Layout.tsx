import React, { ReactNode } from "react";
import { Navbar } from "./components/Navbar";
import { LayouContenttWrapper, LayoutWrapper } from "./styles";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <LayouContenttWrapper>{children}</LayouContenttWrapper>
    </LayoutWrapper>
  );
};
