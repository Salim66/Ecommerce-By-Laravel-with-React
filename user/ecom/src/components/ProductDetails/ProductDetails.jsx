import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class ProductDetails extends Component {

    imgOnClick = (e) => {
        let select_image = e.target.getAttribute('src');
        let preview_image = document.getElementById('previewImg');
        ReactDOM.findDOMNode(preview_image).setAttribute('src', select_image);
    }

  render() {

    let { productDetails,  productList} = this.props.productData;
    // console.log(productDetails);

    return (
      <>
        <Container  className="BetweenTwoSection" fluid={true}>
            <Row className="p-2">
                <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                    <Row>
                        <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                        <img id='previewImg' className="big_image" src={productList.image} />
                        <Container  className="my-3">
                            <Row>
                                    <Col className="p-0 m-0"  md={3} lg={3} sm={3} xs={3}>
                                        <img onClick={ this.imgOnClick } className="w-50 small_image" src={productDetails.image_one} />
                                    </Col>
                                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                        <img onClick={ this.imgOnClick } className="w-50 small_image" src={productDetails.image_two} />
                                    </Col>
                                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                        <img onClick={ this.imgOnClick } className="w-50 small_image" src={productDetails.image_three} />
                                    </Col>
                                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                        <img onClick={ this.imgOnClick } className="w-50 small_image" src={productDetails.image_four} />
                                    </Col>
                            </Row>
                        </Container>
                        </Col>
                        <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                        <h5 className="Product-Name">{ productList.title }</h5>
                        <h6 className="section-sub-title">{ productDetails.short_description }</h6>
                        <div className="input-group">
                            <div className="Product-price-card d-inline ">Reguler Price { productList.price }</div>
                            <div className="Product-price-card d-inline ">50% Discount</div>
                            <div className="Product-price-card d-inline ">New Price { productList.special_price }</div>
                        </div>
                        <h6 className="mt-2">Category: <span>{ productList.category }</span></h6>
                        <h6 className="mt-2">Sub-Category: <span>{ productList.subcategory }</span></h6>
                        <h6 className="mt-2">Brand: <span>{ productList.brand }</span></h6>
                        <h6 className="mt-2">Remark: <span>{ productList.remark }</span></h6>
                        <h6 className="mt-2">Choose Color</h6>
                        <div className="input-group">
                            <div className="form-check mx-1">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label" htmlFor="exampleRadios1">Black</label>
                            </div>
                            <div className="form-check mx-1">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label" htmlFor="exampleRadios1">Green</label>
                            </div>
                            <div className="form-check mx-1">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label" htmlFor="exampleRadios1">Red</label>
                            </div>
                        </div>

                        <h6 className="mt-2">Choose Size</h6>
                        <div className="input-group">
                            <div className="form-check mx-1">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label" htmlFor="exampleRadios1">X</label>
                            </div>
                            <div className="form-check mx-1">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label" htmlFor="exampleRadios1">XX</label>
                            </div>
                            <div className="form-check mx-1">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label" htmlFor="exampleRadios1">XXXX</label>
                            </div>
                        </div>

                        <h6 className="mt-2">Quantity</h6>
                        <input  className="form-control text-center w-50" type="number" />

                        <div className="input-group mt-3">
                            <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                            <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                            <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                        </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="" md={6} lg={6} sm={12} xs={12}>
                        <h6 className="mt-2">DETAILS</h6>
                        <p>{ productDetails.long_description }</p>
                        </Col>

                        <Col className="" md={6} lg={6} sm={12} xs={12}>
                        <h6 className="mt-2">REVIEWS</h6>
                        <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                        <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                        <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export default ProductDetails;