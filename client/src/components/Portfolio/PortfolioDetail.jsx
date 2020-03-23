// import React from 'react';
// import ImageToggleOnScroll from './ImageToggleOnScroll.jsx'

// const PortfolioDetail = ({
//     id,
//     title,
//     overview
// }) => {
//     console.log(`Detail:${id} ${title}`);
//     return (
//         <div className="card col-6 cardmin">
//             <ImageToggleOnScroll  
//                 className="card-img-top"
//                 primaryImg={`../../images/bw/-${id}.jpg`}
//                 secondaryImg={`../../images/-${id}.jpg`}
//                 alt={`${title}`}
//             />
//             <div className="card-body">
//                 <h4 className="card-title">
//                     <span>
//                         {title}
//                     </span>
//                 </h4>
//                 <span>
//                     {overview}
//                 </span>
//             </div>
//         </div>
//     )
// };


// export default PortfolioDetail;






// import React from 'react';
// //import ImageChangeOnScroll from './imageEffects/ImageChangeOnScroll.jsx'; 
// import portfolioPicOne from '../../images/14.jpg';
// import portfolioPicTwo from '../../images/13.jpg';
// import portfolioPicThree from '../../images/11.jpg';
// import portfolioPicFour from '../../images/7.jpg';
// import portfolioPicFive from '../../images/10.jpg';
// import portfolioPicSix from '../../images/8.jpg';
// import portfolioPicSeven from '../../images/4.jpg';
// import portfolioPicEight from '../../images/3.jpg';
// import portfolioPicNine from '../../images/2.jpg';
// // import { PortfolioItem } from './PortfolioItem.jsx';
// import './index.css'
// import Container from '../Container/Container.jsx'
// import Row from '../Row/Row.jsx'
// import Col from '../Col/Col.jsx'

// const projectData = [
// {
//     id: 14,
//     title: "PWA Budget Tracker",
//     bootcamp: true,
//     independent: false,
//     favorite: true,
//     image: portfolioPicOne,
//     overview:
//     "PWA, Mongo, Mongoose, Node, Express, Charts"
// },
// {
//     id: 13,
//     title: "Employee Directory",
//     bootcamp: true,
//     independent: false,
//     favorite: true,
//     image: portfolioPicTwo,
//     overview:
//         "React, React Hooks, axios, createContext"
//     },
//     {
//     id: 11,
//     title: "Workout Tracker",
//     bootcamp: true,
//     independent: false,
//     favorite: true,
//     image: portfolioPicThree,
//     overview:
//         "Mongo, Mongoose, Express, Node"
//     },
//     {
//     id: 7,
//     title: "Rec-reate",
//     bootcamp: true,
//     independent: true,
//     favorite: true,
//     image: portfolioPicFour,
//     overview:
//         "Project Two; MySQL, Sequelize, Handlebars, Express, Node, Passport, Bcrypt"
//     },
//     {
//     id: 10,
//     title: "Weather Dashboard",
//     bootcamp: true,
//     independent: false,
//     favorite: false,
//     image: portfolioPicFive,
//     overview:
//         "API, AJAX, JavaScript, jQuery"
//     },
//     {
//     id: 8,
//     title: "Burger App",
//     bootcamp: true,
//     independent: false,
//     favorite: false,
//     image: portfolioPicSix,
//     overview:
//         "MySQL, Custom ORM, Handlebars, Node, Express, jQuery"
//     },
//     {
//     id: 4,
//     title: "Express Note Taker",
//     bootcamp: true,
//     independent: false,
//     favorite: false,
//     image: portfolioPicSeven,
//     overview:
//         "Express, node, local storage, jQuery"
//     },
//     {
//     id: 3,
//     title: "Employee Roster Generator",
//     bootcamp: true,
//     independent: false,
//     favorite: false,
//     image: portfolioPicEight,
//     overview:
//         "Node CLI, Jest, jQuery, Constructors"
//     },
//     {
//     id: 2,
//     title: "GitHub Profile Generator",
//     bootcamp: true,
//     independent: false,
//     favorite: false,
//     image: portfolioPicNine,
//     overview:
//         "Node CLI, Axios, Electron"
//     }
// ];

// const Portfolio = () => {
//     return (
//         <div className='portfolio'>
//             {projectData.map(item => (
//                  <Row>
//                  key={item.id}
//                  Id={item.Id}
//                  image={item.image}
//                  title={item.title}
//                  overview={item.overview}
//                  </Row>
//             ))}
//         </div>
//     )
// };

// export default Portfolio;