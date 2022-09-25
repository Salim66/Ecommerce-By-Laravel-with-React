import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Profile extends Component {
  render() {

    let name = '';
    let email = '';

    if(this.props.user){
      name = this.props.user.name;
      email = this.props.user.email;
    }

    if(!localStorage.getItem('token')){
      return <Navigate to='/login' />
    }

    return (
      <>
        <h2>User Profile Page</h2>
        <ul className="list-group">
            <li className="list-group-item">Name: { name }</li>
            <li className="list-group-item">Email: { email }</li>
        </ul>
      </>
    )
  }
}

export default Profile;