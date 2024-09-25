    import React, {Component, Fragment} from 'react';
    import {Col, Container, Row, Button } from 'react-bootstrap';
    import '../../assets/css/custom.css';
    import '../../assets/css/bootstrap.min.css'


    class TopBanner extends Component {
        render() {
            return (
            <Fragment>
                    <Container fluid="true" className="topFixedBanner">
                    <div  className="topBannerOverplay">
                        <Container className='topContent'>
                            <Row>
                                <Col className="text-center">
                                    <h1 className='topTitle'>Learning</h1>
                                    <h4 className='topSubTitle'>Giải pháp học tập của bạn</h4>
                                    <Button variant='primary'>Tìm hiểu thêm</Button>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                    
                    </Container>
            
            </Fragment> 
            )
        }

    }
    export default TopBanner