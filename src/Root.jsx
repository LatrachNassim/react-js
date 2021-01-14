import React, { Component } from "react";
import { products } from "./data/products";
import Cardtp from "./components/cardtp3"
import Panier from "./components/panier"
import SearchForm from "./components/search-form"
import ProductList from "./components/productList"

class Root extends Component {
  state = {
    products: [],
  };
  render() {
    return (
      <div>
        <SearchForm />

        <Panier />

        <ProductList />

        <Cardtp />
      </div>
    );

  }
}

export default Root;
