import Footer from '../components/Footer';

import {
  SplashPageContainer,
  SplashLogoContainer,
  SplashLogo,
  SplashBanner,
  SplashButton,
} from "../styles/splash";
import { IKContext, IKImage } from "imagekitio-react";

export default function Index() {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/pgm">

      <SplashPageContainer>
        <SplashLogoContainer style={{maxWidth: '400px'}}>
          <IKImage
            path="/w-pharaoh_yBUimLV0dw.gif"
            transformation={[{
              width: "500"
            }]}
            loading="lazy"
            lqip={{active: true}}
          />
          <IKImage
            path="/letters_UiWE76Yiy.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1673723677319"
            transformation={[{
              width: "500"
            }]}
            loading="lazy"
            lqip={{active: true}}
            style={{ maxWidth: "300px", margin: "-130px auto 0px"}}
          />
        </SplashLogoContainer>
        <SplashBanner style={{marginTop: '-100px'}}>

          <IKImage
            path="/splash-page-banner_5zTRhCoW-.png"
            loading="lazy"
            lqip={{active: true}}
            style={{
            width: "100%"
            }}
          />
          <SplashButton
            onClick={() => (window.location.href = "/home")}
          >
            <IKImage
              path="/enter-button-final_4i9f4_Ec8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651981728961"
              transformation={[{
                "width": "350"
              }]}
              loading="lazy"
              lqip={{active: true}}
              style={{
                "margin": "auto"
              }}
            />
          </SplashButton>
        </SplashBanner>
        <Footer />
      </SplashPageContainer>
    </IKContext>
  );
}
