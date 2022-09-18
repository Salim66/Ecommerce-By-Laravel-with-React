import React, { Component } from 'react';
import axios from 'axios';
import AppURL from '../../api/AppURL';

class MegaMenuAll extends Component {

    constructor(props){
        super(props);

        this.state = {
          catList : []
        }
    }

    componentDidMount(){
        axios.get(AppURL.AllCategoryDetails)
        .then(res => {
          this.setState({ catList: res.data })
        })
        .catch(error => {
          console.log(error);
        })
    }

    megaMenuClick = (e) => {
        e.target.classList.toggle('active');
        let panel = e.target.nextElementSibling;
        if(panel.style.maxHeight){
          panel.style.maxHeight = null;
        }else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

  render() {

    let catList = this.state.catList;

    return (
        <>
        <div className='accordionMenuDivAll'>
          <div className='accordionMenuDivInsideAll'>

            {
              catList.map((catList, i) => (
                <>
                  <button key={i.toString()} onClick={ this.megaMenuClick } className='accordionAll'>
                    <img className='accordionMenuIconAll' src={catList.category_image} alt="" />&nbsp;
                    { catList.category_name }
                  </button>
                  <div className='panelAll'>
                    <ul>
                      {
                        (catList.subcategory).map((sub, i) => (
                          <div key={i.toString()}>
                            <li><a className='accordionItem' href="#">{ sub.subcategory_name }</a></li>
                          </div>
                        ))
                      }                    
                    </ul>
                  </div>            
                </>
              )) 
            }                       

          </div>
        </div>
      </>
    )
  }
}

export default MegaMenuAll;