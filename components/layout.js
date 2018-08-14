import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import Signin from './signin'
import { NextAuth } from 'next-auth/client'
import Cookies from 'universal-cookie'
import Package from '../package'
import Styles from '../css/index.scss'
import Swiper from 'swiper/dist/js/swiper.js'

export default class extends React.Component {

  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired,
      providers: React.PropTypes.object.isRequired,
      children: React.PropTypes.object.isRequired,
      fluid: React.PropTypes.boolean,
      navmenu: React.PropTypes.boolean,
      signinBtn: React.PropTypes.boolean
    }
  }
  
  constructor(props) {
    super(props)

    skills : null;

    this.state = {
      navOpen: false,
      modal: false,
      providers: null
    }
   
  }
 
  
  render() {
    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{this.props.title || 'Next.js Starter Project'}</title>
          <style dangerouslySetInnerHTML={{__html: Styles}}/>
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="/nodes_modules/swiper/dist/css/swiper.min.css"/>
            <script src="/nodes_modules/swiper/dist/js/swiper.min.js"></script>
            <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link href="css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css" />
            <script src="https://unpkg.com/scrollreveal"></script>
            <script src="js/wow.min.js"></script>
            <link rel="stylesheet" href="css/animate.css"/>
            <link rel="stylesheet" href="animate.min.css"/>
            <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>

  <link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        </Head>
        <div className="navbar">
          <div className="logo"></div>
          <div className="menu">
            <div className="buttons">
              <div className="button">
                <div className="title">Skills</div>

                <div className="underline" style={(this.props.skills ? {display : 'flex'}: {display:'none'})}></div>
              </div>
              <div className="button">
              <div className="title">Projects</div>
                <div className="underline"></div>
              </div>
              <div className="button">
              <div className="title">Contact</div>
                <div className="underline"></div>
              </div>
            </div>
          </div>
        </div>
        {this.props.children}
      </React.Fragment>
    )
  }
}



