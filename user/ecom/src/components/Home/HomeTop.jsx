import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HomeSlider from './HomeSlider';
import MegaMenu from './MegaMenu';
import axios from 'axios';
import AppURL from '../../api/AppURL';

class HomeTop extends Component {

  constructor(){
    super();
    this.state = {
      catList : [],
      sliderData: []
    }
  }

  componentDidMount(){
    axios.get(AppURL.AllCategoryDetails)
    .then(res => {
      this.setState({ catList: res.data });
    })
    .catch(error => {
      console.log('error');
    })

    axios.get(AppURL.AllSlider)
    .then(res => {
      this.setState({ sliderData: res.data });
    })
    .catch(error => {
      console.log('error');
    })
  }

  render() {
    return (
      <>
        <Container className="p-0 m-0 overflow-hidden marginTop" fluid={true}>
            <Row>
                <Col lg={3} md={3} sm={12}>
                    <MegaMenu data={ this.state.catList } />
                </Col>
                <Col lg={9} md={9} sm={12}>
                    <HomeSlider sliderData = {this.state.sliderData} />
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default HomeTop;