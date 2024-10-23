    import React, {Component, Fragment} from 'react';
    import {Col, Container, Row, Button } from 'react-bootstrap';
    import '../../assets/css/custom.css';
    import '../../assets/css/bootstrap.min.css';
    import AppUrl from '../../RestAPI/AppUrl';
    import RestClient from '../../RestAPI/RestClient';
    import axios from 'axios';

    class TopBanner extends Component {

            constructor(){
                super();
                this.state={
                    title:"....",
                    subtitle:"...."
                }
            }

            componentDidMount(){
            RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
                this.setState({title:result[0]['home_title'],subtitle:result[0]['home_subtitle']});
            }).catch(error=>{
                this.setState({title:"????",subtitle:"????"})
            });
        }

        render() {
            return (
            <Fragment>
                    <Container fluid="true" className="topFixedBanner">
                    <div  className="topBannerOverplay">
                        <Container className='topContent'>
                            <Row>
                                <Col className="text-center">
                                    <h1 className='topTitle'>{this.state.title}</h1>
                                    <h4 className='topSubTitle'>{this.state.subtitle}</h4>
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