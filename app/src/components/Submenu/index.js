import React from 'react';
import {render} from 'react-dom';
import './style.css';


function Submenu() {
return (
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
)
}

render(<Submenu />, document.getElementById('header'));
export default Submenu