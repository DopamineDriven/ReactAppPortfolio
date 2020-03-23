import React from "react";
import './Navbar.css';
import Container from '../Container/Container.jsx'
import AminoLogo from '../../images/misc/AminoLogo.jpg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
        <Container fluid>
            <a href="../Home/Home.jsx" className="navbar-brands">
                <img src={AminoLogo} alt="amino" className="img-fluid" height="99.66px" width="225px"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/" className="navbar-brand">
                            About
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/contact" className="navbar-brand">
                            Contact
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/portfolio" className="navbar-brand">
                            Portfolio
                        </a>
                    </li>
                </ul>
            </div>
      </Container>
    </nav>
  )
}

export default Navbar;

/* <div className="header" style={{height: '75px', position: 'relative'}}>
<Layout fluid>
    <Header transparent >
      <Navigation className="Navbar">
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/portfolio">Portfolio</a>
      </Navigation>
    </Header>
    <Content />
</Layout>
</div> */



/*return (
    <nav className="navbar navbar-expand-md navbar-dark sticky-top">
        <Container>
            <a href="../Home/Home.jsx" className="navbar-brand">
                <img src="../../images/misc/AminoLogo.png" alt="amino" className="img-fluid" height="132.88px" width="300px"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a href="/" className="nav-link">
                            About
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a href="/contact" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a href="/portfolio" className="nav-link">
                            Portfolio
                        </a>
                    </li>
                </ul>
            </div>
      </Container>
    </nav>
  )
} */