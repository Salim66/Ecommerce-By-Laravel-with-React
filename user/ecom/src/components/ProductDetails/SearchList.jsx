import React, { Component } from 'react';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SearchList extends Component {

    constructor(){
        super();
    }

  render() {
    let searchData = this.props.searchData;

    return (
        <>
        <Container className='text-center'>
          <div className="breadbody">
              <Breadcrumb>
                  <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                  <Breadcrumb.Item><Link to={"/searchbykey/"+this.props.searchKey}>Search For: { this.props.searchKey }</Link></Breadcrumb.Item>
              </Breadcrumb>
          </div>

          <div className='section-title text-center mb-55'>
            <h2>{ this.props.searchKey }</h2>
          </div>

          <Row>

            {
              searchData.map((data, i) => {
                if(data.special_price == 'na'){
                  return <Col className="p-0" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Link className='text-link' to={'/productdetails/'+data.id}>
                    <Card className="image-box card w-100">
                      <img className='center w-75' src={ data.image } alt="product-image" />
                      <Card.Body>
                        <p className='product-name-on-card'>{ data.title }</p>
                        <p className='product-price-on-card'>Price: { data.price }</p>
                      </Card.Body>
                    </Card>
                    </Link>
                  </Col>
                }else {
                  return <Col className="p-0" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Link className='text-link' to={'/productdetails/'+data.id}>
                    <Card className="image-box card w-100">
                      <img className='center w-75' src={ data.image } alt="product-image" />
                      <Card.Body>
                        <p className='product-name-on-card'>{ data.title }</p>
                        <p className='product-price-on-card'>Price: <strike className="text-secondary">{ data.price }</strike> { data.special_price }</p>
                      </Card.Body>
                    </Card>
                    </Link>
                  </Col>
                }
              })
            }
            

          
          </Row>
        </Container>
      </>
    )
  }
}

export default SearchList;