import React from 'react';
import {render} from 'react-dom';
import './style.css';


function Copyright() {
return (
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
)
}

render(<Copyright /> , document.getElementById('footer'));
export default Copyright