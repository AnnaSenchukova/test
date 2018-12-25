import React from 'react';
import {render} from 'react-dom';
import Search from '../Search/index'
import UserNavigation from '../UserNavigation/index'
import CatalogNavigation from '../CatalogNavigation/index'
import './style.css';


function Navigation () {
return (
        <nav className="navigation">
            <div className="navigation__wrapper container">
            <a className="navigation__item logo logo--header">
                <picture>
                <source media="(min-width: 768px)" srcset={require("../../img/logo-orange.png")}/>
                <img className="logo-image" src={require("../../img/logo-mobile.png")} alt="Логитип магазина SHOP24 New Look"/>
                </picture>
            </a>
             <Search />
             <UserNavigation />

            </div>
            <CatalogNavigation />
        </nav>

)
}

render(<Navigation />, document.getElementById('header'));
export default Navigation