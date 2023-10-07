import { Col, Container, Row } from "react-bootstrap";
import Image from "../assets/about.jpg";

const AboutComponent = () => {
  return (
    <div>
      <section id="about">
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={6}>
              <div className="text-about">
                <h1 className="title-about mb-3">ABOUT ME</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  praesentium accusantium, iusto quas quibusdam, fugiat quaerat
                  eos vel ab pariatur libero beatae ratione quo, hic saepe?
                  Praesentium laboriosam porro iure.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <img src={Image} alt="AboutImage" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutComponent;
