import Logo from '../assets/logo.png';

export default function Index() {
  return (
    <div className="common-container">
      <div className="container">
        <div className="mb-5 mb-lg-0 row">
          <div className="col-lg-4 col-12 offset-lg-4">

            <img
              className="img-fluid d-block mx-auto custom-logo pt-4"
              src={Logo}
              alt="pgm header logo"
              width="300px"
              height="300px"
            />
          </div>
          {/* <div className="d-none d-lg-flex justify-content-end social-icons col-lg-4">
            <a href="https://www.youtube.com/watch?v=Yqga_WgX58k">
              <i className="fa fa-youtube-play social-icon pr-lg-0"></i>
            </a>
            <a href="https://www.instagram.com/boredapeyachtclub">
              <i className="fa fa-instagram social-icon pr-lg-0"></i>
            </a>
            <a href="https://discord.gg/3P5K3dzgdB">
              <i className="fa fa-discord-alt social-icon pr-lg-0"></i>
            </a>
            <a href="https://twitter.com/BoredApeYC">
              <i className="fa fa-twitter social-icon pr-lg-0"></i>
            </a>
          </div> */}
          <div className="px-0 col-12">
            <div className="mb-4 mb-lg-5 container">
              <div className="row">
                <div className="px-0 col-12">
                  {/* <video className="mx-auto w-100" autoplay="" loop="" id="myVideo">
                    <source
                      src="https://ik.imagekit.io/bayc/assets/club-landing.mp4"
                      type="video/mp4"
                    />
                  </video> */}
                </div>
              </div>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="welcome pt-lg-4 row">
                <h1 className="common-title mb-3 text-center">
                  WELCOME TO
                  <br />
                  PGM
                </h1>
                <button className="bayc-button mb-4 w-100" type="button" onClick={() => window.location.href = '/home'}>
                  ENTER
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
