import React from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';

//Import image
import catImage from '../../assets/cat.jpg';

//Custom styles CSS
const Styles = styled.div`
    .jumbo {
        background: url(${catImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 250px;
        position: relative;
        z-index: -2;    
        scale: 100px;
        /* z-index is about stacking things on each other */
    }

    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className='jumbo'>
                <div className='overlay'></div>
                <Container>
                    <h1>Welcome</h1>
                    <p>This is my cat website...meow nyaaaaaaaaaaaa</p>
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default Jumbotron
