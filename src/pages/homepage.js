import styled from 'styled-components'
import trumpet from '../../src/assets/images/trumpet.jpg';

const HomepageHeader = styled.header`
    height: 100vh;
    font-size: 2.1rem;
    background: rgba(0, 0, 0, 0.5), url(${trumpet});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border: 1px solid red;
`

export default function Homepage(){
    return(
        <HomepageHeader>
            <h1>
                PCWB Homepage
            </h1>
        </HomepageHeader>
        
    )
}