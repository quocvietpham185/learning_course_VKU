import React, { Component, Fragment } from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import AboutMe from '../components/AboutMe/AboutMe'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNav/TopNavigation'

 class AboutPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }

     render() {
          return (
                <Fragment>
                 <TopNavigation />  
                 <PageTop pagetitle="Về Chúng Tôi" />  
                 <AboutMe />
                 <AboutDescription />
                 <Footer />
                </Fragment>
          )
     }
}

export default AboutPage