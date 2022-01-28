import styled from 'styled-components'

const Footer = styled.footer`
    background: ${props => props.theme.colors.offWhite};
    color: ${props => props.theme.colors.darkBlue2};

`

export default function footer() {
    return (
        <Footer>footerrr</Footer>
    )
}