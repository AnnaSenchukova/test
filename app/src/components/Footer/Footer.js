import React from 'react';
import {render} from 'react-dom';
import Mailing from '../Mailing/index';
import Social from '../Social/index';
import Telephone from '../Telephone/index';
import SiteNavigation from '../SiteNavigation/index';
import Copyright from '../Copyright/index';
import './style.css';


function Footer() {
return (
<footer className="footer">
<Mailing />
<Social />
    <div className="footer__wrapper">
        <a className="footer__logo logo logo--footer" href="#">
            <img className="footer__logo-image logo__image" src={require("../../img/logo-grey.png")} width="100" height="56" alt="Логотип SHOP 24"/>
        </a>
    <Telephone />
    <SiteNavigation />
     </div>
<Copyright />
</footer>
)
}

render(<footer/> , document.getElementById('footer'));
export default Footer