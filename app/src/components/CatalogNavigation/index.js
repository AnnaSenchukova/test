import React from 'react';
import {render} from 'react-dom';
import Submenu from '../Submenu/index'
import './style.css';


function CatalogNavigation() {
return (
            <div className="navigation__catalog catalog-navigation">
                <h3 className="catalog-navigation__title">
                    Каталог
                </h3>
                <ul className="navigation__list catalog-navigation__list container">
                    <li className="catalog-navigation__item">
                        <a className="catalog-navigation__link catalog-navigation__link--active" href="#">
                            Одежда и аксессуары
                        </a>
                        <Submenu />
                    </li>
                    <li className="catalog-navigation__item">
                        <a className="catalog-navigation__link" href="#">
                            Обувь
                        </a>
                    </li>
                    <li className="catalog-navigation__item">
                        <a className="catalog-navigation__link" href="#">
                            Украшения
                        </a>
                    </li>
                    <li className="catalog-navigation__item">
                        <a className="catalog-navigation__link" href="#">
                            Красота и здоровье
                        </a>
                    </li>
                    <li className="catalog-navigation__item">
                        <a className="catalog-navigation__link" href="#">
                            Товары для дома
                        </a>
                    </li>
                    <li className="catalog-navigation__item">
                        <a className="catalog-navigation__link" href="#">
                            Товары для кухни
                        </a>
                    </li>
                </ul>
            </div>
)
}

render(<CatalogNavigation/>, document.getElementById('header'));
export default CatalogNavigation