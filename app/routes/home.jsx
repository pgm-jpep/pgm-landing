import Navbar from "~/components/Navbar";
import Banner from '../assets/banner.png';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
      </div>
      <div className="container">
        <img
          src={Banner}
          className="img-fluid px-0"
        ></img>
      </div>
      <div className="px-4 mt-md-4 container">
        <div className="mb-5 row">
          <div className="col">
            <div className="mb-4 row">
              <div className="mb-4 col-lg-7 col-12">
                <h1 className="d-flex font-italic welcome-title mb-3">
                  WELCOME TO THE
                  <br />
                  PHAROAH GOD MOB
                </h1>
                <p className="common-p mb-0">
                  PGM is a collection of NFTs—unique digital
                  collectibles living on the Ethereum blockchain. Your Pharoah
                  doubles as your PGM Club membership card, and grants access
                  to members-only benefits, the first of which is access to THE
                  BATHROOM, a collaborative graffiti board. Future areas and
                  perks can be unlocked by the community through roadmap
                  activation.
                </p>
              </div>
              <div className="my-lg-auto col-lg-4 col-12 offset-lg-1">
                <div className="common-container">
                  <div className="row">
                    <div className="pb-2 pr-2 col-6">
                      <img
                        className="img-fluid"
                        src="https://ik.imagekit.io/bayc/assets/ape1.png"
                        alt="ape1"
                        aria-label="ape1"
                      />
                    </div>
                    <div className="pb-2 pl-2 col-6">
                      <img
                        className="img-fluid"
                        src="https://ik.imagekit.io/bayc/assets/ape2.png"
                        alt="ape2"
                        aria-label="ape2"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="pt-2 pr-2 col-6">
                      <img
                        className="img-fluid"
                        src="https://ik.imagekit.io/bayc/assets/ape3.png"
                        alt="ape3"
                        aria-label="ape3"
                      />
                    </div>
                    <div className="pt-2 pl-2 col-6">
                      <img
                        className="img-fluid"
                        src="https://ik.imagekit.io/bayc/assets/ape4.png"
                        aria-label="ape4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-12">
                <h3 className="fair-title">FAIR DISTRIBUTION</h3>
                <h4 className="ponzi">(BONDING CURVES ARE A PONZI)</h4>
              </div>
              <div className="mb-2 mb-lg-0 col-lg-7 col-12">
                <p className="common-p mb-lg-0">
                  There are no bonding curves here. Buying a Pharoah costs
                  0.08 ETH. There are no price tiers; PGM membership costs the
                  same for everyone.
                </p>
              </div>
              <div className="col-lg-4 col-12 offset-lg-1">
                <p className="note text-justify mb-0">
                  Note: Thirty Pharoahs are being withheld from the sale. These will
                  be used for giveaways, puzzle rewards—and for the creators'
                  PGM memberships.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="gray-line mb-5"></hr>
        <div className="mb-5 row">
          <div className="col">
            <div className="common-container">
              <div className="row">
                <div className="mb-3 col-lg-7 col-12">
                  <h2 className="common-title mb-3">THE SPECS</h2>
                  <p className="common-p">
                    Each Pharoah is unique and programmatically generated from
                    over 170 possible traits, including expression, headwear,
                    clothing, and more. All pharoahs are dope, but some are rarer
                    than others.
                    <br />
                    <br />
                    The pharoahs are stored as ERC-721 tokens on the Ethereum
                    blockchain and hosted on IPFS. (
                    <a className="link" href="#/provenance">
                      See Record and Proof.
                    </a>
                    ) Purchasing an pharoah costs 0.08 ETH.
                    <br />
                    <br />
                    To access members-only areas such as&nbsp;
                    <a className="link" href="#/bathroom">
                      THE BATHROOM
                    </a>
                    , members will need to be signed into their Metamask
                    Wallet.
                  </p>
                </div>
                <div className="my-auto col-lg-4 col-12 offset-lg-1">
                  <img
                    className="img-fluid w-100"
                    src="https://ik.imagekit.io/bayc/assets/mystery-ape.gif"
                    alt="mystery token"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="gray-line mb-5"></hr>
        <div className="mb-5 row">
          <div className="col">
            <div id="team" className="common-container">
              <div className="row">
                <div className="mb-3 col-lg-7 col-12">
                  <h2 className="common-title mb-3">THE TEAM</h2>
                  <p className="common-p">
                    PGM was created by four friends who set out to make some
                    dope art, test our skills, and try to build something
                    (ridiculous).
                  </p>
                  <p className="common-p">
                    <span className="bayc-color bold-text">SOMEONE.</span>{" "}
                    <span className="font-italic">
                      STARCRAFT OBSESSED. EATS SMURFS.
                    </span>
                  </p>
                  <p className="common-p">
                    <span className="bayc-color bold-text">SOMEONE ELSE.</span>{" "}
                    <span className="font-italic">REFORMED LEVERAGE ADDICT.</span>
                  </p>
                  <p className="common-p">
                    <span className="bayc-color bold-text">
                      A THIRD PERSON.
                    </span>{" "}
                    <span className="font-italic">
                      SPENT ALL THEIR MONEY ON FIRST PRESSES AND PET-NAT.
                    </span>
                  </p>
                  <p className="common-p">
                    <span className="bayc-color bold-text">NO SASS.</span>{" "}
                    <span className="font-italic">
                      {" "}
                      HERE FOR THE NFTS. NOT FOR THE SASS.
                    </span>
                  </p>
                </div>
                <div className="col-lg-4 col-12 offset-lg-1">
                  <div className="common-container">
                    <div className="row">
                      <div className="pb-2 pr-2 col-6">
                        <img
                          className="img-fluid"
                          src="https://ik.imagekit.io/bayc/assets/garga.png"
                          alt="garga"
                          aria-label="garga"
                        />
                      </div>
                      <div className="pb-2 pl-2 col-6">
                        <img
                          className="img-fluid"
                          src="https://ik.imagekit.io/bayc/assets/gordy.png"
                          alt="gordy"
                          aria-label="gordy"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="pt-2 pr-2 col-6">
                        <img
                          className="img-fluid"
                          src="https://ik.imagekit.io/bayc/assets/tomato.png"
                          alt="tomato"
                          aria-label="tomato"
                        />
                      </div>
                      <div className="pt-2 pl-2 col-6">
                        <img
                          className="img-fluid"
                          src="https://ik.imagekit.io/bayc/assets/sass.png"
                          aria-label="sass"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}