import React from 'react';
import {render} from 'react-dom';
import './style.css';


function Main() {
return (
<main className="main">
    <h1 className="main__title visually-hidden">
        Магазин SHOP 24
    </h1>
    <section className="basket">
        <h2 className="basket__title container">
            Ваша корзина
        </h2>
        <div className="basket__wrapper-table container">
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
            <tr className="products__item">
                <td className="products__cell products__image">
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
                </td>
                <td className="products__cell products__description">
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
                <td className="products__cell products__number">
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
                <td className="products__cell products__price">
                    <p className="products__price-value">
                        2 450 руб.
                    </p>
                </td>
                <td className="products__cell products__delete">
                    <button className="product__button button button--delete">
                        <span className="visually-hidden">
                            Удалить
                        </span>
                    </button>
                </td>
            </tr>
        </table>
        </div>
        <div className="basket__wrapper container">
            <form className="basket__promocode" action="#" method="post" name="promo">
                <p className="basket__promocode-slogan">
                    Есть промокод?
                </p>
                <input className="basket__promocode-field" type="password" name="promocode" placeholder="Введите промокод"/>
                <button className="basket__button button button--toapply" type="submit">
                    Применить
                </button>
            </form>
            <div className="basket__calculation">
                <table className="basket__calculation-table">
                    <tr className="basket__calculation-stroke">
                        <td className="basket__calculation-name">
                            Сумма заказа:
                        </td>
                        <td className="basket__calculation-sum">
                            9 800 руб.
                        </td>
                    </tr>
                    <tr className="basket__calculation-stroke">
                        <td className="basket__calculation-name basket__calculation-name--selection">
                            Промокод:
                        </td>
                        <td className="basket__calculation-sum basket__calculation-sum--selection">
                            -1 800 руб.
                        </td>
                    </tr>
                    <tr className="basket__calculation-stroke">
                        <td className="basket__calculation-name">
                            Всего:
                        </td>
                        <td className="basket__calculation-sum">
                            8 000 руб.
                        </td>
                    </tr>
                </table>
                <button className="basket__calculation-button button button--order">
                    Оформить заказ
                </button>
            </div>
        </div>
        <section className="add">
            <h2 className="add__title title container">
                Добавьте к вашему заказу
            </h2>
            <ul className="add__list container">
                <li className="add__item">
                    <a className="add__link">
                        <h3 className="add__caption">
                            Солнечные очки зеленого цвета в стиле ретро
                        </h3>
                        <img className="add__image" src={require("../../img/photo-catalog-bag.jpg")} width="276" height="276"
                             alt="Изображение товара"/>
                        <p className="add__price">
                            2 450 руб.
                        </p>
                    </a>
                </li>
                <li className="add__item">
                    <a className="add__link">
                        <h3 className="add__caption">
                            Шляпа
                        </h3>
                        <img className="add__image" src={require("../../img/photo-catalog-had.jpg")} width="276" height="276"
                             alt="Изображение товара"/>
                        <p className="add__price">
                            800 руб.
                        </p>
                    </a>
                </li>
                <li className="add__item">
                    <a className="add__link">
                        <h3 className="add__caption">
                            Платье-миди с расклешенной юбкой
                        </h3>
                        <img className="add__image" src={require("../../img/photo-catalog-socks.jpg")} width="276" height="276"
                             alt="Изображение товара"/>
                        <p className="add__price">
                            2 450 руб.
                        </p>
                    </a>
                </li>
                <li className="add__item">
                    <a className="add__link">
                        <h3 className="add__caption">
                            Платье-миди с расклешенной юбкой
                        </h3>
                        <img className="add__image" src={require("../../img/photo-catalog-dress.jpg")} width="276" height="276"
                             alt="Изображение товара"/>
                        <p className="add__price">
                            2 450 руб.
                        </p>
                    </a>
                </li>
            </ul>
        </section>
    </section>
</main>
)
}

render(<main/>, document.getElementById('main'));
export default Main