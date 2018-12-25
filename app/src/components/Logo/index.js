import React from 'react';
import {render} from 'react-dom';
import './style.css';


function Logo() {
return (
            <a className="navigation__item logo logo--header">
                <picture>
                <source media="(min-width: 768px)" srcset={require("../../img/logo-orange.png")}/>
                <img className="logo-image" src={require("../../img/logo-mobile.png")} alt="Логитип магазина SHOP24 New Look"/>
                </picture>
            </a>
)
}

render(<Logo/>, document.getElementById('header'));
export default Logo