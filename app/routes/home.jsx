import { IKImage, IKContext, IKVideo } from 'imagekitio-react'
import Navbar from "~/components/Navbar";
import { HeaderText, HomePageContainer, ParagraphText, TextContainer, MainSection, Divider, SubheaderText, CenteredText } from "../styles/home";
import Footer, { Variations } from "~/components/Footer";
import {  SplashLogoContainer, SplashLogo } from '../styles/splash'

const SPLASH_LOGO_WIDTH = "250";

export default function Home() {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/pgm">
      <HomePageContainer>
        <SplashLogoContainer>
          <IKImage
            path="/PGM%20website%20files/Untitled_Artwork%203_O1c4PqmNX.gif?updatedAt=1706237717815"
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
          path="/PGM%20website%20files/Pink%20page%20gif_TFZUIeOWN.gif?updatedAt=1706237708422"
          style={{
            width: "75%",
            margin: '0 auto',
          }}
          autoPlay
          loop

        />
        <MainSection>
          <TextContainer>
            {/* <SubheaderText> */}
            <CenteredText>

              Deliverance.
            </CenteredText>
            <CenteredText>
              3.21.22
            </CenteredText>
            {/* </SubheaderText> */}
          </TextContainer>
        </MainSection>
        <Footer variation={Variations.PINK} />
      </HomePageContainer>
    </IKContext>

  );
}
