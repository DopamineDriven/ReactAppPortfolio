import React from 'react';
import Container from '../Container/Container.jsx'
import ImageChangeOnMouseOver from './imageEffects/ImageChangeOnMouseOver.jsx'

const Home = () => {
    return (
        <Container fluid>
            <div></div>
            <div>
                <ImageChangeOnMouseOver />
            </div>
        </Container>
    )
}

export default Home;