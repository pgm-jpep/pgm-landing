import { IKImage, IKContext } from 'imagekitio-react'
import Navbar from "~/components/Navbar";
import { HeaderText, ParagraphText, TextContainer, MainSection, Divider, SubheaderText, } from "../styles/home";
import {FlexList, FlexListItem, TeamPageContainer } from '../styles/team';
import Footer, { Variations } from "~/components/Footer";
import { SplashBanner} from '../styles/splash'
import EmailInput from '~/components/EmailInput';

export default function Team() {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/pgm">
      <TeamPageContainer>
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
              THE TEAM
            </HeaderText>
            <FlexList>
              <FlexListItem>
              <IKImage
                path="/rob-pharoah-2_-MUe3EEm9.png"
                transformation={[{
                  width: "350"
                }]}
                style={{ margin: '24px auto' }}
              />
              </FlexListItem>
              <FlexListItem>
              <IKImage
                path="/jake-pharoah-2_A7m9plMaI.png"
                transformation={[{
                  width: "350"
                }]}
                style={{ margin: '24px auto' }}
              />
              </FlexListItem>
              <FlexListItem>
              <IKImage
                path="/ben-pharoah-2_DiL89LpII.png"
                transformation={[{
                  width: "350"
                }]}
                style={{ margin: '24px auto' }}
              />
              </FlexListItem>
            </FlexList>
            <ParagraphText color={'#263A0B'}>
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
          <EmailInput variation={Variations.GREEN} />
        </MainSection>
        <Footer variation={Variations.GREEN} />
      </TeamPageContainer>
    </IKContext>

  );
}