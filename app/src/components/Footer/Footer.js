import React from 'react';
import {render} from 'react-dom';
import './style.css';


function Footer() {
return (
<footer className="footer" id="navigation">
    <div className="footer__wrapper mailing">
        <div className="mailing__wrapper container">
        <b className="mailing__slogan">
            Подпишитесь на наши рассылки
        </b>
            <b className="mailing__slogan mailing__slogan--hidden">
            и узнавайте первыми об акциях и распродажах
        </b>
        <form className="mailing__form" action="#" method="post" name="search">
            <input className="mailing__field" type="email" name="mail" placeholder="Введите Ваш e-mail"/>
            <button className="mailing__button button button--subscribe" type="submit">
                Подписаться
            </button>
        </form>
        </div>
    </div>

    <div className="footer__wrapper social container">
        <h3 className="social__title">
            SHOP24 в социальных сетях:
        </h3>
        <ul className="social__list">
            <li className="social__item">
                <a className="social__link social__link--vk" href="https://www.vk.com">
            <span className="visually-hidden">
              Вконтакте
            </span>
                </a>
            </li>
            <li className="social__item">
                <a className="social__link social__link--fb" href="https://www.facebook.com">
            <span className="visually-hidden">
              Facebook
            </span>
                </a>
            </li>
            <li className="social__item">
                <a className="social__link social__link--class" href="https://www.facebook.com">
            <span className="visually-hidden">
              Одноклассники
            </span>
                </a>
            </li>
            <li className="social__item">
                <a className="social__link social__link--pinterest" href="https://in.pinterest.com/">
            <span className="visually-hidden">
              Pinterest
            </span>
                </a>
            </li>
            <li className="social__item">
                <a className="social__link social__link--pinme" href="https://www.pinme.ru/">
            <span className="visually-hidden">
              Pin me
            </span>
                </a>
            </li>
            <li className="social__item">
                <a className="social__link social__link--instagram" href="https://www.instagram.com">
            <span className="visually-hidden">
              Instagram
            </span>
                </a>
            </li>
            <li className="social__item">
                <a className="social__link social__link--youtube" href="https://www.youtube.com">
            <span className="visually-hidden">
              YouTube
            </span>
                </a>
            </li>
        </ul>
    </div>
    <div className="footer__wrapper">
        <a className="footer__logo logo logo--footer" href="#">
            <img className="logo__image" src={require("../../img/logo-grey.png")} width="100" height="56" alt="Логотип SHOP 24"/>
        </a>
        <div className="footer__telephone telephone">
            <a className="telephone__number" href="tel:89005007555">
                8 (800) 500-75-55
                <sup className="telephone__star">*</sup>
            </a>
            <span className="telephone__descriptions">
                 <sup className="telephone__star">*</sup>
          Бесплатный звонок по России
        </span>
            <a className="telephone__number" href="tel:84957339603">
                8 (495) 733-96-03
            </a>
        </div>
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
    </div>
    <div className="footer__wrapper copyright">
        <p className="copyright__description">
            Copyright ©&nbsp; Товар ООО «Стиль и Мода», 2014-2016. Все права защищены.
        </p>
        <p className="copyright__description">
            При использовании материалов сайта ссылка на www.shop24.com обязательна.
        </p>
        <p className="copyright__description">
            115193, Москва, ул. Кожуховская 5-я, д. 9, помещение VII
        </p>
        <p className="copyright__description">
            Телефон 8 800 500-75-55
        </p>
    </div>
</footer>
)
}

render(<footer/> , document.getElementById('footer'));
export default Footer