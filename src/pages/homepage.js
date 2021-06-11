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

const IntroHeader = styled.header`
    height: 100vh;
    font-size: 2.1rem;
    background-color: ${props => props.darkBlue};
    animation: ${fadeOut} 1s 5s forwards;
`

const IntroTitleBox = styled.div`
    color: ${props => props.white};
    animation: ${fadeIn} 1s 2s backwards;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
                        PCWB Homepage
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