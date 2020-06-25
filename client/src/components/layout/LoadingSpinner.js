//Import React
import React from 'react'

//Import packages
import { Container, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

//Custom styles
const Styles = styled.div`
    .container {
        margin-top: 4rem;
        margin-left: auto;
        margin-right: auto;
        width: 50px;
    }
`;

const LoadingSpinner = () => {
    return (
        <Styles>
            <Container>
                <Spinner animation="grow" variant="info" alt="Loading..." />
            </Container>
        </Styles>
    )
}

export default LoadingSpinner;