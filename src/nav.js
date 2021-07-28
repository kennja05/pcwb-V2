import React, {useState} from 'react';
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
        border-bottom: .2rem solid ${props => props.darkOrange};
        border-top: .2rem solid ${props => props.darkOrange};
    }

`

export default function Nav(props) {

    const [menu, setMenu] = useState(false);
 
    return(
        <div>
            <span className='mySpan' onClick={() => setMenu(!menu)}>open menu</span>     
            <NavBar active={menu} {...props}>
                <button onClick={() => setMenu(!menu)}>×</button>
                <NavLink exact to='/'>Homepage</NavLink>
                <NavLink exact to='/director'>Director</NavLink>
                <NavLink exact to='/media'>Media</NavLink>
            </NavBar>
        </div>
    )
    
}