import React from 'react';
import {render} from 'react-dom';
import Products from '../Products/Products';
import Promocode from '../Promocode/Promocode';
import Calculation from '../Calculation/Calculation';
import Add from '../Add/Add';
import './style.css';

function Basket() {
return (
<section className="basket">
        <h2 className="basket__title">
            Ваша корзина
        </h2>
        <div className="basket__wrapper-table container">
          <Products />
        </div>
        <div className="basket__wrapper container">
            <Promocode />
            <Calculation />
        </div>
            <Add />
</section>
  )
}

export default Basket