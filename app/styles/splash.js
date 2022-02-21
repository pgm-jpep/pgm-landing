import styled from 'styled-components';
import SplashBackgroundImage from '../assets/website-files/enter-page-background.png';
import HelveticaNeueLTPro from '../assets/fonts/HelveticaNeueLTPro-Blk.otf';

export const SplashPageContainer = styled.div`
  background-image: url(${SplashBackgroundImage});
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

export const SplashLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SplashLogo = styled.img`
  max-width: 300px;
`;

export const SplashBanner = styled.img`
  max-width: 1600px;
`;
export const SplashButton = styled.img`
  margin-top: -70%;
  max-width: 1600px;
`
