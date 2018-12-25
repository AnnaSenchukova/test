import React from 'react';
import {render} from 'react-dom';
import './style.css';

function Promocode() {
return (
 <form className="basket__promocode" action="#" method="post" name="promo">
                        <p className="basket__promocode-slogan">
                            Есть промокод?
                        </p>
                        <input className="basket__promocode-field" type="password" name="promocode" placeholder="Введите промокод"/>
                        <button className="basket__button button button--toapply" type="submit">
                            Применить
                        </button>
                    </form>

                  )
}

export default Promocode