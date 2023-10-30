import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageNumber } from '../../redux/products/ProductReducer';
import { useEffect } from 'react';
function PaginationProducts() {
    const [currentPage, setCurrentPage] = useState(1)

    const productLength = useSelector(product => product.allProducts)

    let productPageSize = Math.ceil(productLength.allProducts.length / productLength.pageSizeIndex)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPageNumber({ currentPage }));
    }, [currentPage])

    return (
        <Stack spacing={2}>
            <Pagination count={productPageSize} onChange={(e) => setCurrentPage(e.target.outerText)} variant="outlined" color="primary" />
        </Stack>
    )
}

export default PaginationProducts