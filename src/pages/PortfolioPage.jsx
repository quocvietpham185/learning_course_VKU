import React, { Component, Fragment } from 'react'

import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNav/TopNavigation'
import AllProjects from '../components/AllProjects/AllProjects'

 class PortfolioPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
                <Fragment>
                 <TopNavigation />
                   <PageTop pagetitle="Our Portfolio" />
                   <AllProjects />
                   <Footer />
                </Fragment>
          )
     }
}

export default PortfolioPage