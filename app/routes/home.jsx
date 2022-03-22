import { IKImage, IKContext } from 'imagekitio-react'
import Navbar from "~/components/Navbar";
import { HeaderText, HomePageContainer, ParagraphText, TextContainer, MainSection, Divider, SubheaderText } from "../styles/home";
import Footer, { Variations } from "~/components/Footer";
import { SplashBanner} from '../styles/splash'
import EmailInput from '~/components/EmailInput';

export default function Home() {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/pgm">
      <HomePageContainer>
        <Navbar />
        <div className="container"></div>
        <SplashBanner>
          <IKImage
            path="/main-page-banner_MfwH9Mfib.png"
            loading="lazy"
            lqip={{active: true}}
            style={{
            width: "100%"
            }}
          />
        </SplashBanner>

        <MainSection>
          <TextContainer>
            <HeaderText>
              WELCOME TO THE PHAROAH GOD MOB
            </HeaderText>
            <ParagraphText>
              PGM is a collection of 5,000 NFTs existing on the ethereum
              blockchain. Each unique digital illustration signifies your
              seat in the mob. Those on the inside benefit from all future
              roadmap endeavors.
            </ParagraphText>
          </TextContainer>
        </MainSection>
        <MainSection center column>
          <IKImage
            path="/Samples_ogqPMGZD7AWvG.gif"
            transformation={[{
              width: "875"
            }]}
            style={{ margin: 'auto' }}
          />
           <IKImage
            path="/mint-now-button_tX1SzsxSW.png"
            transformation={[{
              width: "350"
            }]}
            style={{ margin: '24px auto' }}
          />
        </MainSection>
        <MainSection>
          <Divider />
        </MainSection>
        <MainSection center>
           <HeaderText>
            THE VISION
          </HeaderText>
          <IKImage
            path="/seeing-eye-pyramid-crop_JHKYh1Gy5.png"
            transformation={[{
              width: "600"
            }]}
            style={{ margin: '48px auto' }}
            onClick={() => window.location.assign('/vision')}
          />
        </MainSection>
        <MainSection>
        </MainSection>
        <MainSection center>
           <SubheaderText>
            KEEP ME POSTED
          </SubheaderText>
          <EmailInput />
        </MainSection>
        <Footer variation={Variations.PINK} />
      </HomePageContainer>
    </IKContext>

  );
}
