import React from 'react';
import {render} from 'react-dom';
import './style.css';


function Telephone() {
return (

        <div className="footer__telephone telephone">
            <a className="telephone__number" href="tel:89005007555">
                8 (800) 500-75-55
                <sup className="telephone__star">*</sup>
            </a>
            <span className="telephone__descriptions">
                 <sup className="telephone__star">*</sup>
          Бесплатный звонок по России
        </span>
            <a className="telephone__number" href="tel:84957339603">
                8 (495) 733-96-03
            </a>
        </div>
)
}

render(<Telephone /> , document.getElementById('footer'));
export default Telephone