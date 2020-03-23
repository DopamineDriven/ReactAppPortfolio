import React from "react";
import './Navbar.css';
import { Content, Layout, Header, Navigation } from 'react-mdl'

const Navbar = () => {
  return (
    <div style={{height: '100px', position: 'relative'}}>
      <Layout fixedHeader>
          <Header className="bg-dark" >
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