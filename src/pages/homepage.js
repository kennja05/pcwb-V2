import React from 'react'
import styled from 'styled-components'

const IntroHeader = styled.header`
    height: 100vh;
    font-size: 2.1rem;
    background-color: ${props => props.darkBlue};
    position: relative;
`

export default class Homepage extends React.Component{
    
    state = {
        intro: true
    }
    
    componentDidMount(){
        console.log(this.props)
        setTimeout(() => this.setState({intro: false}), 5000)
    }

    render(){
        const {intro} = this.state
        return(
            intro ? 
            <IntroHeader colors={this.props.colors}>
                <h1>
                    PCWB Homepage
                </h1>
            </IntroHeader> 
            :
            <h1>poop</h1>  
        )
    }
}