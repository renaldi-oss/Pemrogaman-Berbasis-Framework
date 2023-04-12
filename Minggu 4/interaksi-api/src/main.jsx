import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPost from './container/blogpost/Blogpost'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogPost/>
  </React.StrictMode>,
)