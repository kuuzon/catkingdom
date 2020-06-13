import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const H2 = styled.h2`
    font-size: 4rem;
    color: red;
    text-align: center;
`;

const H3 = styled.h3`
    font-size: 3rem;
    color: red;
    text-align: center;
`;

const P = styled.p`
    font-size: 2rem;
    color: black;
    text-align: center;
`;

const NotFound = () => {
    return (
        <div>
            <H2><FontAwesomeIcon icon= {faExclamationTriangle}/> OOPS...</H2>
            <H3>It seems that you made an error somewhere</H3>
            <P>This is not the page you were looking for!</P>
        </div>
    )
}

export default NotFound