import React from 'react';
import {render} from 'react-dom';
import './style.css';


function Mailing() {
return (
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

)
}

render(<Mailing /> , document.getElementById('footer'));
export default Mailing