import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const DetailProduct = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  // axios get data json server
  useEffect(() => {
    axios
      .get("http://localhost:3000/product/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>Product Detail</h1>

      <div>
        <p>Product Name: {data.productName}</p>
        <p>Product Category: {data.productCategory}</p>
        <p>
          Product Image :{" "}
          {data.productImage ? (
            <img src={data.productImage} style={{ maxWidth: "100px" }} />
          ) : (
            "No Image Product"
          )}{" "}
        </p>
        <p>Product Freshness: {data.productFreshness}</p>
        <p>Product Description: {data.productDescription}</p>
        <p>Product Price: {data.productPrice}</p>

        <Link to="/listproduct" className="btn btn-primary me-2">
          Back
        </Link>
      </div>
    </div>
  );
};

export default DetailProduct;
