//Import React components
import React from 'react'

//Import packages
import { Container } from 'react-bootstrap';    
import styled from 'styled-components';

const Styles = styled.div`  
    .container {
        margin-bottom: 4rem;
    }
`;

const Layout = props => (
    <Styles>
        <Container>
            {props.children}
        </Container>
    </Styles>
)

export default Layout