import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FooterDesktop from '../components/Common/FooterDesktop';
import FooterMobile from '../components/Common/FooterMobile';
import NavMenuDesktop from '../components/Common/NavMenuDesktop';
import NavMenuMobile from '../components/Common/NavMenuMobile';
import Category from '../components/ProductDetails/Category';
import axios from 'axios';
import AppURL from '../api/AppURL';

const ProductCategoryPage = () => {

    const [productData, setProductData] = useState([]);
    const params = useParams();
    
    useEffect(() => {
      window.scroll(0,0);
      
        axios.get(AppURL.productListByCategory(params.category))
        .then(res => {
            setProductData(res.data);
        })
        .catch(error => {
            console.log(error);
        })

    }, [])
    
    


    return (
        <>
            <div className='desktop'>
            <NavMenuDesktop />
            </div>
            <div className='mobile'>
            <NavMenuMobile />
            </div>
            
            <Category productData={productData} category={params.category} />

            <div className='desktop'>
            <FooterDesktop />
            </div>        
            <div className='mobile'>
            <FooterMobile />
            </div>        
        </>
    )
}

export default ProductCategoryPage;