import { useEffect } from "react";
import { Button, Form, Col, Row, InputGroup, Container } from "react-bootstrap";

const CreateAccount = () => {
  useEffect(() => {
    alert("Welcome");
  }, []);

  return (
    <>
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col lg="6">
            <Form className="form-product">
              <h4 className="mb-3">Create Account</h4>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Row>

              <Form.Label>Username</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="you@example.com" />
              </Form.Group>

              <Form.Group controlId="gender" className="mb-3">
                <Form.Label>Gender</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    id="gender-male"
                  />
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    id="gender-female"
                  />
                  <Form.Check
                    type="radio"
                    label="Other"
                    name="gender"
                    id="gender-other"
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Addres</Form.Label>
                <Form.Control type="text" placeholder="123 Main St" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Addres 2</Form.Label>
                <Form.Control type="text" placeholder="Apartemen or suite" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nationality</Form.Label>
                <Col md="5">
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Malaysia">Malaysia</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group controlId="languaeSpoken" className="mb-5">
                <Form.Label>Language Spoken</Form.Label>
                <div>
                  <Form.Check
                    type="checkbox"
                    label="Bahasa Indonesia"
                    name="languaeSpoken"
                    id="language-bahasa-indonesia"
                  />
                  <Form.Check
                    type="checkbox"
                    label="English"
                    name="languaeSpoken"
                    id="language-english"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Other"
                    name="languaeSpoken"
                    id="language-other"
                  />
                </div>
              </Form.Group>

              <Button variant="primary w-100 mb-3" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateAccount;
