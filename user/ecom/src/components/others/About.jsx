import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Breadcrumb } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';


class About extends Component {

    constructor(){
        super();
        this.state = {
            about: '',
            loaderDiv: '',
            mainDiv: 'd-none'
        }
    }

    componentDidMount(){

        axios.get(AppURL.AllSiteInfo)
        .then(res => {
            if(res.status == 200){
                let json_data = (res.data)[0]['about'];
                this.setState({ about: json_data, loaderDiv: 'd-none', mainDiv: '' });
            }
        })
        .catch()

    }

  render() {
    return (
        <Container>
            <div className="breadbody">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/about">About</Link></Breadcrumb.Item>
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
                        <h4 className='section-title-login'>About Us</h4>
                        <p className="section-title-contact">
                            { parse(this.state.about) }
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
  }
}

export default About;