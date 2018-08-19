import Link from 'next/link'
import React from 'react'

import Page from '../components/page'
import Layout from '../components/layout'
import Swiper from 'swiper/dist/js/swiper.js'

import $ from 'jquery'; 


//import WOW from 'wowjs' 

export default class extends Page {

  componentDidMount(){
    window.WOW = require('wowjs').WOW;
    new WOW({
      mobile: false
    }).init();
       
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
    });
    //this.galleryTop.controller.control = galleryThumbs;
   // this.galleryThumbs.controller.control = galleryTop;
   
   window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount(){
  window.removeEventListener('scroll', this.handleScroll);
}
handleScroll = () => {
  console.log(window.scrollY);
}

  render() {
    return (
      
      <Layout {...this.props} navmenu={false} container={false}>
     
         
          <div className="page"> 
          
           </div>
        
          <div className="figure">     
              <div className="contenu">
              <div className="row1">
                <div className="text">Hello, I'm
                  <div className="name">&nbsp;Baptiste Deruelle</div>
                  . 
                  </div>
                  </div>
                  <div className="row2">
                    <div className="text">I'm a full-stack web developer.</div>
                  </div>            
                  <div className="button">
                  <button>View my work <i class="fa fa-arrow-right"></i></button>
                </div>             
              </div>     
           </div>
        
          <div className="skills" id="skills">
      <div className="title1">Skills</div>
      <div className="underline"></div>
      <div className="rowContainer">
        <div className="card wow fadeInLeftBig"  data-wow-delay="1.5s">
          <div className="circle"><i class="fa fa-tachometer"></i></div>
          <div className="title">Fast</div>
          <div className="text">Fast load times and lag free interaction, my highest priority.</div>
        </div>
        <div className="card wow fadeInLeftBig"  data-wow-delay="1s">
          <div className="circle"><i class="fa fa-desktop"></i></div>
          <div className="title">Responsive</div>
          <div className="text">My layouts will work on any device, big or small.</div>
        </div>
        <div className="card wow fadeInLeftBig"  data-wow-delay="0.5s">
          <div className="circle"><i class="fa fa-lightbulb-o"></i></div>
          <div className="title">Intuitive</div>
          <div className="text">Strong preference for easy to use, intuitive UX/UI.</div>
        </div>
        <div className="card wow fadeInLeftBig">
          <div className="circle"><i class="fa fa-rocket"></i></div>
          <div className="title">Dynamic</div>
          <div className="text">Websites don't have to be static, I love making pages come to life.</div>
        </div>
      </div>
      <div className="container36">
        <div className="profile  wow fadeInLeftBig">
          <div className="circle">
           
          </div>
          <div className="title">Who's this guy?</div>
          <div className="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni."</div>
        </div>
        <div className="skills-detail wow fadeInRightBig">

          <div className="bar">         
            <div  className="fill scss  wow slideInLeft" data-wow-delay="1s">
              <div className="tag">SCSS</div>
              <span  className="percent">80%</span>
            </div>
           
          </div>

          <div className="bar">         
            <div className="fill html  wow slideInLeft" data-wow-delay="1s">
              <div className="tag">HTML</div>
              <span className="percent wow ">90%</span>
            </div>
            
          </div>

          <div className="bar">         
            <div className="fill react  wow slideInLeft"data-wow-delay="1s">
              <div className="tag">React</div>
              <span className="percent">70%</span>
            </div>
            
          </div>

          <div className="bar">         
            <div className="fill javascript  wow slideInLeft"data-wow-delay="1s">
              <div className="tag">Javascript</div>
              <span className="percent">80%</span>
            </div>
            
          </div>

          <div className="bar">         
            <div className="fill angular  wow slideInLeft"data-wow-delay="1s">
              <div className="tag">Angular</div>
              <span className="percent">70%</span>
            </div>
            
          </div>

          <div className="bar">         
            <div className="fill node  wow slideInLeft"data-wow-delay="1s">
              <div className="tag">Node.js</div>
              <span className="percent">50%</span>
            </div>
            
          </div>

          <div className="bar">         
            <div className="fill ui  wow slideInLeft"data-wow-delay="1s">
              <div className="tag">UI Design</div>
              <span className="percent">50%</span>
            </div>
            
          </div>

          <div className="bar">         
            <div className="fill ps  wow slideInLeft"data-wow-delay="1s">
              <div className="tag">Photoshop</div>
              <span className="percent">40%</span>
            </div>
            
          </div>


        </div>
      </div>
    </div>
   
   
    <div class="projects">
        
        <div class="projectContainer">
      
            <div class="project1">
            <div className="description">
                <div class="titleProject">Reims Esport</div>
                <div class="stacks">
                    <span class="stack">Angular 2</span>
                    <span class="stack">Node.js</span>
                    <span class="stack">MongoDB</span>
                    <span class="stack">Typescript</span>
                </div>
                <div class="descriptionProject">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
               
                </div>
                <div class="imagesProject">
                    <div class="swiper-container gallery-top">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" style={{backgroundImage:'url(/static/images/ReimsEsportPC.png)'}}></div>
                            <div class="swiper-slide" style={{backgroundImage:'url(/static/images/ReimsEsportMobile.png)'}}></div>
                            <div class="swiper-slide" style={{backgroundImage:'url(/static/images/ReimsEsportPC.png)'}}></div>
                            <div class="swiper-slide"  style={{backgroundImage:'url(/static/images/ReimsEsportMobile.png)'}}></div>
                            <div class="swiper-slide" style={{backgroundImage:'url(/static/images/ReimsEsportPC.png)'}}></div>
                            <div class="swiper-slide"  style={{backgroundImage:'url(/static/images/ReimsEsportMobile.png)'}}></div>
                        </div>
                       
                        <div class="swiper-button-next swiper-button-white"></div>
                        <div class="swiper-button-prev swiper-button-white"></div>
                    </div>
                   


                </div>
            </div>
          


            <div class="project2">
                <div class="titleProject">Locavert</div>
                <div class="link">https://www.reimsesport.fr</div>
                <div class="descriptionProject">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div class="imagesProject last">
                    <div class="swiper-container gallery-top">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" style={{backgroundImage:'url(../../assets/images/locavert.png)'}}></div>
                            <div class="swiper-slide" style={{backgroundImage:'url(../../assets/images/locavert.png)'}}></div>
                            <div class="swiper-slide" style={{backgroundImage:'url(../../assets/images/locavert.png)'}}></div>
                            <div class="swiper-slide" style={{backgroundImage:'url(../../assets/images/locavert.png)'}}></div>
                            <div class="swiper-slide" style={{backgroundImage:'url(../../assets/images/locavert.png)'}}></div>
                            <div class="swiper-slide" style={{backgroundImage:'url(../../assets/images/locavert.png)'}}></div>
                        </div>
                    
                        <div class="swiper-button-next swiper-button-white"></div>
                        <div class="swiper-button-prev swiper-button-white"></div>
                    </div>
                    
                </div>
            </div>
          
        </div>
    </div>
        
      </Layout>
    )
  }
}