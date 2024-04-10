import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import ProductsScreen from '../components/shopComponents/productScreen'
import WelcomeScreen from '../components/shopWelcomeScreen'
import { shirts, bags, robots, books } from '../data/shop';
import { API } from "aws-amplify";
import { getProduct, getProductCategory, listProducts } from '../graphql/queries';

const Shop = () => {

  const {id} = useParams();
  
  const [data, setData] = useState({ products: [] })
  const [shopData, setShopData] = useState([])
  const [shopName, setShopName] = useState({})

  console.log(shopName,"shopName");

    const getShopData = async () => {
      try {
          let data = await API.graphql({
              query: listProducts,
             variables: { filter: {categoryId: {eq: id}} }
          })
          setShopData(data?.data?.listProducts?.items)
      } catch (error) {
          console.log(error)
      }
    }

    useEffect(() =>{
      getShopData()
    }, [])

    const getShopName = async () => {
      try {
          let data = await API.graphql({
              query: getProductCategory,
             variables: { id: id }
          })
          setShopName(data?.data?.getProductCategory)
      } catch (error) {
          console.log(error)
      }
    }

    useEffect(() =>{
      getShopName()
    }, [])





  return (
    <div>
      {/* <WelcomeScreen /> */}
      < ProductsScreen Items={data} shopName={shopName} shopData={shopData} />
    </div>
  )
}

export default Shop
