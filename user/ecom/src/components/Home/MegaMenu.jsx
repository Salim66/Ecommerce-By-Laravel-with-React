import React, { Component } from 'react'

export class MegaMenu extends Component {

  constructor(props){
    super(props);
    this.megaMenu = this.megaMenu.bind(this);
  }

  componentDidMount(){
    this.megaMenu();
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
    return (
      <>
        <div className='accordionMenuDiv'>
          <div className='accordionMenuDivInside'>

            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>
            <button className='accordion'>
              <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
              Man's Clothing
            </button>
            <div className='panel'>
              <ul>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
                <li><a className='accordionItem' href="#">Man's Tshirt 1</a></li>
              </ul>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default MegaMenu