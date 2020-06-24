//Import React components
import React, {Fragment} from 'react';

//Import packages
import styled from 'styled-components';
import CatCard from './layout/CatCard';

//Custom styles for home tags
const H2 = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: #D2691E;
    padding-bottom: 1rem;
`;

const Styles = styled.div`
    .card {
        margin-bottom: 1rem;
    }
`;

const Home = () => {
    return (
        <Styles>
            <Fragment>
                <H2>The CatKingdom Catalogue</H2>
                <CatCard />
            </Fragment>
        </Styles>
    )
}

export default Home