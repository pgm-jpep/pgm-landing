import styled from 'styled-components';
import MainPageBackground from '../assets/website-files/main-page-background.png';
import HelveticaNeueLTPro from '../assets/fonts/HelveticaNeueLTPro-Blk.otf';

export const HomePageContainer = styled.div`
  background-image: url(${MainPageBackground});
  height: 100%;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  @font-face {
    font-family: 'Neue Helvetica Pro 95 Black';
    src: url(${HelveticaNeueLTPro});
  }
  justify-content: center;
  align-items: center;
`;
