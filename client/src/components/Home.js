//Import React components
import React, {Fragment, useState, useEffect} from 'react';

//Import packages
import styled from 'styled-components';
import axios from 'axios';

//Import modules
import CatCards from './layout/CatCards';
import PaginationBar from './layout/PaginationBar';

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
    //Set states for card
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    //Set state for pagination
    const [currentPage, setCurrentPage] = useState(1);

    //Set state for number of images per page
    const [imagesPerPage] = useState(22);

    //Read (get) function: Fetch API images & store via setState
    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            const res = await axios({
                method: "get",
                url:"https://api.flickr.com/services/rest/",
                params: {
                    //Mirrors parameters provided in Flickr documentation for this endpoint
                    method: "flickr.groups.pools.getPhotos",
                    api_key: "453ef6ee513d0e1747121e06e0da737b",
                    group_id: "339958@N21",
                    extras: "url_n, description, owner_name, views",
                    format: "json",
                    nojsoncallback: 1,
                    per_page: 219
                }
            });
            console.log(res.data.photos.photo);
            setImages(res.data.photos.photo);
            setLoading(false);
        };
        //Call the API fetch function
        fetchImages();
    }, []);

    console.log(images)

    //Get pages functions
    //[1] The image no. of the last image on the respective page (i.e. 22, 44, 66, etc.)
    const indexOfLastImage = currentPage * imagesPerPage;
    //[2] The image no. of the first image on the respective page (i.e. 1, 23, 55, etc.)
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    //[3] Slice function picks out the selected elements in the array (in this case, the no. of the first and last image on the respective page)
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
    //[4] First page function does not appear when the currentPage === 1
    const isFirstPage = currentPage === 1;
    //[5] Last page function disappears when images cannot count up to state length
    const isLastPage = currentImages.length !== imagesPerPage || indexOfFirstImage === images.length;

    //Paginate function (change page)
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 250);
    };

    return (
        <Styles>
            <Fragment>
                <H2>The CatKingdom Catalogue</H2>
                <CatCards images={currentImages} loading={loading} />
                <PaginationBar imagesPerPage={imagesPerPage} totalImages={images.length} paginate={paginate} currentPage={currentPage} isFirstPage={isFirstPage} isLastPage={isLastPage}/>
            </Fragment>
        </Styles>
    )
}

export default Home