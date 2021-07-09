import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'


ReactDOM.render(
  // StrictMode - обёртка, которая позволяет отлавливать действия, 
  // которые уже являются неактуальными (неподдерживаемые методы, практики).
  // его можно отключить, избавив себя от части полезной информации о том, что ты делаешь не так.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
