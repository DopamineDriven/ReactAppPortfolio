import React from 'react';
import './index.css';

export function PortfolioItem(props) {
    return (
        <div className="single-portfolio"  style={{ backgroundImage: `url("${props.image}")` }}>
            <button onClick={() => props.handleSelect(props.item)} className="portfolio-info">
                <h5>{props.title}</h5>
                <p>{props.overview}</p>
            </button>
        </div>
    );
}