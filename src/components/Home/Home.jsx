import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate(); // to navigate from one poage to another without relaoding

  const handler = () => {
    navigate("/about");
  };

  const getData = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.get("https://localhost:7063/api/Product", {
        headers: { ApiKey: "EcommApi" },
      });
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.log("Error occured at Home Page", error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button className="BtnHome" onClick={getData}>
        Get Product data
      </button>
      <br />
      <button className="text-blue-500" onClick={handler}>
        Move to About Page
      </button>
      {product.length > 0 ? (
        <table>
          <thead>
            <th>ID</th>
            <th>Product Name</th>
            <th> Price</th>
          </thead>
          <tbody>
            {product.map((prd) => (
              <tr key={prd.id}>
                <td>{prd.id}</td>
                <td>{prd.name}</td>
                <td>{prd.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p> No data found</p>
      )}
    </div>
  );
}
