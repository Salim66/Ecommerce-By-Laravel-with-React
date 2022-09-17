import React, { Component } from 'react';
import AppURL from '../api/AppURL';
import FooterDesktop from '../components/Common/FooterDesktop';
import FooterMobile from '../components/Common/FooterMobile';
import NavMenuDesktop from '../components/Common/NavMenuDesktop';
import NavMenuMobile from '../components/Common/NavMenuMobile';
import Categories from '../components/Home/Categories';
import Collection from '../components/Home/Collection';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import HomeTop from '../components/Home/HomeTop';
import HomeTopMobile from '../components/Home/HomeTopMobile';
import NewArrival from '../components/Home/NewArrival';
import axios from 'axios';

export class HomePage extends Component {
  
  componentDidMount(){
      window.scroll(0,0);
      this.getVisitorDetails();
  }

  // get visitor details method
  getVisitorDetails = () => {
    axios.get(AppURL.visitorDetails).then().catch();
  }

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

export default HomePage;