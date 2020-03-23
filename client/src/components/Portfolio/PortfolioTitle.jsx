import React from 'react';
import './PortfolioTitle.css';

const PortfolioTitle = (props) => {
    return (
        <h1 className="title">
            {props.children}
        </h1>
    )
};

export default PortfolioTitle;