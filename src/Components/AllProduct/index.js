import { Component } from "react";
import Cookies from "js-cookie";

import ProductCard from "../ProductCard";
import "./index.css";

class AllProductsSection extends Component {
  state = {
    productsList: [],
    error: null,
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const apiUrl = "https://apis.ccbp.in/products";
      const jwtToken = Cookies.get("jwt_token");

      if (!jwtToken) {
        console.error("JWT token not set");
        this.setState({ error: "JWT token not set" });
        return;
      }

      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      };

      const response = await fetch(apiUrl, options);

      if (!response.ok) {
        console.error("API request failed", response.status);
        this.setState({ error: `API request failed with status ${response.status}` });
        return;
      }

      const fetchedData = await response.json();
      console.log("Fetched data:", fetchedData);

      if (!fetchedData.products) {
        console.error("No products in API response");
        this.setState({ error: "No products in API response" });
        return;
      }

      const updatedData = fetchedData.products.map((product) => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }));

      console.log("Updated data:", updatedData);

      this.setState({
        productsList: updatedData,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      this.setState({ error: "Error fetching products" });
    }
  };

  renderProductsList = () => {
    const { productsList, error } = this.state;

    if (error) {
      return <p style={{ color: "red" }}>{error}</p>;
    }

    if (productsList.length === 0) {
      return <p>No products found</p>;
    }

    return (
      <div>
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {productsList.map((product) => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    );
  };

  render() {
    return <>{this.renderProductsList()}</>;
  }
}

export default AllProductsSection;