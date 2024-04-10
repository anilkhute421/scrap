import React from 'react'

const ProductsContainer = ({ Items, shopData, shopName }) => {

    console.log(shopName, "shopNameshopNameshopName");
    return (
        <div>
            <div className='products-container'>
                <div className='d-flex justify-content-center my-4'>
                    <div className="scrappy-box">
                        <p className='shop-title'>{shopName?.name}</p>
                        <p className='shop-points'>{shopName?.point}</p>
                        <img src='/shopImages/scrappy-points-icon.png' />
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {shopData?.map((product) => (
                            <div className="col-6 col-md-3 g-3">
                                <div className="card-new ">
                                    <div>
                                        <img src={`${product?.image}`} className='img-fluid' />
                                    </div>
                                    <div className="bg-box">
                                        {product?.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductsContainer
