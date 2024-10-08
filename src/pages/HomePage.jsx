import React, { Component, Fragment } from 'react'
import TopBanner from '../components/Banner/TopBanner'
import Services from '../components/Services/Services';
import TopNavigation from '../components/TopNav/TopNavigation';
import Analysis from '../components/Analysis/Analysis';
import Summary from '../components/Summary/Summary';
import RecentProject from '../components/Project/RecentProject';
import Courses from '../components/Courses/Courses';
import Video from '../components/Video/Video';
import ClientReview from '../components/ClientReview/ClientReview';
import AboutMe from '../components/AboutMe/AboutMe';
import Footer from '../components/Footer/Footer';
import Welcome from '../components/Welcome/Welcome';

class HomePage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }
     render() {
          return (
             <Fragment>

      <TopNavigation />
      <TopBanner /> 
      <Welcome />  
      <Services />
      <Analysis />
      <Summary />
      <RecentProject />
      <Courses />
      <Video />
      <ClientReview />
      <AboutMe />
      <Footer />


             </Fragment>
          )
     }
}

export default HomePage