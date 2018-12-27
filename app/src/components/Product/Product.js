import React from 'react';
import {render} from 'react-dom';
import './style.css';

function Product() {
return (
          <tr className="products__item">
                <td className="products__cell products__cell--image">
                    <img className="product__image-catalog" src={require("../../img/photo-catalog-dress.jpg")} width="178" height="178"
                         alt="Изображение товара"/>
                    <div className="products__wrapper products__wrapper--counter">
                        <button className="products__button button button--product button--min" type="button">
                            <span className="visually-hidden">
                                Убрать
                            </span>
                        </button>
                        <input className="product__counter" type="number" value="1" min="1"/>
                        <button className="products__button button button--product button--max" type="button">
                            <span className="visually-hidden">
                                Добавить
                            </span>
                        </button>
                    </div>
                             <button className="product__button button button--delete">
                                                                <span className="visually-hidden">
                                                                    Удалить
                                                                </span>
                                                            </button>
                </td>
                <td className="products__cell products__cell--description">
                    <h3 className="products__title">
                        Платье-миди с расклешенной юбкой
                    </h3>
                    <p className="product__article">
                        Код:
                        <span className="products__article-value">
                            82039-11
                        </span>
                    </p>
                    <p className="product__option">
                        Размер:
                        <span className="products__option-value">
                            44
                        </span>
                    </p>
                    <p className="product__option">
                        Цвет:
                        <span className="products__option-value">
                            синий
                        </span>
                    </p>
                    <p className="products__price-value">
                    2 450 руб.
                    </p>
                </td>
                <td className="products__cell products__cell--number">
                    <div className="products__wrapper">
                        <button className="products__button button button--product button--min" type="button">
                            <span className="visually-hidden">
                                Убрать
                            </span>
                        </button>
                        <input className="product__counter" type="number" value="1" min="1"/>
                        <button className="products__button button button--product button--max" type="button">
                            <span className="visually-hidden">
                                Добавить
                            </span>
                        </button>
                    </div>
                </td>
                <td className="products__cell products__cell--price">
                    <p className="products__price-value">
                        2 450 руб.
                    </p>
                </td>
                <td className="products__cell products__cell--delete">
                    <button className="product__button button button--delete">
                        <span className="visually-hidden">
                            Удалить
                        </span>
                    </button>
                </td>
            </tr>
    )
}

export default Product