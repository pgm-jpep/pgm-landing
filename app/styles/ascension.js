import styled from 'styled-components';
import HelveticaNeueLTPro from '../assets/fonts/HelveticaNeueLTPro-Blk.otf';



export const SplashPageContainer = styled.div`
  background-color: black;
  background-size: 100% auto;
  height: 100%;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;
export const AscensionPageContainer = styled(SplashPageContainer)`
  background-image: url(https://ik.imagekit.io/pgm/PGM%20website%20files/Green%20background_lzIc_aC5x4.png?updatedAt=1706237717988);
  background-color: unset;
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
export const SplashBannerMaxed = styled.div`
    width: 100%;
  max-width: 850px;
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
  opacity: 0.7;
  transition: all .2s ease-in-out;
  &:hover {
    opacity: 1;
    transform: scale(1.05);

  }
`;

// TODO: Consider as actual anchor tag
export const ClickableImage = styled.div`
    cursor: pointer;
  opacity: ${(props) => props.opacity || 0.7};
  transition: all .2s ease-in-out;
  &:hover {
    opacity: 1;
    transform: scale(1.05);

  }
  ${(props) => props.margin && `margin: ${props.margin}`}
`;
