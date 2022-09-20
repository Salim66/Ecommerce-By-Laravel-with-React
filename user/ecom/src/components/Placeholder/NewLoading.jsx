import React, { Component } from 'react';

class NewLoading extends Component {
  render() {
    let isLoading = this.props.isLoading;

    return (
        <div className={ isLoading }>
            <div className="row">

                <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 p-0">
                    <a href="" className='card image-box w-100 h-100'>
                        <div class="ph-picture"></div>
                        <div className="ph-item">
                            <div className="ph-col-12">
                                <div className="ph-row">
                                    <div className="ph-col-12 small"></div>
                                    <div className="ph-col-12 small"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 p-0">
                    <a href="" className='card image-box w-100 h-100'>
                        <div class="ph-picture"></div>
                        <div className="ph-item">
                            <div className="ph-col-12">
                                <div className="ph-row">
                                    <div className="ph-col-12 small"></div>
                                    <div className="ph-col-12 small"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 p-0">
                    <a href="" className='card image-box w-100 h-100'>
                        <div class="ph-picture"></div>
                        <div className="ph-item">
                            <div className="ph-col-12">
                                <div className="ph-row">
                                    <div className="ph-col-12 small"></div>
                                    <div className="ph-col-12 small"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 p-0">
                    <a href="" className='card image-box w-100 h-100'>
                        <div class="ph-picture"></div>
                        <div className="ph-item">
                            <div className="ph-col-12">
                                <div className="ph-row">
                                    <div className="ph-col-12 small"></div>
                                    <div className="ph-col-12 small"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                                
            </div>
        </div>
    )
  }
}

export default NewLoading;