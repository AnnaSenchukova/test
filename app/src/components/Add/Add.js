import React from 'react';
import {render} from 'react-dom';
import './style.css';

function Add() {
return (

                <section className="add">
                    <h2 className="add__title title">
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
  )
}

export default Add