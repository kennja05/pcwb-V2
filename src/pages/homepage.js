import React from 'react'
import styled from 'styled-components'

const IntroHeader = styled.header`
    height: 100vh;
    font-size: 2.1rem;
    background-color: ${props => props.darkBlue};
`

const IntroTitleBox = styled.div`
    color: ${props => props.white};
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
    color: ${props => props.white};
`

export default class Homepage extends React.Component{
    
    state = {
        intro: true
    }
    
    componentDidMount(){
        // setTimeout(() => this.setState({intro: false}), 5000)
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