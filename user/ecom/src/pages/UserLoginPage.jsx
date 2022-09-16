import React, { Component } from 'react';
import FooterDesktop from '../components/Common/FooterDesktop';
import FooterMobile from '../components/Common/FooterMobile';
import NavMenuDesktop from '../components/Common/NavMenuDesktop';
import NavMenuMobile from '../components/Common/NavMenuMobile';
import UserLogin from '../components/Common/UserLogin';
class UserLoginPage extends Component {
  render() {
    return (
        <>
        <div className='desktop'>
          <NavMenuDesktop />
        </div>
        <div className='mobile'>
          <NavMenuMobile />
        </div>
        
        <UserLogin />

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

export default UserLoginPage;