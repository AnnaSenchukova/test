import React from 'react';
import {render} from 'react-dom';
import Product from '../Product/ProductItem';
import cartDataList from '../../js/cartDataProviderTest';
import './style.css';

function Products(props) {
const productItem = cartDataList.map(cartData =>
<tr key = {cartData.id}><Product cartData = {cartData}/></tr>
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


export default Products