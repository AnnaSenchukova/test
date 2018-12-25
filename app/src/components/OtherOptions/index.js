import React from 'react';
import {render} from 'react-dom';
import './style.css';


function OtherOptions() {
return (
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
)
}

render(<OtherOptions />, document.getElementById('header'));
export default OtherOptions