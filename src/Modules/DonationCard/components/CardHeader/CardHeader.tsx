import givingBlockSrc from '../../../../assets/giving-block.svg';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #FCD5CE;  // Peach color based on the image. Adjust as needed.
  padding: 15px 20px;
  border-radius: 8px 8px 0 0; // Assuming you want to keep the top corners rounded and bottom corners straight.
`;

const Icon = styled.div`
  margin-right: 15px;
  // Placeholder for the SVG styling
  // Insert SVG here or use an <img> tag to import and display the SVG
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px; // Adjust as needed
  color: #333;  // Adjust as needed
`;

const Subtitle = styled.p`
  margin-top: 5px;
  font-size: 18px;  // Adjust as needed
  color: #666;  // Adjust as needed
`;

export const CardHeader = () => {
    return (
        <HeaderContainer>
            <Icon>
                <img src={givingBlockSrc} alt={'giving-block'} />
            </Icon>
            <div>
                <Title>The giving block</Title>
                <Subtitle>Set up your donation goal!</Subtitle>
            </div>
        </HeaderContainer>
    );
}
