import Navbar from "~/components/Navbar";
import Banner from "../assets/website-files/main-page-banner.png";
import SamplesGif from "../assets/website-files/Samples.gif";
import MintNow from "../assets/website-files/MintNow.png";
import { HomePageContainer } from "../styles/home";

export default function Home() {
  return (
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
                <h1 className="d-flex font-italic welcome-title mb-3">
                  WELCOME TO THE
                  <br />
                  PHAROAH GOD MOB
                </h1>
                <p className="common-p mb-0">
                  PGM is a collection of NFTs—unique digital collectibles living
                  on the Ethereum blockchain. Your Pharoah doubles as your PGM
                  Club membership card, and grants access to members-only
                  benefits, the first of which is access to THE BATHROOM, a
                  collaborative graffiti board. Future areas and perks can be
                  unlocked by the community through roadmap activation.
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
    </HomePageContainer>
  );
}
