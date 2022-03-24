import styled from 'styled-components'

const Footer = styled.footer`
    font-size: 1.5rem;
    background: ${props => props.theme.colors.darkBlue};
    border-top: .2rem solid ${props => props.theme.colors.darkBlue2};
    padding: .5rem 1.5rem;
    color: ${props => props.theme.colors.offWhite};
    & span {
        margin-right: .5rem;
    }
    & a:hover {
        color: ${props => props.theme.colors.orange};
    }
`

export default function footer() {
    return (
        <Footer>
            <span>©2022</span>
            <span><a href='/contact'>Contact</a></span>
        </Footer>
    )
}