import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    width: 20rem;
    display: flex;
    align-items: stretch;
    flex-direction: column; 
    background: ${props => props.orange};
    color: ${props => props.offWhite};
    z-index: 2;
    font-size: 3rem;
    text-align: right;
    padding: 1rem 1rem 0 1rem;
    
    & a:nth-of-type(even){
        border-bottom: .2rem solid black;
        border-top: .2rem solid black;
    }

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
            <NavBar {...this.props}>
                <span onClick={this.toggleMenu}>×</span>
                <Link to='/'>Homepage</Link>
                <Link to='/director'>Director</Link>
                <Link to='/media'>Media</Link>
            </NavBar>
        )
    }
}