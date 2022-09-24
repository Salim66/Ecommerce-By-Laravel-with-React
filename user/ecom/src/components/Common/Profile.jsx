import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <>
        <h2>User Profile Page</h2>
        <ul className="list-group">
            <li className="list-group-item">Name: name</li>
            <li className="list-group-item">Email: email</li>
        </ul>
      </>
    )
  }
}

export default Profile;