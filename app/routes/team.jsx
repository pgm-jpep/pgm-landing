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

        <MainSection>
          <TextContainer>
            <HeaderText>
              THE TEAM
            </HeaderText>
            <FlexList alignCenter>
              <FlexListItem alignCenter>
              <IKImage
                path="/rob_nft_G_onHXetGZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673723110093"
                transformation={[{
                  width: "300"
                }]}
                style={{ margin: '24px auto' }}
              />
              </FlexListItem>
              <FlexListItem alignCenter>
              <IKImage
                path="/jake_nft_P2sCj8D9K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673723110070"
                transformation={[{
                  width: "300"
                }]}
                style={{ margin: '24px auto' }}
              />
              </FlexListItem>
              <FlexListItem alignCenter>
              <IKImage
                path="/ben_nft_LeAi5sepHs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673723110092"
                transformation={[{
                  width: "300"
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