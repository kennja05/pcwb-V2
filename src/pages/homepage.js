import React from 'react'
import styled, {keyframes} from 'styled-components'

const HomepageWrapper = styled.div`
    position: relative;
    text-align: center;
`

const fadeIn = keyframes`
  0% {opacity: 0;}100% {opacity: 1;}`

const fadeOut = keyframes`
 0% {opacity: 1;}100% {opacity: 0;}`

const lineDrawToRight = keyframes`
    0% {width: 0;}100% {width: 100%;}`

const lineDrawToLeft = keyframes`
    0% {left: 100%;width:0;}100% {left: 0;width:100%;}
`
//todo - take a look at timing of fadeOut animation
const IntroHeader = styled.header`
    height: 100vh;
    font-size: 2.1rem;
    background-color: ${props => props.darkBlue};
    animation: ${fadeOut} 1s 1s forwards;
`

const IntroTitleBox = styled.div`
    color: ${props => props.white};
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    line-height: 1.5;
    padding: 0 1.5rem 0 1.5rem;
    &:before, &:after {
        content: '';
        width: 100%;
        border-bottom: solid .5rem ${props => props.white};
        position: absolute;
    };
    &:before {
        left: 0;
        top: 0%;
        animation: ${lineDrawToRight} .8s ease-in 4s backwards;
    }

    &:after {
        left: 0;
        bottom: 0%;
        animation: ${lineDrawToLeft} .8s ease-in 4.8s backwards;
    }
`

const IntroH1 = styled.h1`
    animation: ${fadeIn} 1.5s;
    
`
const IntroH2 = styled.h2`
    animation: ${fadeIn} 1.5s 2s backwards;
`

const MainHeader = styled.header`
    height: 100vh;
    font-size: 2.1rem;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(https://images-na.ssl-images-amazon.com/images/I/71l6xKqHLCL._AC_SL1500_.jpg)
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `

const MainHeaderTitleBox = styled.div`
    color: ${props => props.darkBlue};
`

export default function Homepage(props) {
    
    return(
        <HomepageWrapper>
            <IntroHeader {...props}>
                <IntroTitleBox {...props}>
                    <IntroH1>Penn Central Wind Band</IntroH1>
                    <IntroH2>William Kenny, Conductor</IntroH2>
                </IntroTitleBox>
            </IntroHeader> 
            <MainHeader {...props}>
                <MainHeaderTitleBox {...props}>
                    <h1>Penn Central Wind Band</h1>
                    <h1>William Kenny, Conductor</h1>
                </MainHeaderTitleBox>
            </MainHeader> 
        </HomepageWrapper>
    )
}
