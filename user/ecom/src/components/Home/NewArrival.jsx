import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AppURL from '../../api/AppURL';
import axios from 'axios';
import NewLoading from '../Placeholder/NewLoading';

class NewArrival extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      new_data : [],
      loaderDiv: '',
      mainDiv: 'd-none'
    }
  }

  next(){
    this.slider.slickNext();
  }

  previous(){
    this.slider.slickPrev();
  }

  componentDidMount(){

    axios.get(AppURL.productListByRemark('NEW'))
    .then(res => {
      this.setState({ new_data: res.data, loaderDiv: 'd-none', mainDiv: '' });
    })
    .catch(error => {
      console.log(error);
    })

  }

  render() {

    let new_data = this.state.new_data;


    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <>
        <Container className='text-center' fluid={true}>

          <div className='section-title text-center mb-55'>
            <h2>NEW ARRIVAL &nbsp;
              <a className='btn btn-sm ml-2 site-btn' onClick={ this.previous }><i className='fa fa-angle-left'></i></a>&nbsp;
              <a className='btn btn-sm ml-2 site-btn' onClick={ this.next }><i className='fa fa-angle-right'></i></a>
            </h2>
            <p>Some of Our Exclusive Collection, You May Like</p>
          </div>

          <div className={ this.state.loaderDiv }>
              <NewLoading isLoading={ this.state.loaderDiv } />
          </div>

          <div className={ this.state.mainDiv }>
          <Row>
            <Slider ref={ c => (this.slider = c) } {...settings}>
              {
                new_data.map((data, i) => {
                  if(data.special_price == 'na'){
                    return <div>
                      <Card className="image-box card">
                        <img className='center' src={ data.image } />
                        <Card.Body>
                          <p className='product-name-on-card'>{ data.title }</p>
                          <p className='product-price-on-card'>Price: { data.price }</p>
                        </Card.Body>
                      </Card>
                    </div>
                  }else {
                    return <div>
                      <Card className="image-box card">
                        <img className='center' src={ data.image } />
                        <Card.Body>
                          <p className='product-name-on-card'>{ data.title }</p>
                          <p className='product-price-on-card'>Price: <strike className="text-secondary">{ data.price }</strike> { data.special_price }</p>
                        </Card.Body>
                      </Card>
                    </div>
                  }
                })
              }
              
              
            </Slider>
          </Row>
          </div>
        </Container>
      </>
    )
  }
}

export default NewArrival