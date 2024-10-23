import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import designIcon from "../../assets/imagine/design.png";
import ecommerceIcon from "../../assets/imagine/ecommerce.png";
import webIcon from "../../assets/imagine/web.png";
import "../../assets/css/custom.css";
import "../../assets/css/bootstrap.min.css";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Services extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.Services).then((result) => {
      this.setState({ myData: result });
    });
  }

  render() {
    const MyList = this.state.myData;
    const MyView = MyList.map((MyList) => {
      return (
        <Col lg={4} md={6} sm={12}>
          <div className="serviceCard text-center">
            <img className="ecommerceIcon" src={MyList.service_logo} />
            <h2 className="serviceName">{MyList.service_name}</h2>
            <p className="serviceDescription">{MyList.service_discription}</p>
          </div>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="servicesManTitle">Dịch Vụ</h1>
          <div className="bottom"></div>
          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}
export default Services;
