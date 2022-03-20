import styled from 'styled-components';
import HelveticaNeueLTPro from '../assets/fonts/HelveticaNeueLTPro-Blk.otf';

export const SplashPageContainer = styled.div`
  background-image: url(https://ik.imagekit.io/pgm/splash-page-background_ispuh5fagl.png);
  background-size: 100% auto;
  height: 100%;
  min-height: 100vh;
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
  max-height: 500px;
`;

export const SplashLogo = styled.img`
  max-width: 300px;
`;

export const SplashBanner = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  min-height: 500px;
  margin: 24px 0px 48px;
`;
export const SplashButton = styled.div`
  width: 100%;
  max-width: 1200px;
  position: absolute;
  top: 45%;
  display: flex;
  cursor: pointer;
`;
