import React from "react";
import Container from "../Container/Container.jsx";
import ImageChangeOnMouseOver from "./imageEffects/ImageChangeOnMouseOver.jsx";
import Row from "../Row/Row.jsx";
import "./Home.css";
import Banner from "./Banner.jsx";
const Home = () => {
	return (
		<Container fluid>
			<Row className="row">
				<div
					className="col-md-5 align-middle center shadow-lg p-3 mb-5 pr-20 rounded"
          id="imdiv"
          style={{ "verticalAlign": "middle" }}
				>
					<ImageChangeOnMouseOver
						className="card-img justify-content center"
						id="image"
					/>
				</div>
				<div className="col-md-5 justify-content center shadow-lg p-3 mb-5 pt-5 rounded">
					<div className="card-body">
						<h2 className="texty">Thanks for dropping by</h2>
						<br />
						<p className="card-text font-weight-bold font-smaller" id="bio">
							My name is Andrew Ross, and I'm a Chicago-based full-stack
							developer. I have a background in Biochemistry and Anthropology
							but most recently obtained a certificate in full-stack
							development. During quarantine, I co-founded an LLC, Windy City
							Development. Currently, I'm full-stack lead on a project for a
							Chicago-based news company. Let's get down to tech shall we? First
							and foremost, TypeScript puts the super in super-set, especially
							in a team environment. State management in React can be
							cumbersome, which is why I consider GraphQL and Apollo to be the
							dynamic duo. That said, Redux finishes a close second but sticking
							with Native Hooks is a solid option as well. As far as DBaaS
							providers are concerned, MongoDB Atlas is the bees knees. Always
							on the lookout for new opportunities, so feel free to drop me a line
							via one of the social media providers linked below.
						</p>
					</div>
				</div>
			</Row>
			<Row>
				<Banner />
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
