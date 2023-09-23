import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import bootstrapLogo from "../assets/bootstrap-logo.svg";
import "../createproduct.css";

const TittleComponent = () => {
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "indonesian" : "english");
  };

  return (
    <>
      <Container>
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src={bootstrapLogo}
            alt="bootstrap-logo"
            width={72}
            height={57}
          />
          <h2>{language === "english" ? "Create Product" : "Buat Produk"}</h2>
          <Row className="justify-content-center">
            <Col lg="9">
              <p className="lead">
                {language === "english"
                  ? "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
                  : "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya."}
              </p>
            </Col>
          </Row>
          <Button variant="primary" onClick={toggleLanguage}>
            {language === "english"
              ? "Switch to Indonesian"
              : "Beralih ke bahasa Inggris"}
          </Button>
        </div>
      </Container>
    </>
  );
};

export default TittleComponent;
