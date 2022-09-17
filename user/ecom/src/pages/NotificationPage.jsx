import React, { Component } from 'react';
import FooterDesktop from '../components/Common/FooterDesktop';
import FooterMobile from '../components/Common/FooterMobile';
import NavMenuDesktop from '../components/Common/NavMenuDesktop';
import NavMenuMobile from '../components/Common/NavMenuMobile';
import Notification from '../components/Notification/Notification';

class NotificationPage extends Component {
  render() {
    return (
      <>
            <div className='desktop'>
            <NavMenuDesktop />
            </div>
            <div className='mobile'>
            <NavMenuMobile />
            </div>
            
            <Notification />

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

export default NotificationPage;