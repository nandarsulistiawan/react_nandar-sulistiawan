import { Table, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://65224210f43b179384145703.mockapi.io/product/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteProduct = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirm) {
      axios
        .delete("https://65224210f43b179384145703.mockapi.io/product/" + id)
        .then((res) => {
          location.reload(res);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col lg="7">
          <h3 className="mt-3 text-center">List Product</h3>
          <div className="d-flex justify-content-end">
            <Link to="/createproduct" className="btn btn-success">
              Add Product
            </Link>
          </div>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Product Image</th>
                <th>Product Freshness</th>
                <th>Product Description</th>
                <th>Product Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((d, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{d.productName}</td>
                  <td>{d.productCategory}</td>
                  <td>
                    {d.productImage ? (
                      <img src={d.productImage} style={{ maxWidth: "100px" }} />
                    ) : (
                      "Tidak ada gambar"
                    )}{" "}
                  </td>
                  <td>{d.productFreshness}</td>
                  <td>{d.productDescription}</td>
                  <td>{d.productPrice}</td>
                  <td>
                    <Link
                      to={`/detailproduct/${d.id}`}
                      className="btn btn-info me-2"
                    >
                      View
                    </Link>

                    <Button
                      variant="danger"
                      onClick={() => handleDeleteProduct(d.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
