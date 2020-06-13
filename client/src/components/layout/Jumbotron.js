import React from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';

//Import image
import catImage from '../../assets/cat.jpg';

//Custom styles CSS
const Styles = styled.div`
    .jumbo {
        background: url(${catImage}) no-repeat;
        background-size: cover;
        background-position: right 40% bottom 75%;
        color: #FCEEED;
        height: 300px;
        position: relative;
        z-index: -1;    
        scale: 1rem;
        /* z-index is about stacking things on each other */
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    .container {
        padding-top: 7rem;
    }

    p {
        font-style: italic;
    }
`;

const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className='jumbo'>
                <div className='overlay'></div>
                <Container className='container'>
                    <h3>The CatKingdom</h3>
                    <p>The one-stop cat cornucopia for your cat pics, pats and memes</p>
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default Jumbotron
