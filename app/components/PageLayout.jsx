import { IKImage, IKContext } from 'imagekitio-react'
import { HomePageContainer, TextContainer, MainSection, CenteredText } from "../styles/home";
import Footer, { Variations } from "~/components/Footer";
import {  SplashLogoContainer } from '../styles/splash'

const SPLASH_LOGO_WIDTH = "250";

export default function PageLayout({ 
  splashImagePath, 
  bannerImagePath,
  footerText,
  footerVariation,
}) {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/pgm">
      <HomePageContainer>
        <SplashLogoContainer>
          <IKImage
            path={splashImagePath}
            transformation={[{
              width: SPLASH_LOGO_WIDTH
            }]}
            loading="lazy"
            lqip={{active: true}}
            height={SPLASH_LOGO_WIDTH}
            width={SPLASH_LOGO_WIDTH}
          />
        </SplashLogoContainer>
        {/* <Navbar /> */}
        <IKImage
          path={bannerImagePath}
          style={{
            width: "75%",
            margin: '0 auto',
          }}
          autoPlay
          loop

        />
        <MainSection>
          <TextContainer>
            <CenteredText>
              {footerText}
            </CenteredText>
            <CenteredText>
              3.21.22
            </CenteredText>
          </TextContainer>
        </MainSection>
        <Footer variation={footerVariation} />
      </HomePageContainer>
    </IKContext>

  );
}
