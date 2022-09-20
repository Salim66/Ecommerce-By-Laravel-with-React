import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppURL from '../api/AppURL';
import FooterDesktop from '../components/Common/FooterDesktop';
import FooterMobile from '../components/Common/FooterMobile';
import NavMenuDesktop from '../components/Common/NavMenuDesktop';
import NavMenuMobile from '../components/Common/NavMenuMobile';
import SliderLoading from '../components/Placeholder/SliderLoading';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import SuggestedProduct from '../components/ProductDetails/SuggestedProduct';
import axios from 'axios';

const ProductDetailsPage = () => {
        
  const [productData, setProductData] = useState([]);
  const [loaderDiv, setLoaderDiv] = useState('');
  const [mainDiv, setMainDiv] = useState('d-none');
  const params = useParams();
  
  useEffect(() => {
    window.scroll(0,0);
    
      axios.get(AppURL.productDetails(params.code))
      .then(res => {
          setProductData(res.data);
          setLoaderDiv('d-none');
          setMainDiv('');
      })
      .catch(error => {
          console.log(error);
      })

  }, [])

  if(mainDiv == 'd-none'){
    return (
      <>
          <div className='desktop'>
          <NavMenuDesktop />
          </div>
          <div className='mobile'>
          <NavMenuMobile />
          </div>
          
          <SliderLoading isLoading={ loaderDiv } />
  
          <div className='desktop'>
          <FooterDesktop />
          </div>        
          <div className='mobile'>
          <FooterMobile />
          </div>        
      </>
    )
  }else {
    return (
      <>
          <div className='desktop'>
          <NavMenuDesktop />
          </div>
          <div className='mobile'>
          <NavMenuMobile />
          </div>
          
          <ProductDetails productData = { productData } />
          <SuggestedProduct />
  
          <div className='desktop'>
          <FooterDesktop />
          </div>        
          <div className='mobile'>
          <FooterMobile />
          </div>        
      </>
    )
  }

  
}

export default ProductDetailsPage;