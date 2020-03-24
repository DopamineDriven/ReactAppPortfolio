import React from 'react';
import './PortfolioItem.css';

const PortfolioItem = ({id, image, title, overview, url}) => {
        return (
            <div className="portcard col-md-5 shadow-lg p-3 mt-3 mb-1 pt-5 rounded">
                <h3 className="text-white">{title}</h3>
                <a href={url} target="__blank"><img src={image} alt={url} className="portImg"></img></a>
                <br />
                 <h4 className="projecttext text-white mt-3">{overview}</h4>
            </div>
        )
    };
    export default PortfolioItem;
