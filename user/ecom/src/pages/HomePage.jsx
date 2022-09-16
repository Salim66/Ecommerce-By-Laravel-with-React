import React, { Component } from 'react';
import FooterDesktop from '../components/Common/FooterDesktop';
import NavMenuDesktop from '../components/Common/NavMenuDesktop';
import NavMenuMobile from '../components/Common/NavMenuMobile';
import Categories from '../components/Home/Categories';
import Collection from '../components/Home/Collection';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import HomeTop from '../components/Home/HomeTop';
import HomeTopMobile from '../components/Home/HomeTopMobile';
import NewArrival from '../components/Home/NewArrival';

export class HomePage extends Component {
  render() {
    return (
      <>
        <div className='desktop'>
          <HomeTop />
          <NavMenuDesktop />
        </div>
        <div className='mobile'>
          <HomeTopMobile />
          <NavMenuMobile />
        </div>
        
        <FeaturedProducts />
        <NewArrival />
        <Categories />
        <Collection />
        <FooterDesktop />
      </>
    )
  }
}

export default HomePage;