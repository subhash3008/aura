import React from 'react';
import styled from 'styled-components';
import {  Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 65px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 3.9em;      /* Stay at the top */
    background-color: #11256D; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 20px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/dashboard', /* path is used as id to check which NavItem is active basically */
                    name: 'Dashboard',
                    css: 'fab fa-microsoft',
                    key: 1, /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                    position: 0
                },
                {
                    path: '/teams',
                    name: 'Teams',
                    css: 'fas fa-user-friends',
                    key: 2,
                    position: 0
                },
                {
                    path: '/documents',
                    name: 'Documents',
                    css: 'fas fa-folder',
                    key: 3,
                    position: 0
                },
                {
                    path: '/templates',
                    name: 'Templates',
                    css: 'far fa-images',
                    key: 4,
                    position: 0
                },
                {
                    path: '/reports',
                    name: 'Reports',
                    css: 'fas fa-file-alt',
                    key: 5,
                    position: 0
                },
                {
                    path: '/support',
                    name: 'Support',
                    css: 'fas fa-wrench',
                    key: 6,
                    position: 1
                },
            ],
            
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return (
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                                position={item.position}
                            />
                        );
                    })

                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 70px;
    width: 62px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 0;   /* Puts space between NavItems */
    a {
        font-size: 1.4em;
        color: ${(props) => props.active ? "#11256D" : "#C0C0C0"};
        background-color:${(props) => props.active ? "#FFFFFF" : ""};
        height: 50px;
        width: 50px;
        padding-top: 6px;
        display: inline-table;
        border-radius:${(props) => props.active ? "6px" : ""};
        :hover {
            opacity: 0.7;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        if (this.props.position === 0) {
            return (

                <StyledNavItem active={active}>
                    <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>

                        <NavIcon></NavIcon>
                        <div style={{fontSize: '9px',wordBreak: 'break-word', fontFamily: "Roboto", marginTop:'8px', fontWeight:'500'}}>{this.props.name}</div>

                    </Link>
                </StyledNavItem>


            );
        }
        else {
            return (
                <div style={{ position: 'absolute', bottom: '76px' }}>
                    <StyledNavItem active={active}>
                        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                            <NavIcon></NavIcon>
                            <div style={{ fontSize: '9px',wordBreak: 'break-word', fontFamily: "Roboto", marginTop:'8px',fontWeight:'500' }}>{this.props.name}</div>
                        </Link>
                    </StyledNavItem>


                </div>
            )
        }
    }
}

const NavIcon = styled.div`

`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}