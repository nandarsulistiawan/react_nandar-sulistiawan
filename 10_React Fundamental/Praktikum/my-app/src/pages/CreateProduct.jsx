import { useState } from "react";
import TittleComponent from "../components/TittleComponent";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "../CSS/CreateProduct.css";

const CreateProduct = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [isProductNameValid, setIsProductNameValid] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const navigate = useNavigate();

  const handleProductNameChange = (e) => {
    const newName = e.target.value;
    const regex = /^[a-zA-Z\s]{1,10}$/;
    if (regex.test(newName)) {
      setProductName(newName);
      setIsProductNameValid("");
    } else {
      setIsProductNameValid("Product Name must not exceed 10 characters.");
    }
  };
  const handleProductCategoryChange = (e) => {
    const newCategory = e.target.value;
    const regex = /^[a-zA-Z\s]+$/;
    if (regex.test(newCategory)) {
      setProductCategory(newCategory);
    }
  };

  const handleProductFreshnessChange = (e) => {
    setProductFreshness(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    const newPrice = e.target.value;
    const regex = /^\d+(\.\d{1,2})?$/;
    if (regex.test(newPrice)) {
      setProductPrice(newPrice);
    }
  };

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    const regex = /^[a-zA-Z\s]{1,500}$/;
    if (regex.test(newDescription)) {
      setProductDescription(newDescription);
    }
  };

  const handleProductImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };
  // Handle Add Product
  const handleAddProduct = () => {
    const newProduct = {
      id: uuidv4(),
      productName,
      productCategory,
      productFreshness,
      productPrice,
      productDescription,
      productImage,
    };
    setProducts([...products, newProduct]);

    // Axios Post Data
    axios
      .post("https://65224210f43b179384145703.mockapi.io/product/", newProduct)
      .then((res) => {
        console.log(res);
        navigate("/listproduct");
      })
      .catch((err) => console.log(err));
  };

  // Hasilkan nomor acak
  const handleButtonClick = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    console.log("Random Number:", randomNumber);
  };

  return (
    <>
      <TittleComponent />
      <Container>
        <Row className="justify-content-center">
          <Col lg="6">
            <Form className="form-product">
              <h4 className="mb-3">Detail Product</h4>
              <Form.Group className="mb-3" controlId="productName">
                <Form.Label>Product Name</Form.Label>
                <Col md="6">
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    value={productName}
                    onChange={handleProductNameChange}
                  />
                  {isProductNameValid && (
                    <span className="text-danger">{isProductNameValid}</span>
                  )}
                </Col>
              </Form.Group>

              <Form.Group className="mb-3" controlId="productCategory">
                <Form.Label>Product Category</Form.Label>
                <Col md="5">
                  <Form.Control
                    as="select"
                    value={productCategory}
                    onChange={handleProductCategoryChange}
                  >
                    <option value="">Select category</option>
                    <option value="T Shirt">T Shirt</option>
                    <option value="Pants">Pants</option>
                    <option value="Shoes">Shoes</option>
                  </Form.Control>
                </Col>
              </Form.Group>

              <Form.Group controlId="productImage" className="mb-3">
                <Col md="4">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleProductImageChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group controlId="productFreshness" className="mb-3">
                <Form.Label>Product Freshness</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    label="Brand New"
                    value="Brand New"
                    checked={productFreshness === "Brand New"}
                    onChange={handleProductFreshnessChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Second Hand"
                    value="Second Hand"
                    checked={productFreshness === "Second Hand"}
                    onChange={handleProductFreshnessChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Refurbished"
                    value="Refurbished"
                    checked={productFreshness === "Refurbished"}
                    onChange={handleProductFreshnessChange}
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="productDescription" className="mb-3">
                <Form.Label>Additional Description</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  value={productDescription}
                  onChange={handleDescriptionChange}
                />
              </Form.Group>

              <Form.Group controlId="productPrice" className="mb-5">
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter product price"
                  value={productPrice}
                  onChange={handleProductPriceChange}
                />
              </Form.Group>

              <Button variant="primary w-100 mb-3 " onClick={handleAddProduct}>
                Submit
              </Button>
              <Link to="/listproduct" className="btn btn-primary w-100 mb-3">
                Back
              </Link>

              <Button variant="primary w-100" onClick={handleButtonClick}>
                Generate Random Number
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateProduct;
