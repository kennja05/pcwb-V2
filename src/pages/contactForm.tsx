import styled from 'styled-components'

const FormPageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(${props => props.theme.colors.darkOrange}, ${props => props.theme.colors.orange});
`
const FormWrapper = styled.div`
    background: ${props => props.theme.colors.offWhite};
    border-radius: 1rem;
    padding: 3rem;
    box-shadow: 3px 3px ${props => props.theme.colors.darkBlue2};
`


export default function contactForm(){
    return (
        <FormPageWrapper>
            <FormWrapper>
                <h1>Questions, Commments, or Inquiries</h1>
               <form>
                    <textarea></textarea>
                    <input type='email' />
                    <input type='submit' />
                </form> 
            </FormWrapper>
        </FormPageWrapper>
    )
}