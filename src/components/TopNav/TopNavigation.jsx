import React, {Component, Fragment,} from 'react';
import {Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../../assets/css/custom.css';
import '../../assets/css/bootstrap.min.css'
import {NavLink} from "react-router-dom"

class TopNavigation extends Component {
    constructor(){
        super();
        this.state={
            navBarTitle: "navTitle",
            navVariant:"dark",
            navBarBack: "navBarBackground",
            navBarItem: "navItem"
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            
            this.setState({navBarTitle:'navTitleScroll',navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll',navVariant:'light'})
        } else if (window.scrollY<100){
          
            this.setState({navBarTitle:'navTitle',navBarBack:'navBackground',navBarItem:'navItem',navVariant:'dark'})
        }   
        }
    componentDidMount(){
            window.addEventListener('scroll', this.onScroll)
        }



    render() {
        return (
           <Fragment>
              
              <Navbar className={this.state.navBarBack} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVariant}>                <Container>
              <Navbar.Brand className={this.state.navBarTitle} ><NavLink to="/"> <img src={this.state.navBarLogo} /> </NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav>
                    <Nav.Link> <NavLink className={this.state.navBarItem} to="/">Trang Chủ</NavLink> </Nav.Link>

                        <Nav.Link> <NavLink className={this.state.navBarItem} to="/about">Thông Tin</NavLink> </Nav.Link>

                        <Nav.Link>  <NavLink className={this.state.navBarItem}  to="/service">Dịch Vụ</NavLink> </Nav.Link>

                        <Nav.Link>  <NavLink className={this.state.navBarItem} to="/course">Khóa Học</NavLink> </Nav.Link>

                        <Nav.Link>  <NavLink className={this.state.navBarItem} to="/portfolio">Về Chúng Tôi</NavLink> </Nav.Link>

                        <Nav.Link>  <NavLink className={this.state.navBarItem} to="/contact">Liên Hệ</NavLink> </Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
             </Navbar>  
           
           </Fragment> 
        )
    }

}
export default TopNavigation
