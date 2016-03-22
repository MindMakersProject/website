// LOAD STYLES
import 'style/url!file!./../node_modules/bulma/css/bulma.css'
import './styles/base.scss'
//
import React from 'react'
import RDOM from 'react-dom'
//
import App from './components/App.js'

RDOM.render(<App />, document.getElementById('app'))
