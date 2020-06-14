//Import React components
import React from 'react'

//Import packages
import { Container } from 'react-bootstrap';    
import styled from 'styled-components';

const Styles = styled.div`  
    .mainlayout {
        padding-bottom: 2rem;
    }
`;

const Layout = props => (
    <Styles>
        <Container className="mainlayout">
            {props.children}
        </Container>
    </Styles>
)

export default Layout