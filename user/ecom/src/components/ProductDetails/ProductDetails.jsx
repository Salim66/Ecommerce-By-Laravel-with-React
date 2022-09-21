import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class ProductDetails extends Component {

    imgOnClick = (e) => {
        let select_image = e.target.getAttribute('src');
        let preview_image = document.getElementById('previewImg');
        ReactDOM.findDOMNode(preview_image).setAttribute('src', select_image);
    }

    priceOption(price, special_price){
        if(special_price == 'na'){
            return (
                <p className='product-price-on-card'>Price: { price }</p>
            )
        }else {
            return (
                <p className='product-price-on-card'>Price: <strike className="text-secondary">{ price }</strike> { special_price }</p>
            )
        }
    }

  render() {

    let { productDetails,  productList} = this.props.productData;
    // console.log(productDetails);

    let colorDiv = 'd-none';
    let colorOption = '';
    if(productDetails.color != 'na'){
        let colorArray = productDetails.color.split(',');
        colorOption = colorArray.map((data, i) => {
            return <option value={ data }>{ data }</option>
        })
        colorDiv = '';
    }else {
        colorDiv = 'd-none';
    }

    let sizeDiv = 'd-none';
    let sizeOption = '';
    if(productDetails.size != 'na'){
        let sizeArray = productDetails.size.split(',');
        sizeOption = sizeArray.map((data, i) => {
            return <option value={ data }>{ data }</option>
        })
        sizeDiv = '';
    }else {
        sizeDiv = 'd-none';
    }

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
                        { this.priceOption(productList.price, productList.special_price) }
                        <h6 className="mt-2">Category: <b>{ productList.category }</b></h6>
                        <h6 className="mt-2">Sub-Category: <b>{ productList.subcategory }</b></h6>
                        <h6 className="mt-2">Brand: <b>{ productList.brand }</b></h6>
                        <h6 className="mt-2">Remark: <b>{ productList.remark }</b></h6>

                        <div className={ colorDiv }>
                            <h6 className="mt-2">Choose Color</h6>
                            <select className='form-control form-select'>
                                <option value='0'>Chose Color</option>
                                {colorOption}
                            </select>
                        </div>

                        <div className={ sizeDiv }>
                            <h6 className="mt-2">Choose Size</h6>
                            <select className='form-control form-select'>
                                <option value='0'>Chose Size</option>
                                {sizeOption}
                            </select>
                        </div>


                        <h6 className="mt-2">Quantity</h6>
                        <select className='form-control form-select'>
                            <option value='0'>Select Quantity</option>
                            <option value='01'>01</option>
                            <option value='02'>02</option>
                            <option value='03'>03</option>
                            <option value='04'>04</option>
                            <option value='05'>05</option>
                            <option value='06'>06</option>
                            <option value='07'>07</option>
                            <option value='08'>08</option>
                            <option value='09'>09</option>
                            <option value='10'>10</option>
                        </select>
                        

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