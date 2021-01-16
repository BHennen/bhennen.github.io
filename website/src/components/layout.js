import React from "react"
import { Link } from "gatsby"
import Header from "./header"
// import Copyright from './Copyright'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  // // Set header
  // let header
  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{<Header/>}</header>
      <main>{children}</main>
      <footer>
        {/* TODO: add footer< Copyright /> */}
      </footer>
    </div>
  )
}

export default Layout
