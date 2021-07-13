import React from 'react'
import TrumpetBackground from '../assets/images/trumpet.jpg'
import styled, {keyframes} from 'styled-components'

const HomepageWrapper = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 100vh;
    grid-template-areas: "header";
    font-size: 2.1rem;
    text-transform: uppercase;
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
    grid-area: header;
    z-index: 1;
    background-color: ${props => props.darkBlue};
    animation: ${fadeOut} 1s 6s forwards;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IntroTitleBox = styled.div`
    position: relative;
    color: ${props => props.white};
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
    grid-area: header;
    background-image: url(${TrumpetBackground});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
    `

const MainHeaderTitleBox = styled.div`
    position: relative;
    color: ${props => props.darkBlue};
    line-height: 1.5;
    padding: 0 1.5rem 0 1.5rem;
    &:before, &:after {
        content: '';
        width: 100%;
        border-bottom: solid .5rem ${props => props.darkBlue};
        position: absolute;
    };
    &:before {
        left: 0;
        top: 0%;
    }
    &:after {
        left: 0;
        bottom: 0%;
    }
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
                    <h2>William Kenny, Conductor</h2>
                </MainHeaderTitleBox>
            </MainHeader> 
        </HomepageWrapper>
    )
}