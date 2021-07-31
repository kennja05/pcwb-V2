import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

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

const SpanIcon = styled.span`
    position: fixed;
    top: 0;
    left: 1rem;
    z-index: 2;
    font-size: 3rem;
`

export default function Nav(props) {

    const [menu, setMenu] = useState(false);
 
    return(
        <div>
            <SpanIcon onClick={() => setMenu(!menu)}>
                <FontAwesomeIcon icon={faBars} color={props.offWhite}/>    
            </SpanIcon>     
            <NavBar active={menu} {...props}>
                <button onClick={() => setMenu(!menu)}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <NavLink exact to='/'>Homepage</NavLink>
                <NavLink exact to='/director'>Director</NavLink>
                <NavLink exact to='/media'>Media</NavLink>
            </NavBar>
        </div>
    )
    
}