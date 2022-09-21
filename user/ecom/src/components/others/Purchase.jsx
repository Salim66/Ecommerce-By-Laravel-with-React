import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Breadcrumb } from 'react-bootstrap';
import parse from 'html-react-parser';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

class Purchase extends Component {

    constructor(){
        super();
        this.state = {
            purchase: '',
            loaderDiv: '',
            mainDiv: 'd-none'
        }
    }

    componentDidMount(){

        let siteInfoPurchase = sessionStorage.getItem('siteInfoPurchase');

        if(siteInfoPurchase == null){

            axios.get(AppURL.AllSiteInfo)
            .then(res => {
                if(res.status == 200){
                    let json_data = (res.data)[0]['purchase_guide'];
                    this.setState({ purchase: json_data, loaderDiv: 'd-none', mainDiv: '' });

                    sessionStorage.setItem('siteInfoPurchase', json_data);
                }else {
                    toast.error("Something is wrong", {
                        position: "bottom-center"
                    })
                }
            })
            .catch()

        }else {
            this.setState({ purchase: siteInfoPurchase, loaderDiv: 'd-none', mainDiv: '' });
        }

        

    }

  render() {
    return (
        <Container>
            <div className="breadbody">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/purchase">Purchase</Link></Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>

                    <div className={ this.state.loaderDiv }>
                        <div class="ph-item">
                            <div class="ph-col-12">
                                <div class="ph-row">
                                    <div class="ph-col-4"></div>
                                    <div class="ph-col-8 empty"></div>
                                    <div class="ph-col-6"></div>
                                    <div class="ph-col-6 empty"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-6"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={ this.state.mainDiv }>
                        <h4 className='section-title-login'>How To Purchase</h4>
                        <p className="section-title-contact">
                            { parse(this.state.purchase) }
                        </p>
                    </div>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    )
  }
}

export default Purchase;