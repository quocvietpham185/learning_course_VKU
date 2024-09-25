import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card } from 'react-bootstrap';
import '../../assets/css/custom.css';
import '../../assets/css/bootstrap.min.css'

import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faLaptop} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

class Summary extends Component {
    render() {
         return (
            <Fragment>
                     
            <Container fluid={true} className="summaryBanner p-0" >
       <div className="summaryBannerOverlay">
                      <Container className="text-center">
                           <Row>

    <Col lg={8} md={6} sm={12}>
    <Row className="countSection">
              <Col>
              <FontAwesomeIcon className="iconProject" icon={faGlobe} />
              <h1 className="countNumber"> {/* Animation tăng chữ số */}

                <CountUp start={0} end={35000}>
                {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
                </VisibilitySensor>   
                )}
                </CountUp>  
                </h1> 
               <h4 className="countTitle">Học Viên Toàn Cầu</h4>
               <hr className='bg-white w-25' />
              </Col>

              <Col>
              <FontAwesomeIcon className="iconProject" icon={faLaptop} />
              <h1 className="countNumber"> {/* Animation tăng chữ số */}

                <CountUp start={0} end={22}>
                {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
                </VisibilitySensor>   
                )}
                </CountUp>  
                </h1> 
               <h4 className="countTitle">Khóa Đã Hoàn Thành</h4>
               <hr className="bg-white w-25" />
              </Col>

              <Col>
              <FontAwesomeIcon className="iconProject" icon={faStar} />
              <h1 className="countNumber"> {/* Animation tăng chữ số */}

                <CountUp start={0} end={3000}>
                {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
                </VisibilitySensor>   
                )}
                </CountUp>  
                </h1> 
               <h4 className="countTitle">Học Viên Đánh Giá</h4>
               <hr className="bg-white w-25" />
              </Col>


         </Row>
    </Col>
    <Col lg={4} md={6} sm={12}>

        <Card className="workCard" >

        <Card.Body>
        <Card.Title className="cardTitle" >Những gì tôi đã đạt được</Card.Title>
        <Card.Text>
        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Requirment Gathering </p>
      <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> System Analysis </p>
      <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Coding Testing </p>
      <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Implementation </p>
        </Card.Text>

        </Card.Body>
        </Card>
     </Col>       





   

                   </Row>

              </Container> 
    </div>
    </Container>

             </Fragment>
         )
    }
}
export default Summary