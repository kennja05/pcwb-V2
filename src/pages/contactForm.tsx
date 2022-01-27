import styled from 'styled-components'

const FormWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(${props => props.theme.colors.darkOrange}, ${props => props.theme.colors.orange});
`

export default function contactForm(){
    return (
        <FormWrapper>

        </FormWrapper>
    )
}