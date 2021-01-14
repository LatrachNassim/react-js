import React, { Component } from 'react';
import { Products } from "../data/products"

class ProductList extends Component {
    state = {
        products: [],
    };

    render() {
        return (
            <div>
                <ul>
                    <li>Products.slice(0, 5).map({this.state.products.productName}, index);</li>
                </ul>

                if(index !== 2) {
                }else{

                    index = 'active'
                }
                <button className="btn btn-secondary" onClick={addPrevious} >Previous</button>
                <button className="btn btn-secondary" onClick={addNext} >Next</button>
            </div>
        )
    }
    addPrevious = () => {
        { this.state.products.productName } - 1;
    }

    addNext = () => {
        { this.state.products.productName } + 1;
    }
}
export default ProductList;