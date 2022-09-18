import React, { Component } from 'react'

export class MegaMenu extends Component {

  constructor(props){
    super(props);
  }


  megaMenu(){
    let acc = document.getElementsByClassName("accordion");
    let acc_length = acc.length;
    for (let i = 0; i < acc_length; i++) {
      acc[i].addEventListener('click', function(){
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight){
          panel.style.maxHeight = null;
        }else {
          panel.style.maxHeight = panel.style.scrolHeight + "px";
        }
      });      
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
                <button className='accordion'>
                  <img className='accordionMenuIcon' src={ catList.category_image } alt="" />&nbsp;
                  { catList.category_name }
                </button>
                <div className='panel'>
                  <ul>
                    <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                    <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
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