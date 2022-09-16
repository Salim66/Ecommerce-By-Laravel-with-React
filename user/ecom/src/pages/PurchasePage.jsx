import React, { Component } from 'react';
import FooterDesktop from '../components/Common/FooterDesktop';
import FooterMobile from '../components/Common/FooterMobile';
import NavMenuDesktop from '../components/Common/NavMenuDesktop';
import NavMenuMobile from '../components/Common/NavMenuMobile';
import Purchase from '../components/others/Purchase';

class PurchasePage extends Component {

    componentDidMount(){
        window.scroll(0,0);
    }

  render() {
    return (
        <>
            <div className='desktop'>
            <NavMenuDesktop />
            </div>
            <div className='mobile'>
            <NavMenuMobile />
            </div>
            
            <Purchase />

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

export default PurchasePage;