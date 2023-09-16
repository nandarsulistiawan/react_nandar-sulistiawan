import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../createproduct.css'

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [isProductNameValid, setIsProductNameValid] = useState(true);

  const handleProductNameChange = (event) => {
    const value = event.target.value;
    setProductName(value);

    // Validasi productName (tidak lebih dari 10 karakter)
    setIsProductNameValid(value.length <= 10);
  };

  // Hasilkan nomor acak
  const handleButtonClick = () => {
    const randomNumber = Math.floor(Math.random() * 1000); 
    console.log('Random Number:', randomNumber);
  };

  return (
    <div className="container-product">
    <Container className="mt-4">
     <Form className="form-product">
     <h4 className='mb-3'>Detail Product</h4>
        <Form.Group className="mb-3 col-6 " controlId="formGridProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Name" id="productName"
          value={productName}
          onChange={handleProductNameChange}
           />
           {!isProductNameValid && <span style={{ color: 'red' }}>Product Name must not exceed 10 characters.</span>}
        </Form.Group>

        <Form.Group className='mb-3 col-5' controlId="formGridState">
          <Form.Label>Product Category</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option value="T Shirt">T Shirt</option>
            <option value="Pants">Pants</option>
            <option value="Shoes">Shoes</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3 col-4">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Group controlId="productFreshness" className='mb-3'>
            <Form.Label>Product Freshness</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Brand New"
                name="productFreshness"
                id="freshness-brand-new"
              />
              <Form.Check
                type="radio"
                label="Second Hand"
                name="freshness"
                id="freshness-second-hand"
              />
              <Form.Check
                type="radio"
                label="Refurbished"
                name="freshness"
                id="freshness-refurbished"
              />
            </div>
          </Form.Group>

          <Form.Group controlId="productDescription" className='mb-3'>
            <Form.Label>Additional Description</Form.Label>
            <Form.Control
              as="textarea"
              style={{ height: '100px' }}
            />
          </Form.Group>

          <Form.Group controlId="productPrice" className='mb-5'>
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
            />
          </Form.Group>

      <Button variant="primary w-100 mb-3" type="submit">
        Submit
      </Button>
      <Button variant='primary w-100' onClick={handleButtonClick}>Generate Random Number</Button>
    </Form>
    </Container>
    </div>
  )
}

export default CreateProduct
