import React, { useState, useEffect } from 'react';
import FooterDesktop from '../components/Common/FooterDesktop';
import FooterMobile from '../components/Common/FooterMobile';
import NavMenuDesktop from '../components/Common/NavMenuDesktop';
import NavMenuMobile from '../components/Common/NavMenuMobile';
import SearchList from '../components/ProductDetails/SearchList';
import axios from 'axios';
import AppURL from '../api/AppURL';
import { useParams } from 'react-router-dom';

const SearchPage = () => {

    const [searchData, setSearchData] = useState([]);
    const params = useParams();

    console.log(params.searchKey);
    
    useEffect(() => {
      window.scroll(0,0);
      
        axios.get(AppURL.productBySearch(params.searchKey))
        .then(res => {
            setSearchData(res.data);
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
            
            <SearchList searchData={searchData} searchKey={params.searchKey} />

            <div className='desktop'>
            <FooterDesktop />
            </div>        
            <div className='mobile'>
            <FooterMobile />
            </div>        
        </>
    )
}

export default SearchPage;