import React from 'react';
import './WrapperPortfolio.css';

const WrapperPortfolio = (props) => {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
};

export default WrapperPortfolio;