import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import bootstrapLogo from '../assets/bootstrap-logo.svg'
import '../createproduct.css'

const CreateProduct = () => {

  return (
    <div className="container-product">
    <Container className="mt-4">
    <div className="py-5 text-center">
  <img
    className="d-block mx-auto mb-4"
    src={bootstrapLogo}
    alt=""
    width={72}
    height={57}
  />
  <h2>Create Product</h2>
  <p className="lead">
    Below is an example form built entirely with Bootstrap’s form controls. Each
    required form group has a validation state that can be triggered by
    attempting to submit the form without completing it.
  </p>
</div>
     <Form className="form-product">
     <h4 className='mb-3'>Detail Product</h4>
        <Form.Group className="mb-3 col-6 " controlId="formGridProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Name" id="productName"
           />
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
    </Form>
    </Container>
    </div>
  )
}

export default CreateProduct
