import React, {Component} from 'react';
import {render} from 'react-dom';
import cartDataList from '../../js/cartDataProviderTest'
import './style.css';

class Product extends Component {


render() {
const {cartData} = this.props
return (
    <tr className="products__item">
        <td className="products__cell products__cell--image">
            <img className="product__image-catalog" src={cartData.image}/*src={this.getImage(cartData.image)}*/ width="178" height="178"
                 alt="Изображение товара"/>
            <div className="products__wrapper products__wrapper--counter">
                <button onClick={deleteClick} className="products__button button button--product button--min" type="button">
                    <span className="visually-hidden">
                        Убрать
                    </span>
                </button>
                <input className="product__counter" type="number" value={cartData.quantity} min="1"/>
                <button onClick={addClick} className="products__button button button--product button--max" type="button">
                    <span className="visually-hidden">
                        Добавить
                    </span>
                </button>
            </div>
            <button onClick={this.cleanClick} className="product__button button button--delete">
                <span className="visually-hidden">
                    Удалить
                </span>
            </button>
        </td>
        <td className="products__cell products__cell--description">
            <h3 className="products__title">
                {cartData.title}
            </h3>
            <p className="product__article">
                Код:
                <span className="products__article-value">
                    {cartData.id}
                </span>
            </p>
            <p className="product__option">
                Размер:
                <span className="products__option-value">
                    {cartData.size}
                </span>
            </p>
            <p className="product__option">
                Цвет:
                <span className="products__option-value">
                    {cartData.color}
                </span>
            </p>
            <p className="products__price">
                <span className="products__price-value">
                    {cartData.price}
                </span>
                руб.
            </p>
        </td>
        <td className="products__cell products__cell--number">
            <div className="products__wrapper">
                <button className="products__button button button--product button--min" type="button">
                    <span className="visually-hidden">
                        Убрать
                    </span>
                </button>
                <input className="product__counter" type="number" value={cartData.quantity} min="1"/>
                <button className="products__button button button--product button--max" type="button">
                    <span className="visually-hidden">
                        Добавить
                    </span>
                </button>
            </div>
        </td>
        <td className="products__cell products__cell--price">
            <p className="products__price">
                <span className="products__price-value">
                    {cartData.price}
                </span>
                руб.
            </p>
        </td>
        <td className="products__cell products__cell--delete">
            <button onClick={this.cleanClick} className="product__button button button--delete">
                <span className="visually-hidden">
                    Удалить
                </span>
            </button>
        </td>
    </tr>
    )
}

cleanClick = () => {
console.log('click');
}

}



function addClick() {
console.log('click');

}

function deleteClick() {
console.log('click');
}
export default Product