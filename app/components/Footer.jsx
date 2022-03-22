import { IKImage } from "imagekitio-react";
import {
  FooterContainer,
  SocialLinks,
} from "../styles/footer";

export const Variations = {
  PURPLE: 'purple',
  PINK: 'pink',
  YELLOW: 'yellow',
  GREEN: 'green',
}

const getFooterBarImagePath = (variation) => {
  return {
    [Variations.PURPLE]: '/bar-purple_zL2qHlmDLQ0Ug.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716394704',
    [Variations.PINK]: '/bar-pink_5box97MV6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647740115147',
    [Variations.YELLOW]: '/bar-yellow_BXbrtuCWY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647740115220',
    [Variations.GREEN]: '/bar-green_5-nUD_VPwb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647922144336',
  }[variation]
}
const getInstagramImagePath = (variation) => {
  return {
    [Variations.PURPLE]: '/instagram-purple_1YkVL_3WXp8SY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716304712',
    [Variations.PINK]: '/instagram-pink_SEsHVWNNU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211708',
    [Variations.YELLOW]: '/instagram-yellow_84f2YzvbsF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211792',
    [Variations.GREEN]: '/instagram-green_CRdS4msc7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647922144271',
  }[variation]
}
const getTwitterImagePath = (variation) => {
  return {
    [Variations.PURPLE]: '/twitter-purple_dBcNgQlNe2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211896',
    [Variations.PINK]: '/twitter-pink_5IvjTJvCcA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211908',
    [Variations.YELLOW]: '/twitter-yellow_Ydkia8xH9T.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211930',
    [Variations.GREEN]: '/twitter-green_BLOI2JRs_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647922144360',
  }[variation]
}
const getDiscordImagePath = (variation) => {
  return {
    [Variations.PURPLE]: '/discord-purple_QGcqb_xHlVkLc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716279853',
    [Variations.PINK]: '/discord-pink_sNIlBiwsAq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211863',
    [Variations.YELLOW]: '/discord-yellow_zzDwUgrlvJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647716211878',
    [Variations.GREEN]: '/discord-green_nQ7TryHQq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647922205774',
  }[variation]
}
const Footer = ({ variation = Variations.PURPLE }) => {
  const FooterBarPath = getFooterBarImagePath(variation);
  const TwitterPath = getTwitterImagePath(variation);
  const InstagramPath = getInstagramImagePath(variation);
  const DiscordPath = getDiscordImagePath(variation);

    return (
      <FooterContainer >
        <IKImage
            path={FooterBarPath}
            transformation={[{
              width: "1200"
            }]}
          />
        <SocialLinks>
          <IKImage
              path={TwitterPath}
              transformation={[{
                height: "50"
              }]}
            />
          <IKImage
            path={DiscordPath}
            transformation={[{
              height: "50"
            }]}
          />
          <IKImage
            path={InstagramPath}
            transformation={[{
              height: "50"
            }]}
          />
        </SocialLinks>
      </FooterContainer>
    )
}

export default Footer