import React from 'react'
import {render} from 'react-dom'
import './normalize.css'
import './base.css'
import './visually-hidden.css'
import './container.css'
import './button.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

render(<Header/>, document.getElementById('header'))
render(<Main/>, document.getElementById('main'))
render(<Footer/>, document.getElementById('footer'))