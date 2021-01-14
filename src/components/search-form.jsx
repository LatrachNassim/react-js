import React, { Component } from 'react';


class SeachForm extends Component {
    state = {
        products: [],
    };
    render() {
        return (

            <form className="navbar navbar-dark bg-primary">
                <div className="form-search">
                    <label>Super</label>
                    <input
                        name="Search"
                        type="text"
                        value={this.state.product.productCategory}
                    />
                </div>
            </form>
        );
    }
}
export default SeachForm;