import Logo from "../assets/logo.png";
import PGM from "../assets/website-files/PGM.png";
import SplashBannerImage from "../assets/website-files/enter-page-art.png";
import SplashButtonImage from "../assets/website-files/enter-button.png";
import {
  SplashPageContainer,
  SplashLogoContainer,
  SplashLogo,
  SplashBanner,
  SplashButton,
} from "../styles/splash";

export default function Index() {
  return (
    <SplashPageContainer>
      <SplashLogoContainer>
        <SplashLogo src={Logo} alt="pgm header logo" />
        <SplashLogo
          src={PGM}
          alt="pgm header logo"
          style={{ marginTop: "-100px" }}
        />
      </SplashLogoContainer>
      <SplashBanner src={SplashBannerImage} />
      <div>
        <SplashButton
          src={SplashButtonImage}
          onClick={() => (window.location.href = "/home")}
        />
      </div>
    </SplashPageContainer>
  );
}
