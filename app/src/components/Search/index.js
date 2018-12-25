import React from 'react';
import {render} from 'react-dom';
import './style.css';


function Search() {
return (
            <form className="navigation__item search" action="#" method="post" name="search">
                <input className="search__input" type="search" name="search-field"
                       placeholder="Поиск по сайту" aria-label="Поле поиск по сайту"/>
            </form>
)
}

render(<Search />, document.getElementById('header'));
export default Search