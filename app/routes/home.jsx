import { IKImage, IKContext, IKUpload } from 'imagekitio-react'
import Navbar from "~/components/Navbar";
import Banner from "../assets/website-files/main-page-banner.png";
import SamplesGif from "../assets/website-files/Samples.gif";
import MintNow from "../assets/website-files/MintNow.png";
import { HomePageContainer } from "../styles/home";
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <IKContext>

    <HomePageContainer>
      <Navbar />
      <div className="container"></div>
      <div className="container">
        <img src={Banner} className="img-fluid px-0" />
      </div>
      <div className="px-4 mt-md-4 container">
        <div className="mb-5 row">
          <div className="col">
            <div className=" row">
              <div className="mb-4  col-12">
                <h1 className="d-flex welcome-title mb-3">
                  WELCOME TO THE PHAROAH GOD MOB
                </h1>
                <p className="common-p mb-0">
                  PGM is a collection of 5,000 NFTs existing on the ethereum
                  blockchain. Each unique digital illustration signifies your
                  seat in the mob. Those on the inside benefit from all future
                  roadmap endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 row">
          <div className="col">
            <div className=" row">
              <div className="mb-4  col-12">
                <img
                  className="img-fluid w-100"
                  src={SamplesGif}
                  alt="mystery token"
                />

                <img
                  className="img-fluid w-100"
                  src={MintNow}
                  alt="mystery token"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </HomePageContainer>
    </IKContext>

  );
}
