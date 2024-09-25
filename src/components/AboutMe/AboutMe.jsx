import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { init } from 'ityped'

class AboutMe extends Component {

    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        const secondElement = document.querySelector('#secondElement')
        init(myElement, { showCursor: false, strings: ['Web Developer!', 'Online Instructor!' ] })
        init(secondElement, { showCursor: false, strings: ['Designer!', 'UX Specialist!'] });
        this.initialized = true;
      }


     render() {
          return (
               <Fragment>
                    <Container className="text-center">
             <h1 className="serviceMainTitle">Về Chúng Tôi</h1>
               <div className="bottom"></div>

                         <Row className='row'>


     <Col lg={6} md={6} sm={12}>
          <div className="aboutMeImage">
     <img className="aboutImg"/>
     </div>
     </Col>





     <Col lg={6} md={6} sm={12}>
     <div className="aboutMeBody">
               <h2 className="aboutMeDetails">Chào mọi người, Tôi là</h2>
               <h2 className="aboutMeTitle">Phạm Quốc Việt</h2>
               <h3 className="aboutMeDetails">Làm việc về <span id="myElement"> </span> </h3>
    </div>
     </Col>

                         </Row>

                         <Row>
                        {/* Người thứ hai */}
                        <Col lg={6} md={6} sm={12}>
                            <div className="aboutMeImage2">
                                <img className="aboutImg2" />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="aboutMeBody2">
                                <h2 className="aboutMeDetails2">Chào mọi người, Tôi là</h2>
                                <h2 className="aboutMeTitle2">Nguyễn Bình Minh</h2>
                                <h3 className="aboutMeDetails2">Làm việc về <span id="secondElement"> </span> </h3>
                            </div>
                        </Col>
                    </Row>

                    </Container>
               </Fragment>
          )
     }
}

export default AboutMe