
import {
  SplashPageContainer,
} from "../styles/splash";
import { ClickableImage } from "../styles/splash";
import { IKContext, IKImage } from "imagekitio-react";

export default function Index() {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/pgm">

      <SplashPageContainer>

        <ClickableImage
          onClick={() => {
            window.location.href = "/genesis"
          }}
          opacity={0.9}
        >
          <IKImage
            path="/PGM%20website%20files/Enter%20page%20top_62hBeVPXs.png?updatedAt=1706237708156"
            transformation={[{
              "width": "200"
            }]}
            loading="lazy"
            lqip={{ active: true }}
            style={{
              "margin": "auto",
            }}
          />
        </ClickableImage>
        <ClickableImage
          onClick={() => {
            window.location.href = "/deliverance"
          }}
        >
          <IKImage
            path="/PGM%20website%20files/Enter%20page%20middle_fWHav05Yh.png?updatedAt=1706237707522"
            transformation={[{
              "width": "150"
            }]}
            loading="lazy"
            lqip={{ active: true }}
            style={{
              "margin": "auto",
            }}
          />
        </ClickableImage>
        <ClickableImage
          onClick={() => {
            window.location.href = "/ascension"
          }}
        >
          <IKImage
            path="/PGM%20website%20files/Enter%20page%20bottom_7FID6S29v.png?updatedAt=1706237709417"
            transformation={[{
              "width": "200"
            }]}
            loading="lazy"
            lqip={{ active: true }}
            style={{
              "margin": "auto",
            }}
          />
        </ClickableImage>

        <ClickableImage
          onClick={() => {
            window.location.href = "/mint"
          }}
          opacity={0.9}
          margin="-100px 0px 0px 0px"
        >
          <IKImage
            path="/PGM%20website%20files/Enter%20page%20mint%20button_WGhSyf389.gif?updatedAt=1706237709621"
            transformation={[{
              "width": "200"
            }]}
            loading="lazy"
            lqip={{ active: true }}
            style={{
              "margin": "auto",
            }}
          />
        </ClickableImage>

      </SplashPageContainer>
    </IKContext>
  );
}
