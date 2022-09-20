import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import HomeSlider from './HomeSlider';
import axios from 'axios';


export class HomeTopMobile extends Component {

  constructor(){
    super();
    this.state = {
      sliderData: []
    }
  }

  componentDidMount(){
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
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
            <Row className="p-0 m-0 overflow-hidden">
                <Col lg={12} md={12} sm={12}>
                    <HomeSlider sliderData = {this.state.sliderData} />
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default HomeTopMobile;