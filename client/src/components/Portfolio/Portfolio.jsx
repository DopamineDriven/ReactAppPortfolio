import React from 'react';
import portfolioPicOne from '../images/14.jpg';
import portfolioPicTwo from '../images/13.jpg';
import portfolioPicThree from '../images/11.jpg';
import portfolioPicFour from '../images/7.jpg';
import portfolioPicFive from '../images/10.jpg';
import portfolioPicSix from '../images/8.jpg';
import portfolioPicSeven from '../images/4.jpg';
import portfolioPicEight from '../images/3.jpg';
import portfolioPicNine from '../images/2.jpg';
import PortfolioItem from './PortfolioItem.jsx';
import Container from '../Container/Container.jsx';
import './Portfolio.css';
// import WrapperPortfolio from './WrapperPortfolio';
// import PortfolioTitle from './PortfolioTitle.jsx';
// import PortfolioCard from './PortfolioCard.jsx'

const data = [
{
    id: 14,
    title: "PWA Budget Tracker",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicOne,
    url: 'https://budget-trackr.herokuapp.com/',
    overview:
    "PWA, Mongo, Node, Express"
},
{
    id: 13,
    title: "Employee Directory",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicTwo,
    url: 'https://vast-inlet-61488.herokuapp.com/',
    overview:
        "React, React Hooks, axios"
    },
    {
    id: 11,
    title: "Workout Tracker",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicThree,
    url: 'https://exercise-trackr.herokuapp.com/',
    overview:
        "Mongo, Mongoose, Express, Node"
    },
    {
    id: 7,
    title: "Rec-reate",
    bootcamp: true,
    independent: true,
    favorite: true,
    image: portfolioPicFour,
    url: 'https://rec-reate.herokuapp.com/',
    overview:
        "Project Two; MySQL, Sequelize, Handlebars, Express, Node, Passport, Bcrypt"
    },
    {
    id: 10,
    title: "Weather Dashboard",
    bootcamp: true,
    independent: false,
    favorite: false,
    image: portfolioPicFive,
    url: 'https://dopaminedriven.github.io/WeatherDashboard/',
    overview:
        "API, AJAX, JavaScript, jQuery"
    },
    {
    id: 8,
    title: "Burger App",
    bootcamp: true,
    independent: false,
    favorite: false,
    image: portfolioPicSix,
    url: 'https://infinite-stream-25057.herokuapp.com/',
    overview:
        "MySQL, Custom ORM, Handlebars, Node, Express, jQuery"
    },
    {
    id: 4,
    title: "Express Note Taker",
    bootcamp: true,
    independent: false,
    favorite: false,
    image: portfolioPicSeven,
    url: 'https://express-note-taking-app.herokuapp.com/',
    overview:
        "Express, node, local storage, jQuery"
    },
    {
    id: 3,
    title: "Employee Roster Generator",
    bootcamp: true,
    independent: false,
    favorite: false,
    image: portfolioPicEight,
    url: 'https://www.youtube.com/watch?v=1aqZo6awj38',
    overview:
        "Node CLI, Jest, MySQL, Inquirer"
    },
    {
    id: 2,
    title: "GitHub Profile Generator",
    bootcamp: true,
    independent: false,
    favorite: false,
    image: portfolioPicNine,
    url: 'https://www.youtube.com/watch?v=T1ln-xt-Dm4',
    overview:
        "Node CLI, Axios, Electron"
    }
];

const Portfolio = () => {
        return (
            <React.Fragment>
                <Container>
                    <div className="row m-auto p-auto">
                        {data.map((project) => {
                            return (
                                <PortfolioItem key={project.id} image={project.image} url={project.url} title={project.title} overview={project.overview}/>
                            )
                        })}
                    </div>
                </Container>
            </React.Fragment>
            // <WrapperPortfolio>
            //     <PortfolioTitle>Project</PortfolioTitle>
            //     {this.state.portfolioData.map(data => {
            //         <PortfolioCard  
            //             key = {data.id}
            //             id = {data.id}
            //             title = {data.title}
            //             overview = {data.overview}
            //             image = {data.image}
            //         />
            //     })}
            // </WrapperPortfolio>
        )
    }


export default Portfolio;


/* <Container fluid>
<div className="row">
    <div className="card-deck">
    {portfolioData.map(({ id, title, overview }) => {
        return (
        <PortfolioDetail
            key={id}
            id={id}
            title={title}
            overview={overview}
        />
        );
    })}
    </div>
</div>
</Container> */