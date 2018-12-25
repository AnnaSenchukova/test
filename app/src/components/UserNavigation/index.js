import React from 'react';
import {render} from 'react-dom';
import './style.css';


function UserNavigation() {
return (
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

)
}

render(<UserNavigation />, document.getElementById('header'));
export default UserNavigation