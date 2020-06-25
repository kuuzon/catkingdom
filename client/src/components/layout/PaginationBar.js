//Import React components
import React from 'react'

//Import packages
import { Pagination } from 'react-bootstrap';

const PaginationBar = ({imagesPerPage, totalImages, paginate, currentPage, isFirstPage, isLastPage}) => {    
    const pageNumbers = [];
 
    for(let i = 1; i <= Math.ceil(totalImages / imagesPerPage ); i++ ) {
        pageNumbers.push(i);
    }

    return (
        <Pagination className="justify-content-md-center">
            {
                !isFirstPage && <Pagination.Prev onClick={() => paginate(currentPage - 1)}/>
            }
                {pageNumbers.map(number => (
                    <Pagination.Item key={number} onClick={() => paginate(number)}>
                        {number}
                    </Pagination.Item>
                ))}
            {
                !isLastPage && <Pagination.Next onClick={() => paginate(currentPage + 1)}/>
            }
        </Pagination>
                    
    )
}

export default PaginationBar;