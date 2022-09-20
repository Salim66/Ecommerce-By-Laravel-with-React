import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FooterDesktop from '../components/Common/FooterDesktop';
import FooterMobile from '../components/Common/FooterMobile';
import NavMenuDesktop from '../components/Common/NavMenuDesktop';
import NavMenuMobile from '../components/Common/NavMenuMobile';
import axios from 'axios';
import AppURL from '../api/AppURL';
import SubCategory from '../components/ProductDetails/SubCategory';

const ProductSubCategoryPage = () => {

    const [productData, setProductData] = useState([]);
    const params = useParams();
    
    useEffect(() => {
      window.scroll(0,0);
      
        axios.get(AppURL.productListBySubCategory(params.category, params.subcategory))
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
            
            <SubCategory productData={productData} category={params.category} subcategory={params.subcategory} />

            <div className='desktop'>
            <FooterDesktop />
            </div>        
            <div className='mobile'>
            <FooterMobile />
            </div>        
        </>
    )
}

export default ProductSubCategoryPage;