import React from 'react'
import {render} from 'react-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

render(<Header/>, document.getElementById('header'))
render(<Main/>, document.getElementById('main'))
render(<Footer/>, document.getElementById('footer'))