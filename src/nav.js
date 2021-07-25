import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
    position: fixed;
    height: 100vh;
    top: 0;
    left: ${props => props.active ? '0' : '-20rem'};
    width: 20rem;
    transition: left 1s;
    display: flex;
    align-items: stretch;
    flex-direction: column; 
    background: ${props => props.orange};
    color: ${props => props.offWhite};
    z-index: 3;
    font-size: 3rem;
    text-align: right;
    
    & a:nth-of-type(even){
        border-bottom: .2rem solid #d55b37;
        border-top: .2rem solid #d55b37;
    }

`

export default class Nav extends React.Component {

    state = {
        active: true
    };

    toggleMenu = () => {
        this.setState({
            active: !this.state.active
        });
    };

    render(){
        const {active} = this.state
        return(
            <div>
            <span onClick={this.toggleMenu} className='mySpan'>open menu</span>     
            <NavBar active={active} {...this.props}>
                <button onClick={this.toggleMenu}>×</button>
                <NavLink exact to='/'>Homepage</NavLink>
                <NavLink exact to='/director'>Director</NavLink>
                <NavLink exact to='/media'>Media</NavLink>
            </NavBar>
            </div>
        )
    }
}