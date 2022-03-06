import styled from 'styled-components';
import SplashBackgroundImage from '../assets/website-files/enter-page-background-cropped.png';
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
  width: 100%;
  max-width: 80vw;
`;
export const SplashButton = styled.img`
  margin-top: -70%;
  width: 100%;
  max-width: 80vw;
`;

export const SplashFooterContainer = styled.div`
  margin: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SplashFooterBar = styled.img`
  max-width: 95vw;
`;
export const SocialLinks = styled.div`
  margin: 24px auto;
  display: flex;
  justify-content: center;
  gap: 12px;
`;
export const SocialLink = styled.img`
  max-height: 50px;
`;
