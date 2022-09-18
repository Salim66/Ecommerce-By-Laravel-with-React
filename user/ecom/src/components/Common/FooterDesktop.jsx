import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Apple from '../../assets/images/apple.png';
import Google from '../../assets/images/google.png';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import parse from 'html-react-parser';

export class FooterDesktop extends Component {
  
  constructor(){
    super();
    this.state = {
        address: '',
        google_app_link: '',
        ios_app_link: '',
        facebook_link: '',
        twitter_link: '',
        instragram_link: '',
        copyright_text: '',
        loaderDiv: '',
        mainDiv: 'd-none'
    }
  }

  componentDidMount(){

    axios.get(AppURL.AllSiteInfo)
    .then(res => {
        if(res.status == 200){
            let json_data = (res.data)[0];
            this.setState({ 
              address: json_data['address'], 
              google_app_link: json_data['google_app_link'], 
              ios_app_link: json_data['ios_app_link'], 
              facebook_link: json_data['facebook_link'], 
              twitter_link: json_data['twitter_link'], 
              instragram_link: json_data['instragram_link'], 
              copyright_text: json_data['copyright_text'], 
              loaderDiv: 'd-none', 
              mainDiv: '' 
            });
        }
    })
    .catch()

  }

  render() {
    return (
      <>
        <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
          <Container>
            <Row className='px-0 py-5'>
              <Col className='p-2' lg={3} md={3} sm={6} xs={12}>

              <div className={ this.state.loaderDiv }>
                    <div class="ph-item">
                        <div class="ph-col-12">
                            <div class="ph-row">
                                <div class="ph-col-6"></div>
                                <div class="ph-col-12"></div>
                                <div class="ph-col-12"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ this.state.mainDiv }>

                <h5 className='footer-menu-title'>OFFICE ADDRESS</h5>

                  { parse(this.state.address) }

                </div>

                <h5 className='footer-menu-title'>SOCIAL LINK</h5>
                <a href={ this.state.facebook_link }><i className='fab m-1 h4 fa-facebook'></i></a>
                <a href={ this.state.instragram_link }><i className='fab m-1 h4 fa-instagram'></i></a>
                <a href={ this.state.twitter_link }><i className='fab m-1 h4 fa-twitter'></i></a>
              </Col>
              <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>THE COMPANY</h5>
                <Link className='footer-link' to='/about'>About Us</Link><br/>
                <Link className='footer-link' to='/company-profile'>Company Profile</Link><br/>
                <Link className='footer-link' to='/contact'>Contact Us</Link><br/>
              </Col>
              <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>MORE INFO</h5>
                <Link className='footer-link' to='/purchase'>How To Purchase</Link><br/>
                <Link className='footer-link' to='/privacy'>Privacy Policy</Link><br/>
                <Link className='footer-link' to='/refund'>Refund Policy</Link><br/>
              </Col>
              <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>DOWNLOAD APPS</h5>
                <a href={ this.state.google_app_link }><img src={Apple} alt="" /></a>
                <a href={ this.state.ios_app_link }><img className='mt-2' src={Google} alt="" /></a>
                <br/>
                Choose Your Language 
                <div id='google_translate_element'></div>
              </Col>
            </Row>
          </Container>

          <Container fluid={'true'} className='bg-dark m-0 pt-3 pb-1 text-center'>
            <Container>
              <Row>
                <div className={ this.state.loaderDiv }>
                    <div class="ph-item">
                        <div class="ph-col-12">
                            <div class="ph-row">
                                <div class="ph-col-6"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ this.state.mainDiv }>
                  <h6 className="text-white">{ this.state.copyright_text }</h6>
                </div>
              </Row>
            </Container>
          </Container>

        </div>
      </>
    )
  }
}

export default FooterDesktop