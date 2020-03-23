import React, { Component } from 'react';
import portfolioPicOne from '../../images/14.jpg';
import portfolioPicTwo from '../../images/13.jpg';
import portfolioPicThree from '../../images/11.jpg';
import portfolioPicFour from '../../images/7.jpg';
import portfolioPicFive from '../../images/10.jpg';
import portfolioPicSix from '../../images/8.jpg';
import portfolioPicSeven from '../../images/4.jpg';
import portfolioPicEight from '../../images/3.jpg';
import portfolioPicNine from '../../images/2.jpg';
import Container from '../Container/Container.jsx';
import WrapperPortfolio from './WrapperPortfolio'

const portfolioData = [
{
    id: 14,
    title: "PWA Budget Tracker",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicOne,
    overview:
    "PWA, Mongo, Mongoose, Node, Express, Charts"
},
{
    id: 13,
    title: "Employee Directory",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicTwo,
    overview:
        "React, React Hooks, axios, createContext"
    },
    {
    id: 11,
    title: "Workout Tracker",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicThree,
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
    overview:
        "Node CLI, Jest, jQuery, Constructors"
    },
    {
    id: 2,
    title: "GitHub Profile Generator",
    bootcamp: true,
    independent: false,
    favorite: false,
    image: portfolioPicNine,
    overview:
        "Node CLI, Axios, Electron"
    }
];

class Portfolio extends Component {
    state = {
        portfolioData
    }


    render() {
        return (
            <WrapperPortfolio>

            </WrapperPortfolio>
        )
    }
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