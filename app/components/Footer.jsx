
import FooterBarImage from '../assets/website-files/footer-bar.png';
import TwitterIcon from '../assets/website-files/twitter-logo.png';
import DiscordIcon from '../assets/website-files/discord-logo.png';
import InstagramIcon from '../assets/website-files/instagram-logo.png';
import {
  FooterContainer,
  FooterBar,
  SocialLinks,
  SocialLink
} from "../styles/footer";

const Footer = () => {
  return (
    <FooterContainer >
      <FooterBar
        src={FooterBarImage}
      />
      <SocialLinks>
        <SocialLink src={TwitterIcon} />
        <SocialLink src={DiscordIcon} />
        <SocialLink src={InstagramIcon} />
      </SocialLinks>
    </FooterContainer>
  )
}

export default Footer