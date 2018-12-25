import React from 'react';
import {render} from 'react-dom';
import Basket from '../Basket/Basket';
import './style.css';


function Main() {
return (
<main className="main">
    <h1 className="main__title visually-hidden">
        Магазин SHOP 24
    </h1>
    <Basket />
</main>
)
}

render(<main/>, document.getElementById('main'));
export default Main