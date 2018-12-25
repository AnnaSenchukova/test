import React from 'react';
import {render} from 'react-dom';
import './style.css';


function Header() {
return (
<header className="header">
    <div className="header__wrapper">
        <nav className="navigation">
            <div className="navigation__wrapper container">
            <a className="navigation__item logo logo--header">
                <picture>
                <source media="(min-width: 768px)" srcset={require("../../img/logo-orange.png")}/>
                <img className="logo-image" src={require("../../img/logo-mobile.png")} alt="Логитип магазина SHOP24 New Look"/>
                </picture>
            </a>
            <form className="navigation__item search" action="#" method="post" name="search">
                <input className="search__input" type="search" name="search-field"
                       placeholder="Поиск по сайту" aria-label="Поле поиск по сайту"/>
            </form>
            <ul className="navigation__list user-navigation">
                <li className="user-navigation__item">
                    <a className="user-navigation__link user-navigation__link--authorization" href="#">
                        <p className="user-navigation__description visually-hidden">
                            Вход в личный кабинет:
                        </p>
                        <p className="user-navigation__description">
                            Анастасия
                        </p>
                    </a>
                </li>
                <li className="user-navigation__item">
                    <a className="user-navigation__link user-navigation__link--basket" href="#">
                        <p className="user-navigation__description">
                            В корзине:
                        </p>
                        <p className="user-navigation__description">
                            4 товара
                        </p>
                    </a>
                </li>
                <li className="user-navigation__item user-navigation__item--hidden">
                    <a className="user-navigation__link user-navigation__link--etc" href="#navigation">
                        <span className="visually-hidden">
                            Далее
                        </span>
                    </a>
                </li>
            </ul>
            </div>
            <div className="navigation__catalog catalog-navigation">
                <h3 className="catalog-navigation__title">
                    Каталог
                </h3>
                <ul className="navigation__list catalog-navigation__list container">
                    <li className="catalog-navigation__item">
                        <a className="catalog-navigation__link catalog-navigation__link--active" href="#">
                            Одежда и аксессуары
                        </a>
                        <ul className="catalog-navigation__submenu submenu submenu--header" aria-label="Подраздел меню одежда и аксессуары">
                            <li className="submenu__item">
                                <a className="submenu__link submenu__link--active" href="#">
                                    Женская одежда
                                </a>
                            </li>
                            <li className="submenu__item">
                                <a className="submenu__link" href="#">
                                    Мужская одежда
                                </a>
                            </li>
                            <li className="submenu__item">
                                <a className="submenu__link" href="#">
                                    Аксессуары
                                </a>
                            </li>
                        </ul>
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
        </nav>
    </div>
    <div className="header__wrapper other-options">
        <div className="other-options__telephone">
            <a className="other-options__number" href="tel:89005007555">
                8 (800) 500-75-55
                <span className="other-options__descriptions">
          Бесплатный звонок по России
        </span>
            </a>

        </div>
        <div className="other-options__media">
            <a className="other-options__link other-options__link--blog" href="#">
                Звездный блог
            </a>
            <a className="other-options__link other-options__link--youtube" href="#">
                Смотрите нас на YouTube
            </a>
            <a className="other-options__link other-options__link--live" href="#">
                Смотрите наш прямой эфир
            </a>
        </div>
    </div>
</header>
)
}

render(<header/>, document.getElementById('header'));
export default Header