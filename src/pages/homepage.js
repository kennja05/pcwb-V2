import React from 'react'
import styled, {keyframes} from 'styled-components'

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0 ;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const lineDrawToRight = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`

const lineDrawToLeft = keyframes`
    0% {
      left: 100%;
      width:0;
    }
    100% {
      left: 0;
      width:100%;
    }
`

const IntroHeader = styled.header`
    height: 100vh;
    font-size: 2.1rem;
    background-color: ${props => props.darkBlue};
    padding: 1rem;
`
//    animation: ${fadeOut} 3s 8s forwards;


const IntroTitleBox = styled.div`
    color: ${props => props.white};
    animation: ${fadeIn} 2s 1s backwards;
    position: absolute;
    top: 53%;
    left: 50%;
    border: solid 1px black;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    line-height: 2;
    &:before, &:after {
        content: '';
        width: 100%;
        border-bottom: solid .5rem ${props => props.white};
        position: absolute;
    };
    &:before {
        left: 0;
        top: 0%;
        animation: ${lineDrawToRight} .8s ease-in 3s backwards;
    }

    &:after {
        left: 0;
        bottom: 0%;
        animation: ${lineDrawToLeft} .8s ease-in 3.8s backwards;
    }
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

export default class Homepage extends React.Component{
    
    state = {
        intro: true
    }
    
    render(){
        return(
            <div style={{position: 'relative'}}>
                <IntroHeader {...this.props}>
                    <IntroTitleBox {...this.props}>
                        <h1>Penn Central Wind Band</h1>
                        <h2>William Kenny, Conductor</h2>
                    </IntroTitleBox>
                </IntroHeader> 
                <MainHeader {...this.props}>
                    <MainHeaderTitleBox {...this.props}>
                        PCWB Homepage
                    </MainHeaderTitleBox>
                </MainHeader> 
            </div>
        )
    }
}