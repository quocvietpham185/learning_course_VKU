import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

class Footer extends Component {
     render() {
          return (
               <Fragment>
      <Container fluid={true} className="footerSection">
                         <Row>
        <Col lg="3" md={6} sm={12} className="p-5 text-center">
     <h2 className="footerName ">Follow Us </h2>

     <div className="social-container">
     <a className="facebook social" href="#">
             <FontAwesomeIcon icon={faFacebook} size="2x" />  
          </a>
          <a href="#"  className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />  
          </a>
          <a href="#"  className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />  
          </a> 
      </div>      

     </Col>



     <Col lg="3" md={6} sm={12} className="p-5 text-justify">
     <h2 className="footerName ">Địa Chỉ </h2>
     <p className="footerDescription">
     470 Trần Đại Nghĩa, Q. Ngũ Hành Sơn, Tp. Đà Nẵng <br></br>
          <FontAwesomeIcon icon={faEnvelope}  /> Email : learning@vku.udn.vn<br></br>
          <FontAwesomeIcon icon={faPhone}  /> Phone : 0123456789<br></br>
     </p>
     </Col>


     <Col lg="3" md={6} sm={12} className="p-5 text-justify">
     <h2 className="footerName">Thông tin </h2>
     <a className="footerLink" href="#">Về Chúng Tôi </a> <br></br>
     <a  className="footerLink" href="#">Company Profile </a> <br></br>
     <a className="footerLink" href="#">Contact Us  </a> <br></br>
     </Col>

     <Col lg="3" md={6} sm={12} className="p-5 text-justify">
     <h2 className="footerName ">Chính sách  </h2>
     <Link className="footerLink" to="/refund">Chính sách bảo hành </Link> <br></br>
     <Link className="footerLink" to="/trems">Trems And Condition  </Link> <br></br>
     <a className="footerLink" href="#">Privaci Policy   </a> <br></br>
     </Col>
                         </Row>
                    </Container>
                    <Container fluid={true} className="text-center copyrightSection">
<a className="copyrightlink" href="#">© Copyright 2016 by easy Learning, All Rights Reserved</a>
               </Container>
               </Fragment>
          )
     }
}

export default Footer