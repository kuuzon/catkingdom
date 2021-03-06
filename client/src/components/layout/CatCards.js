//Import React components
import React from 'react';

//Import packages
import { Card, CardColumns } from 'react-bootstrap';

//Import modules
import LoadingSpinner from '../layout/LoadingSpinner';

const CatCards = ({ images, loading }) => {

    if(loading) {
        return < LoadingSpinner />
    }

    //Render
    return (
        <CardColumns className="maincolumn">
            {images.map(image => (
                <Card key={image.id}>
                    <Card.Img src={'https://farm' + image.farm + '.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '.jpg'} />
                </Card>
            ))}
        </CardColumns>
    )
}

export default CatCards;