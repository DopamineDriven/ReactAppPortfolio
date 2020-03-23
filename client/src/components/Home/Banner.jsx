import React from 'react';
import './Home.css';

const Banner = () => {
    return (
    <div className="banner-text shadow-lg p-3 mb-5 rounded">
        <h3>Software Developer</h3>
        <hr />
        <p>React | Express | MongoDB | MySQL | Node | JavaScript | jQuery | Bootstrap | CSS | HTML</p>
        <div className="social-links">
            <a href="https://github.com/DopamineDriven" target="__blank">
                <i className="fa fa-github-square fa-3x" aria-hidden="true"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/andrew-ross-23136ab0/" target="__blank">
                <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.youtube.com/user/RandomHero64209/videos?view_as=subscriber" target="__blank">
                <i className="fa fa-youtube-square fa-3x" aria-hidden="true"></i>
            </a>
        </div>
    </div>
    )
}

export default Banner;