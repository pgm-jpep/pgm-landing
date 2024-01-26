import { IKImage, IKContext, IKVideo } from 'imagekitio-react'
import Navbar from "~/components/Navbar";
import { HeaderText, HomePageContainer, ParagraphText, TextContainer, MainSection, Divider, SubheaderText } from "../styles/home";
import Footer, { Variations } from "~/components/Footer";
import { SplashBanner} from '../styles/splash'
import EmailInput from '~/components/EmailInput';
import { MintButton } from '../styles/splash';

export default function Home() {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/pgm">
      <HomePageContainer>
        <Navbar />
        <div className="container"></div>
        <SplashBanner>
          <IKVideo
              path="/throne_hevc_V_XRSiuF7.mov?ik-sdk-version=javascript-1.4.3&updatedAt=1673725908868"
              style={{
                width: "100%"
                }}
              autoPlay
              loop
              
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
            path="/samples_3TSz1XYS6.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1673724383963"
            style={{ margin: 'auto', width: '675px', opacity: '0.7' }}
          />
          <MintButton
            onClick={() => (window.location.href = "/mintnow")}
          >

           <IKImage
            path="/mint-now-button_tX1SzsxSW.png"
            transformation={[{
              width: "350"
            }]}
            style={{
              margin: '24px auto',
            }}
          />
          </MintButton>
        </MainSection>
        <MainSection>
          <Divider />
        </MainSection>
        <MainSection center>
           <HeaderText>
            THE VISION
          </HeaderText>
          <MintButton>

          <IKImage
            path="/seeing-eye-pyramid-crop_JHKYh1Gy5.png"
            transformation={[{
              width: "600"
            }]}
            style={{ margin: '48px auto', cursor: 'pointer' }}
            onClick={() => window.location.assign('/vision')}
          />
          </MintButton>
        </MainSection>
        <MainSection>
          <Divider />
        </MainSection>
        <MainSection center>
           <HeaderText>
            THE TEAM
          </HeaderText>
          <MintButton>
            <IKImage
              path="/touching_hands_fixed_mWKuW4YM0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673724931710"
              transformation={[{
                width: "800"
              }]}
              style={{ margin: '48px auto', cursor: 'pointer' }}
              onClick={() => window.location.assign('/team')}
            />
          </MintButton>
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
