import React from "react";
import './Navbar.css';
import { Content, Layout, Header, Navigation } from 'react-mdl'

const Navbar = () => {
  return (
    <div className="header" style={{height: '75px', position: 'relative'}}>
      <Layout fixedHeader>
          <Header transparent >
            <Navigation className="Navbar">
                  <a href="/">Home</a>
                  <a href="/contact">Contact</a>
                  <a href="/portfolio">Portfolio</a>
            </Navigation>
          </Header>
          <Content />
      </Layout>
  </div>
  )
}

export default Navbar;