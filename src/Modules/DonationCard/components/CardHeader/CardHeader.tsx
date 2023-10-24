import givingBlockSrc from "../../../../assets/giving-block.svg";
import { Header } from "../../../../shared/Header";
import { Subheader } from "../../../../shared/Subheader";
import {
  HeaderContainerWrapper,
  HeaderContentWrapper,
  CloseButtonWrapper,
} from "./styles";

const GIVING_BLOCK_ALT = "giving-block";

export const CardHeader = () => {
  return (
    <HeaderContainerWrapper>
      <CloseButtonWrapper />
      <div>
        <img src={givingBlockSrc} alt={GIVING_BLOCK_ALT} />
      </div>
      <HeaderContentWrapper>
        <Header>The giving block</Header>
        <Subheader>Set up your donation goal!</Subheader>
      </HeaderContentWrapper>
    </HeaderContainerWrapper>
  );
};
