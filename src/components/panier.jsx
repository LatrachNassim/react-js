import React, { Component } from 'react';
import Cardtp3 from "./cardtp3";

class Panier extends Components {
    state = {
        products: [],
    };
    render() {
        return (
            <div>
                <h1>
                    Panier
            </h1>
                <p onClick={this.ClickItems()}>
                    Nombre d'items
            </p>

                <p onClick={this.ClickPrice()}>
                    total
            </p>
            </div>
        );
    }
}

export default Panier;