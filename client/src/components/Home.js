import React, {Fragment} from 'react';
import styled from 'styled-components';
import Card from './layout/Card';

//Custom styles for navs
const H2 = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: #D2691E;
    padding-bottom: 1rem;
`;

const Home = () => {
    return (
        <Fragment>
            <H2>The CatKingdom Catalogue</H2>
            <Card />
        </Fragment>
    )
}

export default Home
