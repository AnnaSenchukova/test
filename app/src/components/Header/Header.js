import React from 'react';
import {render} from 'react-dom';
import Navigation from '../Navigation/index'
import OtherOptions from '../OtherOptions/index'
import './style.css';


function Header() {
return (
<header className="header">
    <div className="header__wrapper">
    <Navigation />
    <OtherOptions />
    </div>
</header>
)
}

render(<header/>, document.getElementById('header'));
export default Header