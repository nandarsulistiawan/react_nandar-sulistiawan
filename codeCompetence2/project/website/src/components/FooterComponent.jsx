import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
function FooterComponent() {
  return (
    <div>
      <hr />
      <footer className="pt-4">
        <Container className="py-4 pt-md-5 px-4 px-md-3 ">
          <Row>
            <Col lg={3} mb={3}>
              <a
                href="#"
                className="d-inline-flex align-items-center mb-2 logo text-decoration-none"
              >
                CLOUDDESIGN
              </a>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  Bring Your Imagination to Reality with Graphic Design
                </li>
              </ul>
              <div className="py-4">
                <a href="#" className="text-decoration-none">
                  <div
                    className="d-inline-flex align-items-center justify-content-center icon-social-media rounded-circle align-middle"
                    style={{ width: "38px; height: 38px;" }}
                  >
                    <i>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </i>
                  </div>
                </a>
                <a
                  href="https://instagram.com/clouddesign.21?igshid=YTQwZjQ0NmI0OA=="
                  className="text-decoration-none"
                >
                  <div className="d-inline-flex align-items-center justify-content-center icon-social-media rounded-circle align-middle ms-3">
                    <i>
                      <FontAwesomeIcon icon={faInstagram} />
                    </i>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/nandar-sulistiawan-611886283/"
                  className="text-decoration-none"
                >
                  <div className="d-inline-flex align-items-center justify-content-center icon-social-media rounded-circle align-middle ms-3">
                    <i>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </i>
                  </div>
                </a>
              </div>
            </Col>
            <Col lg={{ offset: 3 }} mb={3}>
              <h5>Link</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#">Home</a>
                </li>
                <li className="mb-2">
                  <a href="#">About</a>
                </li>
                <li className="mb-2">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </Col>
            <Col mb={3}>
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#">UI/UX Design</a>
                </li>
                <li className="mb-2">
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </Col>
            <Col mb={3}>
              <h5>Help</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#">Customer Support</a>
                </li>
                <li className="mb-2">
                  <a href="#">Discussions</a>
                </li>
                <li className="mb-2">
                  <a href="#">Delevery Details</a>
                </li>
                <li className="mb-2">
                  <a href="#">Terms & Condition</a>
                </li>
                <li className="mb-2">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </Col>
            <div className="copyright">
              <hr />
              <p className="text-right pt-4">
                © 2023 Cloud. All Rights Reserved.
              </p>
            </div>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default FooterComponent;
