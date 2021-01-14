import React from "react";
import { Products } from "../data/products"

const Cardtp = (props) => {
    const { ClickItems, ClickPrice, chick } = props;
    const { productImage, productName, productCategory, productPrice } = chick;

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={this.state.products.productImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-name">{this.state.products.productName}</h5>
                <p className="card-categories">{this.state.products.productCategory}</p>
                <p className="card-price">{this.state.products.ProductPrice.toFixed(2)}</p>
                <button className="btn btn-success">
                    Ajouter
        </button>
            </div>
        </div>
    )



};

ClickPrice = () => {
    let productsPrice = 0;
    this.setState(productsPrice = this.state.products.productPrice.length + this.state.products.productPrice.length);

}
ClickItems = () => {
    let productsItems = 0;
    this.setState(productsItems = this.state.products.productCategory.length + 1);
}



export default Cardtp;