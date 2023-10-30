import { useEffect, useState } from 'react';
import CardBody from './CardBody';
import { useDispatch, useSelector } from "react-redux";
import { getProductsFromServer } from "../../redux/products/ProductReducer";
import { BeatLoader } from "react-spinners";
const SellCards = () => {
    const dispatch = useDispatch()
    const itemsInfo = useSelector(items => items.allProducts)

    useEffect(() => {
        dispatch(getProductsFromServer())
    }, [])
    let endIndex = itemsInfo.pageSizeIndex * itemsInfo.currentPageNumber;
    let startIndex = endIndex - itemsInfo.pageSizeIndex;
    return (
        <>
            {
                itemsInfo.allProducts.length ?
                    (itemsInfo.allProducts.map(product => <CardBody key={product.id} {...product} />).slice(startIndex, endIndex))
                    :
                    <div className="col-span-3 my-10 ">
                        <BeatLoader color="#36d7b7" />
                    </div>
            }
        </>
    )
}

export default SellCards