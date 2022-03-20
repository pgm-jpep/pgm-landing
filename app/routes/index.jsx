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
            path="/PGM_OXTYtPPw7yvd1.png"
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
              path="/enter_button_cropped_toafS3QB-ntK.png"
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
