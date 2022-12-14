import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Breadcrumb } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Link, Navigate } from 'react-router-dom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import SuggestedProduct from './SuggestedProduct';
import ReviewList from './ReviewList';
import cogoToast from 'cogo-toast';
import AppURL from '../../api/AppURL';
import axios from 'axios';

class ProductDetails extends Component {

    constructor(){
        super();
        this.state = {
            previewImg: "",
            isColor: null,
            isSize: null,
            color: '',
            size: '',
            quantity: '',
            productCode: null,
            addToCart: "Add To Cart",
            cartCountPageRefresh: false,
            addToFavourite: "Favourite",
            orderNow: "Order Now",
            PageRedirectStatus: false,
        }
    }

    imgOnClick = (e) => {
        let select_image = e.target.getAttribute('src');
        // let preview_image = document.getElementById('previewImg');
        // ReactDOM.findDOMNode(preview_image).setAttribute('src', select_image);
        this.setState({previewImg: select_image});
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

    addToCart = () => {

        let isColor = this.state.isColor;
        let isSize = this.state.isSize;
        let color = this.state.color;
        let size = this.state.size;
        let quantity = this.state.quantity;
        let productCode = this.state.productCode;
        let email = this.props.user.email;

        if(isColor === "YES" && color.length === 0){
            cogoToast.error('Please select any color', {position: 'top-right'});
        }else if (isSize === "YES" && size.length === 0){
            cogoToast.error('Please select any size', {position: 'top-right'});
        }else if(quantity.length === 0){
            cogoToast.error('Please select quantity', {position: 'top-right'});
        }else if(!localStorage.getItem('token')){
            cogoToast.warn('Please you have to logged in first', {position: 'top-right'});
        }else {
            this.setState({ addToCart: "Adding....." });
            let myFormData = new FormData();
            myFormData.append("color", color);
            myFormData.append("size", size);
            myFormData.append("quantity", quantity);
            myFormData.append("product_code", productCode);
            myFormData.append("email", email);

            axios.post(AppURL.addToCart, myFormData)
            .then(res => {
                cogoToast.success('Product added successfully', {position: 'top-right'});
                this.setState({ addToCart: "Add To Cart" });
                this.setState({ cartCountPageRefresh: true });
                this.pageRefresh();
            })
            .catch(error => {
                cogoToast.error('Your request is not done! Try Again', {position: 'top-right'});
                this.setState({ addToCart: "Add To Cart" });
            })
        }

    }

    orderNow = () => {

        let isColor = this.state.isColor;
        let isSize = this.state.isSize;
        let color = this.state.color;
        let size = this.state.size;
        let quantity = this.state.quantity;
        let productCode = this.state.productCode;
        let email = this.props.user.email;

        if(isColor === "YES" && color.length === 0){
            cogoToast.error('Please select any color', {position: 'top-right'});
        }else if (isSize === "YES" && size.length === 0){
            cogoToast.error('Please select any size', {position: 'top-right'});
        }else if(quantity.length === 0){
            cogoToast.error('Please select quantity', {position: 'top-right'});
        }else if(!localStorage.getItem('token')){
            cogoToast.warn('Please you have to logged in first', {position: 'top-right'});
        }else {
            this.setState({ addToCart: "Adding....." });
            let myFormData = new FormData();
            myFormData.append("color", color);
            myFormData.append("size", size);
            myFormData.append("quantity", quantity);
            myFormData.append("product_code", productCode);
            myFormData.append("email", email);

            axios.post(AppURL.addToCart, myFormData)
            .then(res => {
                cogoToast.success('Product added successfully', {position: 'top-right'});
                this.setState({ orderNow: "Order Now" });
                this.setState({ PageRedirectStatus: true });
                this.pageRedirect();
            })
            .catch(error => {
                cogoToast.error('Your request is not done! Try Again', {position: 'top-right'});
                this.setState({ orderNow: "Order Now" });
            })
        }

    }

    pageRedirect = () => {
        if(this.state.PageRedirectStatus === true){
            return (
                <Navigate to="/cart" />
            )
        }
    }

    addToFavourite = () => {

        this.setState({ addToFavourite: "Adding...." });
        let productCode = this.state.productCode;
        let email = this.props.user.email;

        if(!localStorage.getItem('token')){
            cogoToast.warn('Please you have to logged in first', {position: 'top-right'});
        }else {

            this.setState({ addToFavourite: "Adding....." });

            axios.get(AppURL.addToFavourite(productCode, email))
            .then(res => {
                cogoToast.success('Product added successfully', {position: 'top-right'});
                this.setState({ addToFavourite: "Favourite" });
                this.pageRefresh();
            })
            .catch(error => {
                cogoToast.error('Your request is not done! Try Again', {position: 'top-right'});
                this.setState({ addToCart: "Favourite" });
            })
        }

    }

    colorOnChange = (e) => {
        let color = e.target.value;
        this.setState({ color: color });
    }

    sizeOnChange = (e) => {
        let size = e.target.value;
        this.setState({ size: size });
    }

    quantityOnChange = (e) => {
        let quantity = e.target.value;
        this.setState({ quantity: quantity });
    }

    pageRefresh = () => {
        if(this.state.cartCountPageRefresh === true){
            let URL = window.location;
            return (
                <Navigate to={URL} />
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

    if(this.state.previewImg === ""){
        this.setState({ previewImg: productList.image })
    }

    if(this.state.isColor == null){
        if(productDetails.color!="na"){
            this.setState({isColor: "YES"});
        }else {
            this.setState({isColor: "NO"});
        }
    }

    if(this.state.isSize == null){
        if(productDetails.size!="na"){
            this.setState({isSize: "YES"});
        }else {
            this.setState({isSize: "NO"});
        }
    }

    if(this.state.productCode === null){
        this.setState({productCode: productList.product_code})
    }
    

    return (
      <>
        <Container  className="BetweenTwoSection" fluid={true}>
            <div className="breadbody">
              <Breadcrumb>
                  <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                  <Breadcrumb.Item><Link to={"/productcategory/"+productList.category}>{ productList.category }</Link></Breadcrumb.Item>
                  <Breadcrumb.Item><Link to={"/productsubcategory/"+productList.category+"/"+productList.subcategory}>{ productList.subcategory }</Link></Breadcrumb.Item>
                  <Breadcrumb.Item><Link to={"/productdetails/"+productList.id}>{ productList.title }</Link></Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <Row className="p-2">
                <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                    <Row>
                        <Col className="p-3" md={6} lg={6} sm={12} xs={12}>

                        {/* <img id='previewImg' className="big_image" src={productList.image} /> */}

                        <div className='big_image'>
                            <InnerImageZoom zoomScale={1.8} zoomType={"hover"} src={this.state.previewImg} zoomSrc={this.state.previewImg} />
                        </div>

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
                        <h6 className="mt-2">Product Code: <b>{ productList.product_code }</b></h6>

                        <div className={ colorDiv }>
                            <h6 className="mt-2">Choose Color</h6>
                            <select onChange={ this.colorOnChange } className='form-control form-select'>
                                <option value='0'>Chose Color</option>
                                {colorOption}
                            </select>
                        </div>

                        <div className={ sizeDiv }>
                            <h6 className="mt-2">Choose Size</h6>
                            <select onChange={ this.sizeOnChange } className='form-control form-select'>
                                <option value='0'>Chose Size</option>
                                {sizeOption}
                            </select>
                        </div>


                        <h6 className="mt-2">Quantity</h6>
                        <select onChange={ this.quantityOnChange } className='form-control form-select'>
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
                            <button onClick={ this.addToCart } className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  { this.state.addToCart }</button>
                            <button onClick={ this.orderNow } className="btn btn-primary m-1"> <i className="fa fa-car"></i> { this.state.orderNow }</button>
                            <button onClick={ this.addToFavourite } className="btn btn-primary m-1"> <i className="fa fa-heart"></i> { this.state.addToFavourite }</button>
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
                            <ReviewList code={productList.product_code} />
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
        <SuggestedProduct subcategory={ productList.subcategory } />
        {this.pageRedirect()}
        {this.pageRefresh()}
      </>
    )
  }
}

export default ProductDetails;