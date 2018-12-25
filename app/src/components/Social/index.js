import React from 'react';
import {render} from 'react-dom';
import './style.css';


function Social() {
return (

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

)
}

render(<Social /> , document.getElementById('footer'));
export default Social