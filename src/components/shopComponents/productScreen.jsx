import React, { useEffect, useState } from 'react'
import ProductsContainer from './productsContainer'

const ProductScreen = ({ Items, shopName, shopData}) => {


    const [bgClass, setBgClass] = useState('')

    const handleBgImage = () => {

        if (Items?.title?.includes('Bag')) {
            setBgClass('shop-bags-bg')
        } else if (Items?.title?.includes('shirt')) {
            setBgClass('shop-tshirts-bg')
        } else if (Items?.title?.includes('Robot')) {
            setBgClass('shop-robots-bg')
        } else if (Items?.title?.includes('Book')) {
            setBgClass('shop-books-bg')
        }
    }

    useEffect(() => {
        handleBgImage()
    }, [Items])

    return (
        <div className={`shop-screen shop-bags-bg bg-info`}>
            <div className='shop-bag-header d-flex align-items-center'>
            <div class="shop-backIcon">
                <a href="https://app.scrappynews.com/exit-challenge"><img src="/shopImages/backIcon.png" /></a>
                </div>
                <div>
                    <h3>{shopName?.name}</h3>
                </div>
            </div>
            <ProductsContainer Items={Items} shopData={shopData} shopName={shopName} />
        </div>
    )
}

export default ProductScreen
