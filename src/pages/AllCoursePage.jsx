import React, { Component, Fragment } from 'react'
import AllCourses from '../components/AllCourse/AllCourse'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNav/TopNavigation'

class AllCoursePage extends Component {
     render() {
          return (
              <Fragment>
                   <TopNavigation />
                   <PageTop pagetitle="All Courses" />
                   <AllCourses />
                   <Footer />
              </Fragment>
          )
     }
}

export default AllCoursePage