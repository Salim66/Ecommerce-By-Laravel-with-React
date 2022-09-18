import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import parse from 'html-react-parser';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Purchase extends Component {

    constructor(){
        super();
        this.state = {
            purchase: ''
        }
    }

    componentDidMount(){

        let siteInfoPurchase = sessionStorage.getItem('siteInfoPurchase');

        if(siteInfoPurchase == null){

            axios.get(AppURL.AllSiteInfo)
            .then(res => {
                if(res.status == 200){
                    let json_data = (res.data)[0]['purchase_guide'];
                    this.setState({ purchase: json_data });

                    sessionStorage.setItem('siteInfoPurchase', json_data);
                }else {
                    toast.error("Something is wrong", {
                        position: "bottom-center"
                    })
                }
            })
            .catch()

        }else {
            this.setState({ purchase: siteInfoPurchase });
        }

        

    }

  render() {
    return (
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                    <h4 className='section-title-login'>How To Purchase</h4>
                    <p className="section-title-contact">
                        { parse(this.state.purchase) }
                    </p>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    )
  }
}

export default Purchase;