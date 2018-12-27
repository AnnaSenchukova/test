import React from 'react';
import {render} from 'react-dom';
import './style.css';

function Calculation() {
return (
                    <div className="basket__calculation">
                        <table className="basket__calculation-table">
                            <tr className="basket__calculation-stroke">
                                <td className="basket__calculation-name">
                                    Сумма заказа:
                                </td>
                                <td className="basket__calculation-sum">
                                    9 800 руб.
                                </td>
                            </tr>
                            <tr className="basket__calculation-stroke">
                                <td className="basket__calculation-name basket__calculation-name--selection">
                                    Промокод:
                                </td>
                                <td className="basket__calculation-sum basket__calculation-sum--selection">
                                    -1 800 руб.
                                </td>
                            </tr>
                            <tr className="basket__calculation-stroke">
                                <td className="basket__calculation-name basket__calculation-name--total">
                                    Всего:
                                </td>
                                <td className="basket__calculation-sum basket__calculation-name--total ">
                                    8 000 руб.
                                </td>
                            </tr>
                        </table>
                        <button className="basket__calculation-button button button--order">
                            Оформить заказ
                        </button>
                    </div>


  )
}

export default Calculation