import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface NavProps {
    active: boolean;
    currLocation: string;
}

const NavBar = styled.nav<NavProps>`
    position: fixed;
    height: 100vh;
    top: 0;
    @media (min-width: 481px){
        left: ${props => props.active ? '0' : '-20rem'};
        width: 20rem;
    }
    @media (max-width: 480px){
        width: 100vw;
        left: ${props => props.active ? '0' : '-200vw'};
    }
    transition: left .3s;
    display: flex;
    align-items: stretch;
    flex-direction: column; 
    background: ${props => props.orange};
    z-index: 3;
    font-size: 3rem;
    text-align: right;
    & span:nth-of-type(even){
        border-bottom: .2rem solid ${props => props.darkOrange};
        border-top: .2rem solid ${props => props.darkOrange};
    }
    & a {
        padding-right: 1rem;
    }

`

const StyledLink = styled.span`
    color: ${props => props.currLocation ? props.darkBlue2 : props.offWhite};
    &:hover {
        color: ${props => props.darkBlue};
    };
`

const SpanIcon = styled.span`
    position: fixed;
    top: 0;
    left: 1rem;
    z-index: 2;
    font-size: 3rem;
    color: ${props => props.offWhite};
    & a:hover{
        cursor: pointer;
    }
`

const StyledButton = styled.button`
    background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
    outline: inherit;
    display: inline;
    text-align: left;
    text-indent: 1rem;
`

export default function Nav(props) {

    //Open and close nav menu 
    const [menu, setMenu] = useState(false);
    
    //determine url and update when new link is clicked
    const [path, setPath] = useState('')
    useEffect(() => {
        setPath(window.location.pathname);
    }, [menu]);

    return(
        <div>
            <SpanIcon onClick={() => setMenu(!menu)}>
                <FontAwesomeIcon icon={faBars} color={props.offWhite}/>    
            </SpanIcon>     
            <NavBar active={menu} {...props}>
                <StyledButton onClick={() => setMenu(!menu)}>
                    <FontAwesomeIcon icon={faTimes} color={props.offWhite}/>
                </StyledButton>
                
                    <NavLink onClick={() => setMenu(!menu)} to='/'>
                    <StyledLink currLocation={path === '/' ? true : false} {...props}>
                        Home
                        </StyledLink>

                        </NavLink>
                <StyledLink currLocation={path === '/director' ? true : false} {...props}>
                    <NavLink onClick={() => setMenu(!menu)} to='/director'>Director</NavLink>
                </StyledLink>
                <StyledLink currLocation={path === '/media' ? true : false} {...props}>
                    <NavLink onClick={() => setMenu(!menu)} to='/media'>Media</NavLink>
                </StyledLink>
            </NavBar>
        </div>
    )
    
}