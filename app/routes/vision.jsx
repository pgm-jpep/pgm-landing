import { IKImage, IKContext } from 'imagekitio-react'
import Navbar from "~/components/Navbar";
import { HeaderText, ParagraphText, TextContainer, MainSection, Divider, SubheaderText, } from "../styles/home";
import {VisionPageContainer } from '../styles/vision';
import Footer, { Variations } from "~/components/Footer";
import { SplashBanner} from '../styles/splash'
import EmailInput from '~/components/EmailInput';

export default function Vision() {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/pgm">
      <VisionPageContainer>
        <Navbar />
        <div className="container"></div>
        <SplashBanner>
          <IKImage
            path="/about-page-banner_GJWwV_zZv.png"
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
              THE VISION
            </HeaderText>
            <ParagraphText color={'#CAD913'}>
              PGM is a collection of 5,000 NFTs existing on the ethereum
              blockchain. Each unique digital illustration signifies your
              seat in the mob. Those on the inside benefit from all future
              roadmap endeavors.
            </ParagraphText>
          </TextContainer>
        </MainSection>
        <MainSection center>
           <SubheaderText>
            KEEP ME POSTED
          </SubheaderText>
          <EmailInput variation={Variations.YELLOW} />
        </MainSection>
        <Footer variation={Variations.YELLOW} />
      </VisionPageContainer>
    </IKContext>

  );
}