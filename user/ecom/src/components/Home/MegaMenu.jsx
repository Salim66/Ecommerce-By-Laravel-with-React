import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class MegaMenu extends Component {

  constructor(props){
    super();
  }


  menuItemClick = (e) => {
    e.target.classList.toggle("active");
    var panel = e.target.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    }else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  render() {

    let catList = this.props.data;


    return (
      <>
        <div className='accordionMenuDiv'>
          <div className='accordionMenuDivInside'>

          {
            catList.map((catList, i) => (
              <div key={i.toString()}>
                <button onClick={ this.menuItemClick } className='accordion'>
                  <img className='accordionMenuIcon' src={ catList.category_image } alt="" />&nbsp;
                  { catList.category_name }
                </button>
                <div className='panel'>
                  <ul>
                    {
                      (catList.subcategory).map((sub, i) => (
                        <div key={i.toString()}>
                          <li><Link className='accordionItem' to={"/productsubcategory/"+catList.category_name+"/"+sub.subcategory_name}>{ sub.subcategory_name }</Link></li>
                        </div>
                      ))
                    }                    
                  </ul>
                </div>
              </div>
            ))
          }
            
          </div>
        </div>
      </>
    )
  }
}

export default MegaMenu