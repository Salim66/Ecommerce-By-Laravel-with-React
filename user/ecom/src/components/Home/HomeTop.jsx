import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HomeSlider from './HomeSlider';
import MegaMenu from './MegaMenu';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import SliderLoading from '../Placeholder/SliderLoading';

class HomeTop extends Component {

  constructor(){
    super();
    this.state = {
      catList : [],
      sliderData: [],
      loaderDiv: '',
      mainDiv: 'd-none'
    }
  }

  componentDidMount(){
    axios.get(AppURL.AllCategoryDetails)
    .then(res => {
      this.setState({ catList: res.data, loaderDiv: 'd-none', mainDiv: '' });
    })
    .catch(error => {
      console.log('error');
    })

    axios.get(AppURL.AllSlider)
    .then(res => {
      this.setState({ sliderData: res.data, loaderDiv: 'd-none', mainDiv: '' });
    })
    .catch(error => {
      console.log('error');
    })
  }

  render() {
    return (
      <>
        <Container className="p-0 m-0 overflow-hidden marginTop" fluid={true}>
            <div className={ this.state.loaderDiv }>
                <SliderLoading />
            </div>

            <div className={ this.state.mainDiv }>
            <Row>                
                <Col lg={3} md={3} sm={12}>
                    <MegaMenu data={ this.state.catList } />
                </Col>
                <Col lg={9} md={9} sm={12}>
                    <HomeSlider sliderData = {this.state.sliderData} />
                </Col>                
            </Row>
            </div>
        </Container>
      </>
    )
  }
}

export default HomeTop;