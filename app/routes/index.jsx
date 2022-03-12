import Logo from "../assets/logo.png";
import PGM from "../assets/website-files/PGM.png";
import SplashBannerImage from "../assets/website-files/enter-page-art.png";
import SplashButtonImage from "../assets/website-files/enter-button.png";
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
        <SplashLogoContainer>
          <IKImage
            path="/logo-vector_1gzBYRGiHGR4.png"
            transformation={[{
              width: "300"
            }]}
            loading="lazy"
            lqip={{active: true}}

          />
          <IKImage
            path="/PGM_OXTYtPPw7yvd1.png"
            transformation={[{
              width: "300"
            }]}
            loading="lazy"
            lqip={{active: true}}
            style={{ marginTop: "-100px"}}
          />
        </SplashLogoContainer>
        <SplashBanner>

          <IKImage
            path="/enter-page-art_tFjMQYASpnrT.png"
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
