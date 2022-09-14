import React, { Component } from 'react';
import Categories from '../components/Home/Categories';
import FeaturedProducts from '../components/Home/FeaturedProducts';

export class HomePage extends Component {
  render() {
    return (
      <>
        <FeaturedProducts />
        <Categories />
      </>
    )
  }
}

export default HomePage;