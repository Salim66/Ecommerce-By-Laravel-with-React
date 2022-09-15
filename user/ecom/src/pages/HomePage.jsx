import React, { Component } from 'react';
import NavMenuDesktop from '../components/Common/NavMenuDesktop';
import Categories from '../components/Home/Categories';
import Collection from '../components/Home/Collection';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import HomeTop from '../components/Home/HomeTop';
import NewArrival from '../components/Home/NewArrival';

export class HomePage extends Component {
  render() {
    return (
      <>
        <NavMenuDesktop />
        <HomeTop />
        <FeaturedProducts />
        <NewArrival />
        <Categories />
        <Collection />
      </>
    )
  }
}

export default HomePage;