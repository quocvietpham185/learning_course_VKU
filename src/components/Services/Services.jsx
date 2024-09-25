import React, { Component, Fragment} from "react";
import {Col, Container, Row, Button } from 'react-bootstrap';
import designIcon from '../../assets/imagine/design.png'
import ecommerceIcon from '../../assets/imagine/ecommerce.png'
import webIcon from '../../assets/imagine/web.png'
import '../../assets/css/custom.css';
import '../../assets/css/bootstrap.min.css'

class Services extends Component {
    render() {
        return(
            <Fragment>
                <Container className="text-center">
                    <h1 className="servicesManTitle">Dịch Vụ</h1>
                    <div className="bottom"></div>
                   <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="ecommerceIcon" src={ecommerceIcon} alt="" />
                                <h2 className="serviceName">Thương mại điện tử</h2>
                                <p className="serviceDescription">Tôi sẽ thiết kế và phát triển trang web cửa hàng thương mại điện tử trực tuyến.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="designIcon" src={designIcon} alt="" />
                                <h2 className="serviceName">Thiết kế web</h2>
                                <p className="serviceDescription">Thiết kế web chất lượng và các hiệu ứng hấp dẫn thu hút sự chú ý của khách truy cập.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="webIcon" src={webIcon} alt="" />
                                <h2 className="serviceName">Phát triển web</h2>
                                <p className="serviceDescription">Mã miễn phí phát hành sạch sẽ và mới mẻ để làm cho trang web của bạn hoạt động hoàn hảo.</p> 
                            </div>
                        </Col>
                   </Row>
                </Container>
            </Fragment>
        )
    }
}
export default Services
