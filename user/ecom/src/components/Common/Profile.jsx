import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Ariyan from '../../assets/images/kaziariyan.png';
import { Link } from 'react-router-dom';

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
       <Container>

          <div className='section-title text-center mb-55'>
            <h2>Your Profile</h2>
          </div>

          <Row>
            <Col lg={4} md={4} sm={12}>
              <Card>
                <img src={ Ariyan } alt="" className='userProfile' />
                <ListGroup>
                  <ListGroupItem><Link to="/orderlist" className='text-left'>Order List</Link></ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col lg={8} md={8} sm={12}>
              <ul className="list-group">
                  <li className="list-group-item">Name: { name }</li>
                  <li className="list-group-item">Email: { email }</li>
              </ul>
            </Col>
          </Row>

        </Container>
      </>
    )
  }
}

export default Profile;