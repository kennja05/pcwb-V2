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
                <h1>
                    Contact us
                </h1>
                <h3>
                    Please fill out the form below with any inquiries
                    or comments to share with the band.
                </h3>
                <h4>
                    If you have any photos of the band to share
                    please upload here!
                </h4>
               <form>
                   <fieldset>
                       <legend>Questions / Comments</legend>
                       <textarea placeholder='Questions or comments...'></textarea>
                   </fieldset>
                   <fieldset>
                       <legend>Your Email Address</legend>
                        <input type='email' />
                    </fieldset>
                    <input type='submit' />
                </form> 
            </FormWrapper>
        </FormPageWrapper>
    )
}