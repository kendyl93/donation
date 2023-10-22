import { HeaderWrapper } from "./styles";

type HeaderProps = {
    children: string;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
    return <HeaderWrapper>{children}</HeaderWrapper>
}