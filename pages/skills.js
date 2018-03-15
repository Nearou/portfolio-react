import Link from 'next/link'
import React from 'react'

import Page from '../components/page'
import Layout from '../components/layout'
import Swiper from 'swiper/dist/js/swiper.js'

export default class extends Page {

    constructor(props) {
        super(props)
        
    }

  componentDidMount(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction : 'horizontal',
        loop: true,
        autoplay: {
            delay : 4000,
            disableOnInteraction:true,
        },
        centeredSlides: true,
        slidesPerView: 1,
        loopAdditionalSlides: 2,
        disableOnInteraction: false,
        autoplayDisableOnInteraction: false,
        reverseDirection: true,
        pagination: {
            el: '.swiper-pagination',
          },
    
    })
}
  render() {
    return (

<Layout {...this.props}  skills ={true} navmenu={false} container={false}>

<div className="page2"> 
<video autoPlay loop poster="/static/images/For_Wes.jpg" >
   <source src={"/static/videos/For_Wes.mp4"}>
   </source>
   </video>
   </div>
    <div className="skills">
      
      <div className="rowContainer">
        <div className="card">
          <div className="circle"></div>
          <div className="title">Fast</div>
          <div className="text">Fast load times and lag free interaction, my highest priority.</div>
        </div>
        <div className="card">
          <div className="circle"></div>
          <div className="title">Responsive</div>
          <div className="text">My layouts will work on any device, big or small.</div>
        </div>
        <div className="card">
          <div className="circle"></div>
          <div className="title">Intuitive</div>
          <div className="text">Strong preference for easy to use, intuitive UX/UI.</div>
        </div>
        <div className="card">
          <div className="circle"></div>
          <div className="title">Dynamic</div>
          <div className="text">Websites don't have to be static, I love making pages come to life.</div>
        </div>
      </div>
      <div className="container">
        <div className="profile">
          <div className="circle">
           
          </div>
          <div className="title">Who's this guy?</div>
          <div className="text">I'm the Front-End Developer for EyeCue Lab in Portland, OR. 
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. 
Let's make something special.</div>
        </div>
        <div className="skills-detail">

          <div className="bar">         
            <div className="fill scss">
              <div className="tag">SCSS</div>
            </div>
            <span className="percent">80%</span>
          </div>

          <div className="bar">         
            <div className="fill html">
              <div className="tag">HTML</div>
            </div>
            <span className="percent">90%</span>
          </div>

          <div className="bar">         
            <div className="fill react">
              <div className="tag">React</div>
            </div>
            <span className="percent">70%</span>
          </div>

          <div className="bar">         
            <div className="fill javascript">
              <div className="tag">Javascript</div>
            </div>
            <span className="percent">80%</span>
          </div>

          <div className="bar">         
            <div className="fill angular">
              <div className="tag">Angular</div>
            </div>
            <span className="percent">70%</span>
          </div>

          <div className="bar">         
            <div className="fill node">
              <div className="tag">Node.js</div>
            </div>
            <span className="percent">50%</span>
          </div>

          <div className="bar">         
            <div className="fill ui">
              <div className="tag">UI Design</div>
            </div>
            <span className="percent">50%</span>
          </div>

          <div className="bar">         
            <div className="fill ps">
              <div className="tag">Photoshop</div>
            </div>
            <span className="percent">40%</span>
          </div>


        </div>
      </div>
    </div>
    </Layout>
       )
    }
  }