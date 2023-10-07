import { Col, Container, Row, Button } from "react-bootstrap";
import Hero from "../assets/hero.png";

const HeroComponent = () => {
  return (
    <>
      <section id="hero">
        <Container>
          <Row>
            <Col md={6} className="text-hero">
              <div className="text">
                Bring Your Imagination to Reality with Graphic Design
              </div>
              <div className="button">
                <Button variant="primary">Learn More</Button>
              </div>
            </Col>
            <Col md={6} className="gambar">
              <img src={Hero} alt="" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroComponent;
