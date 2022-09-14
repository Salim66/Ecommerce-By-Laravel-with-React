import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next(){
    this.slider.slickNext();
  }

  previous(){
    this.slider.slickPrev();
  }

  render() {

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

          <Row>
            <Slider ref={ c => (this.slider = c) } {...settings}>
              <div>
                <Card className="image-box card">
                  <img className='center' src="https://rukminim1.flixcart.com/image/832/832/krjjde80/watch/c/o/e/7088-silver-hmtr-original-imag5b9qe7xhc4jz.jpeg?q=70" alt="product-image" />
                  <Card.Body>
                    <p className='product-name-on-card'>7088-SILVER DAY AND DATE WORKING Analog Watch</p>
                    <p className='product-price-on-card'>Price: $99</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className='center' src="https://rukminim1.flixcart.com/image/832/832/ksdjma80/watch/3/w/u/7107-blue-hmtr-original-imag5yhwpuftz4a5.jpeg?q=70" alt="product-image" />
                  <Card.Body>
                    <p className='product-name-on-card'>7107-BLUE ROYAL BLUE WITH DAY AND DATE WORKING Analog Watch</p>
                    <p className='product-price-on-card'>Price: $91</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className='center' src="https://rukminim1.flixcart.com/image/832/832/k8ro3gw0/watch/n/h/w/68011pp08-fastrack-original-imafqpgyxj24wf6b.jpeg?q=70" alt="product-image" />
                  <Card.Body>
                    <p className='product-name-on-card'>68011PP08 Analog Watch</p>
                    <p className='product-price-on-card'>Price: $80</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className='center' src="https://rukminim1.flixcart.com/image/832/832/ksw4ccw0/watch/6/b/c/38024pp25-fastrack-men-original-imag6cu9xkhbgz4y.jpeg?q=70" alt="product-image" />
                  <Card.Body>
                    <p className='product-name-on-card'>38024PP25 Minimalists Analog Watch</p>
                    <p className='product-price-on-card'>Price: $84</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className='center' src="https://rukminim1.flixcart.com/image/832/832/k66sh3k0/watch/q/c/m/87018yl01c-sonata-original-imafzpgfntsghskv.jpeg?q=70" alt="product-image" />
                  <Card.Body>
                    <p className='product-name-on-card'>NP87018YL01W Analog Watch</p>
                    <p className='product-price-on-card'>Price: $62</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className='center' src="https://rukminim1.flixcart.com/image/832/832/kzx1a4w0/watch/l/p/z/-original-imagbsz5k6vtt7uw.jpeg?q=70" alt="product-image" />
                  <Card.Body>
                    <p className='product-name-on-card'>O-65591CMLB Multifunction Analog Watch</p>
                    <p className='product-price-on-card'>Price: $150</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className='center' src="https://rukminim1.flixcart.com/image/832/832/krgohow0/watch/2/n/k/hm-6742-hmte-original-imag58tr2mybhfhv.jpeg?q=70" alt="product-image" />
                  <Card.Body>
                    <p className='product-name-on-card'>HM-6742 Day&Date Series Analog Watch</p>
                    <p className='product-price-on-card'>Price: $30</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className='center' src="https://rukminim1.flixcart.com/image/832/832/kt64fbk0/watch/f/a/c/1-pk9094-5-piaoma-women-original-imag6kzxhufkbkqt.jpeg?q=70" alt="product-image" />
                  <Card.Body>
                    <p className='product-name-on-card'>PK9094-5 Analog-Digital BIG SIZE 40 MM</p>
                    <p className='product-price-on-card'>Price: $38</p>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </Row>
        </Container>
      </>
    )
  }
}

export default NewArrival