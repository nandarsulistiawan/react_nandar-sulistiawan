import "../CSS/LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faSkype,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import heroImg from "../assets/hero-img.png";

const LandingPage = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="text">
            <h1>Better Solutions For Your Business</h1>
            <h2>
              We are team of talanted designers making websites with Bootstrap
            </h2>
            <div className="button">
              <a href="PagecreateAccount.html" className="button1">
                Get Started
              </a>
              <a href className="button2">
                Watch Video
              </a>
            </div>
          </div>
          <div className="gambar">
            <div className="hero-img">
              <img src={heroImg} alt="h" />
            </div>
          </div>
        </div>
      </section>
      <section id="subscribe">
        <div>
          <h4>Join Our Newsletter</h4>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <div>
            <input type="text" />
            <label>Subscribe</label>
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="container">
          <div className="alamat">
            <h3>Arsha</h3>
            <p>
              A108 Adam Street <br />
              New York, NY 535022
              <br />
              United States <br />
              <br />
              <strong>Phone:</strong> +1 5589 55488 55
              <br />
              <strong>Email:</strong> info@example.com
              <br />
            </p>
          </div>
          <div className="link">
            <h4>Useful Links</h4>
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">Services</a>
            </p>
            <p>
              <a href="#">Terms of services</a>
            </p>
            <p>
              <a href="#">Privacy policy</a>
            </p>
          </div>
          <div className="jasa">
            <h4>Our Services</h4>
            <p>
              <a href="#">Web Design</a>
            </p>
            <p>
              <a href="#">Web Development</a>
            </p>
            <p>
              <a href="#">Product Management</a>
            </p>
            <p>
              <a href="#">Marketing</a>
            </p>
            <p>
              <a href="#">Graphic Design</a>
            </p>
          </div>
          <div className="sosial-media">
            <h4>Our Social Networks</h4>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <p>
              <i>
                <FontAwesomeIcon icon={faXTwitter} />
              </i>
              <i>
                <FontAwesomeIcon icon={faFacebookF} />
              </i>
              <i>
                <FontAwesomeIcon icon={faInstagram} />
              </i>
              <i>
                <FontAwesomeIcon icon={faSkype} />
              </i>
              <i>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </i>
            </p>
          </div>
        </div>
      </section>
      <section className="copyright">
        <div className="container">
          <p>
            © Copyright <span>Arsha</span>. All Rights Reserved
          </p>
          <p>
            Designed by <span>BootstrapMade</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
