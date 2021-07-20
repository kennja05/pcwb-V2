import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
    color: orange;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    width: 10rem;
    display: flex;
    flex-direction: column; 
    border: 1px solid red;
    background: grey;
    z-index: 2;
`

export default class Nav extends React.Component {

    state = {
        active: false
    };

    toggleMenu = () => {
        this.setState({
            active: !this.state.active
        });
    };

    render(){
        return(
            <NavBar>
                <span onClick={this.toggleMenu}>&x</span>
                <Link to='/'>Homepage</Link>
                <Link to='/director'>Director</Link>
                <Link to='/media'>Media</Link>
            </NavBar>
        )
    }
}