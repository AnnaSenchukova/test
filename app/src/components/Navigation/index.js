import React from 'react';
import {render} from 'react-dom';
import Logo from '../Logo/index';
import Search from '../Search/index'
import UserNavigation from '../UserNavigation/index'
import CatalogNavigation from '../CatalogNavigation/index'
import './style.css';


function Navigation () {
return (
        <nav className="navigation">
            <div className="navigation__wrapper container">

             <Logo />
             <Search />
             <UserNavigation />

            </div>
            <CatalogNavigation />
        </nav>

)
}

render(<Navigation />, document.getElementById('header'));
export default Navigation