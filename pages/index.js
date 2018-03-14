import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Button, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap'
import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <div className="page"> 
        <video autoPlay loop poster="/static/images/Love-Coding.jpg" >
           <source src={"/static/videos/Love-Coding.mp4"}>
           </source>
           </video>
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
       
                    
      </Layout>
    )
  }
}