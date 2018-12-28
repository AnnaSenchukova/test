import React, {Component} from 'react';
import {render} from 'react-dom';
import Product from '../Product/ProductItem';
import cartDataList from '../../js/cartDataProviderTest';
import './style.css';

class Products extends Component {

state = {
    cartDataList: []
}

closeClick = chosenId => this.setState({
    cartDataList: this.state.cartDataList.filter(( cartData, id ) => id !== chosenId)
  });


render() {
const productItem = cartDataList.map(cartData =>
<Product
key = {cartData.id}
cartData = {cartData}
/>
)

return (
        <table className="basket__list products">
            <thead className="products__list-header">
            <tr className="products__header">
                <th className="products__caption">
                    Товар
                </th>
                <th className="products__caption">
                    Описание
                </th>
                <th className="products__caption products__caption--center">
                    Количество
                </th>
                <th className="products__caption products__caption--center">
                    Цена
                </th>
                <th className="products__caption products__caption--center">
                    Удалить
                </th>
            </tr>
            </thead>
            {productItem}
        </table>
    )
}



}


export default Products