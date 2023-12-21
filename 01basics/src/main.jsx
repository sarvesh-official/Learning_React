import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


const aElement = React.createElement('a',{href : "https://google.com",target :"_blank"},"Click to visit google")
ReactDOM.createRoot(document.getElementById('root')).render(

    aElement)
