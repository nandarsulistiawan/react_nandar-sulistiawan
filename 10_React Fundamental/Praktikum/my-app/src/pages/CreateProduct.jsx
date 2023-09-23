import { useState } from "react";
import TittleComponent from "../components/TittleComponent";
import {
  Button,
  Form,
  Container,
  Table,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "../createproduct.css";

const CreateProduct = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [isProductNameValid, setIsProductNameValid] = useState(true);
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState("");

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setProductName(value);
    }
    setIsProductNameValid(value.length <= 10);
  };

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  const handleProductFreshnessChange = (e) => {
    setProductFreshness(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: uuidv4(),
      productName,
      productCategory,
      productFreshness,
      productPrice,
    };
    setProducts([...products, newProduct]);
    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
  };

  const handleDeleteProduct = (productId) => {
    setIsModalOpen(true);
    setDeleteProductId(productId);
  };

  const handleConfirmDelete = () => {
    const updatedProducts = products.filter(
      (product) => product.id !== deleteProductId
    );
    setProducts(updatedProducts);
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setDeleteProductId("");
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
                    placeholder="Enter Product Name"
                    value={productName}
                    onChange={handleProductNameChange}
                  />
                  {!isProductNameValid && (
                    <span style={{ color: "red" }}>
                      Product Name must not exceed 10 characters.
                    </span>
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
                    <option value="">Select Category</option>
                    <option value="T Shirt">T Shirt</option>
                    <option value="Pants">Pants</option>
                    <option value="Shoes">Shoes</option>
                  </Form.Control>
                </Col>
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Col md="4">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control type="file" />
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
                <Form.Control as="textarea" style={{ height: "100px" }} />
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

              <Button variant="primary w-100 mb-3" onClick={handleAddProduct}>
                Submit
              </Button>
              <Button variant="primary w-100" onClick={handleButtonClick}>
                Generate Random Number
              </Button>
            </Form>
            <h3 className="mt-3 text-center">List Product</h3>
            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Product Name</th>
                  <th>Product Category</th>
                  <th>Product Freshness</th>
                  <th>Product Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.productName}</td>
                    <td>{product.productCategory}</td>
                    <td>{product.productFreshness}</td>
                    <td>{product.productPrice}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Modal show={isModalOpen} onHide={handleCancelDelete}>
              <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete this product?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCancelDelete}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={handleConfirmDelete}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateProduct;
