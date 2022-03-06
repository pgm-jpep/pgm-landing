import Logo from "../assets/logo.png";
import PGM from "../assets/website-files/PGM.png";
import SplashBannerImage from "../assets/website-files/enter-page-art.png";
import SplashButtonImage from "../assets/website-files/enter-button.png";
import SplashFooterBarImage from '../assets/website-files/footer-bar-cropped.png';
import TwitterIcon from '../assets/website-files/twitter-logo.png';
import DiscordIcon from '../assets/website-files/discord-logo.png';
import InstagramIcon from '../assets/website-files/instagram-logo.png';

import {
  SplashPageContainer,
  SplashLogoContainer,
  SplashLogo,
  SplashBanner,
  SplashButton,
  SplashFooterContainer,
  SplashFooterBar,
  SocialLinks,
  SocialLink
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
      <SplashFooterContainer >
        <SplashFooterBar
          src={SplashFooterBarImage}
        />
        <SocialLinks>
          <SocialLink src={TwitterIcon} />
          <SocialLink src={DiscordIcon} />
          <SocialLink src={InstagramIcon} />
        </SocialLinks>
      </SplashFooterContainer>
    </SplashPageContainer>
  );
}
