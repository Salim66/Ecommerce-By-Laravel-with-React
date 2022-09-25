import React, { Component } from 'react';
import FooterDesktop from '../components/Common/FooterDesktop';
import FooterMobile from '../components/Common/FooterMobile';
import NavMenuDesktop from '../components/Common/NavMenuDesktop';
import NavMenuMobile from '../components/Common/NavMenuMobile';
import UserRegister from '../components/Common/UserRegister';

export class UserRegisterPage extends Component {

  componentDidMount(){
    window.scroll(0,0);
  }

  render() {

    const user = this.props.user;
    const setUser = this.props.setUser;

    return (
        <>
            <div className='desktop'>
            <NavMenuDesktop />
            </div>
            <div className='mobile'>
            <NavMenuMobile />
            </div>
            
            <UserRegister user={user} setUser={setUser} />

            <div className='desktop'>
            <FooterDesktop />
            </div>        
            <div className='mobile'>
            <FooterMobile />
            </div>        
        </>
    )
  }
};

export default UserRegisterPage;