import React from "react";
import Container from "../Container/Container.jsx";
import ImageChangeOnMouseOver from "./imageEffects/ImageChangeOnMouseOver.jsx";
import Row from "../Row/Row.jsx";
import "./Home.css";
import Banner from './Banner.jsx'
const Home = () => {
  return (
    <Container fluid>
      <Row className="row">
        <div
          className="col-md-3 justify-content center shadow-lg p-3 mb-5 rounded"
          id="imdiv"
        >
          <ImageChangeOnMouseOver
            className="card-img justify-content center"
            id="image"
          />
        </div>
        <div className="col-md-5 justify-content center shadow-lg p-3 mb-5 pt-5 rounded">
          <div className="card-body">
          <h2 className="texty">About</h2>
          <br />
            <p className="card-text font-weight-bold" id="bio">
                My name is Andrew Ross, and I'm Software Developer based in the Chicago area.
                I earned bachelor’s degrees from the University of Iowa in Biochemistry and Anthropology and most recently obtained a certificate in Full Stack Development from Northwestern University.
                I primarily focus on back-end development, but have become increasingly fond of and proficient in React development as of recent.
            </p>
          </div>
        </div>
      </Row>
      <Row>
          <Banner/>
      </Row>
    </Container>
  );
};

export default Home;

// <Container fluid>
// <div></div>
// <div>
// <ImageChangeOnMouseOver />
// </div>
// </Container>
