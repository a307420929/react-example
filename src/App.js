import React from 'react'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'

import Author from '_/components/author'
import Category from '_/components/category'
import Book from '_/components/book'

import _styles from '_/styles/index.scss'
import _header from '_/styles/header.scss'
import _menu from '_/styles/menu.scss'

function App() {
  return (
    <Router>
      <div>
        <div className={_header.container}>
          <div className={_header.logo}>
            React Example
          </div>
        </div>

        <div className={_menu.container}>
          <NavLink activeClassName={_menu.active} to="/author">作者</NavLink>
          <NavLink activeClassName={_menu.active} to="/category">分类</NavLink>
          <NavLink activeClassName={_menu.active} to="/book">书籍</NavLink>
        </div>

        <div className={_styles.main}>
          <Route path="/author" component={Author} />
          <Route path="/category" component={Category} />
          <Route path="/book" component={Book} />
        </div>
      </div>
    </Router>
  )
}

export default App
