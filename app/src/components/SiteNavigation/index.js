import React from 'react';
import {render} from 'react-dom';
import './style.css';


function SiteNavigation() {
return (

        <ul className="footer__navigation site-navigation">
            <li className="site-navigation__item">
                <a className="site-navigation__link" href="#">
                    Каталог товаров
                </a>
                <ul className="site-navigation__submenu submenu submenu--footer">
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Одежда и аксессуары
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Обувь
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Украшения
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Красота и здоровье
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Товары для дома, дачи и отдыха
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Товары для кухни
                        </a>
                    </li>
                </ul>
            </li>
            <li className="site-navigation__item">
                <a className="site-navigation__link" href="#">
                    Заказ
                </a>
                <ul className="site-navigation__submenu submenu submenu--footer">
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Оплата и доставка
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Возврат
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Помощь
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Благотворительный Фонд Константина Хабенского
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Гарантия на дополнительное обслуживание товара
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Пользовательское соглашение
                        </a>
                    </li>
                </ul>
            </li>
            <li className="site-navigation__item">
                <a className="site-navigation__link" href="#">
                    Shop24
                </a>
                <ul className="site-navigation__submenu submenu submenu--footer">
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Смотреть прямой эфир
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Расписание передач
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Акции
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Личный кабинет
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Поиск и карта сайта
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Карта брендов
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Обратная связь
                        </a>
                    </li>
                </ul>
            </li>
            <li className="site-navigation__item">
                <a className="site-navigation__link" href="#">
                    Информация
                </a>
                <ul className="site-navigation__submenu submenu submenu--footer">
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            О канале
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Сотрудничество
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Покупайте с нами!
                        </a>
                    </li>
                    <li className="submenu__item submenu__item--footer">
                        <a className="submenu__link submenu__link--footer" href="#">
                            Контакты
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
)
}

render(<SiteNavigation /> , document.getElementById('footer'));
export default SiteNavigation