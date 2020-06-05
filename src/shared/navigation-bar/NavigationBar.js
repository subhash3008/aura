import React from 'react';
import "./NavigationBar.css"
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
// import CommonStyles from '../../shared/Common.module.css'

const Styles = styled.div`
  .navbar { background-color: #ffffff; padding: 0.69rem 1rem; }
  a, .navbar-nav, .navbar-light .nav-link {
    // color: #9FFFCB;
    // &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1em;
    color: #ffffff;
    &:hover { color: white; }
    position: absolute;
    background-color: #144192;
    left: 0;
    top: 0;
    height: 100%;
    width:65px;
    text-align:center;
    line-height:3.4
  }
  .form-center {
    position: absolute !important;
    left: 6%;
    right: 25%;
    width:25%;
  }
  .form-center input{
    border-radius:8px;
    background-color: #F5F7FD;
  }
  input:focus{
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
.form-control:focus{
  box-shadow:none
}
`;
export class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    handleClick(e) {
        this.setState({ open: !this.state.open });
    }

    handleClose(e) {
        this.setState({ open: false });
    }
    render() {
        return (
            <Styles>
                <Navbar className="fixed-top"  expand="lg">
                    <Navbar.Brand href="/">P_AI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Form className="form-center">
                        <FormControl type="text" placeholder="Search" className="" />
                        <div className="search_dropdown">
                            <p>Testing</p>
                            <p>Css ONLY</p>
                            <p>Dropdown</p>
                            <p>Dropdown</p>
                        </div>
                    </Form>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <i data-badge="6" className="fas fa-bell badge1"></i>
                            <div style={{ display: 'flex' }}>
                                <div style={{textAlign:'right'}}>
                                    <span style={{fontSize:'14px', fontWeight:'500'}}>Abhinav Kumar</span>
                                    <span style={{ display: 'block', fontSize: '12px', marginTop:'-4px' }}>abhinav.gupta@precily.com</span>
                                </div>
                                <div>
                                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar"></img>
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}