import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css"
import Routing from './routing'

const root = document.getElementById("root")
const rootElem = ReactDOM.createRoot(root)

rootElem.render(
  <React.StrictMode>
    <Routing></Routing>
  </React.StrictMode>
)