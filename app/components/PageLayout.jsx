import { IKImage, IKContext } from 'imagekitio-react'
import { HomePageContainer, TextContainer, MainSection, CenteredText } from "../styles/home";
import Footer, { Variations } from "~/components/Footer";
import {  SplashLogoContainer } from '../styles/ascension'

const SPLASH_LOGO_WIDTH = "250";

export default function PageLayout({ 
  splashImagePath, 
  bannerImagePath,
  footerText,
  footerVariation,
  PageContainerComponent = HomePageContainer
}) {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/pgm">
      <PageContainerComponent>
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
          height="75%"
          width="75%"
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
      </PageContainerComponent>
    </IKContext>

  );
}
