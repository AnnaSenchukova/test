import React from 'react';
import {render} from 'react-dom';
import Product from '../Product/Product';
import './style.css';

function Products() {
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
                <th className="products__caption">
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
            <Product />
        </table>
    )
}

export default Products