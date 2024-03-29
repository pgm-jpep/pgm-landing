import styled from 'styled-components';
import HelveticaNeueLTPro from '../assets/fonts/HelveticaNeueLTPro-Blk.otf';
import VCR_Mono from '../assets/fonts/VCR_OSD_MONO.ttf'


export const HomePageContainer = styled.div`
  background-image: url(https://ik.imagekit.io/pgm/PGM%20website%20files/Pink%20background_RlupOo6jpO.png?updatedAt=1706237713198);
  background-size: 100% auto;
  height: 100%;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  @font-face {
    font-family: 'VCR_OSD_MONO';
    src: url(${VCR_Mono}) format('truetype');
  }
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const TextContainer = styled.div`
  width: 100%;
  padding: 32px;
  @font-face {
    font-family: 'VCR_OSD_MONO';
    src: url(${VCR_Mono}) format('truetype');
  }
`;
export const ParagraphText = styled.p`
  font-size: 1.4em;
  color: ${({ color }) => color};
  text-align: center;
`;
export const HeaderText = styled.h1`
  text-align: center;
  font-size: 2.4em;
  font-weight: 900;
  margin: 24px 0px;
`;
export const SubheaderText = styled.h3`
  text-align: center;
  font-size: 1.8em;
  font-weight: 800;
  margin: 24px 0px;
`;
export const CenteredText = styled.p`
  width: 100%;
  text-align: center;

`;

export const MainSection = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  margin: 24px 0px;
  ${({ center }) => center && `
    text-align: center
  `};
  ${({ column }) => column && `
    display: flex;
    flex-direction: column;
    gap: 64px;
  `}
`;

export const Divider = styled.div`
  background-color: #e3afff;
  width: 100%;
  max-width: 1200px;
  height: 4px;
`;


// #e3afff
