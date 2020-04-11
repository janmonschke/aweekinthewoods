import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import "./layout.css"

const Layout = ({ location, title, className, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          textAlign: "center",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 style={{ textAlign: "center" }}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div className={`layout ${className}`}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <p>
          <small>Icon by Made by Made from the Noun Project</small>
        </p>
      </footer>
    </div>
  )
}

export default Layout
