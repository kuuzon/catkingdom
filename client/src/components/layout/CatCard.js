//Import React components
import React, { useState, useEffect } from 'react';

//Import packages
import { Card, CardColumns, Pagination } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

//Custom styles CSS
const Styles = styled.div`
    .maincolumn {
        padding-top: 1rem;
        padding-bottom: 1rem;
    };
`;

const CatCard = () => {
    //Set states for card
    const [data, setData] = useState([]);

    //Set state for page offsets
    // const [offset, setOffset] = useState({
    //     offset: 0,
    //     data: [],
    //     perPage: 20,
    //     currentPage: 0
    // })

    // const { offset, data, perPage, currentPage } = offset;

    //Read (get) function: Fetch API images to display
    useEffect(() => {
        const listData = async () => {
            // console.log(process.env.FLICKR_API_KEY)
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
                    per_page: 22
                }
            });
            console.log(res.data.photos.photo);
            setData(res.data.photos.photo);
        };
        listData();
    }, []);

    //Pagination functions
    // const handlePageClick = async e => {

    // }

    //Render
    return (
        <Styles>
            <CardColumns className="maincolumn">
                {data.map(item => (
                    <Card key={item.id}>
                        <Card.Img src={'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg'} />
                    </Card>
                ))}
            </CardColumns>
            <Pagination className="justify-content-md-center">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </Styles>
    )
}

export default CatCard;