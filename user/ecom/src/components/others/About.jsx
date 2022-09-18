import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import parse from 'html-react-parser';


class About extends Component {

    constructor(){
        super();
        this.state = {
            about: ''
        }
    }

    componentDidMount(){

        axios.get(AppURL.AllSiteInfo)
        .then(res => {
            if(res.status == 200){
                let json_data = (res.data)[0]['about'];
                this.setState({ about: json_data });
            }
        })
        .catch()

    }

  render() {
    return (
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                    <h4 className='section-title-login'>About Us</h4>
                    <p className="section-title-contact">
                        { parse(this.state.about) }
                    </p>
                </Col>
            </Row>
        </Container>
    )
  }
}

export default About;