import { SubheaderWrapper } from "./styles";

type SubheaderProps = {
  children: string;
};

export const Subheader: React.FC<SubheaderProps> = ({ children }) => {
  return <SubheaderWrapper>{children}</SubheaderWrapper>;
};
