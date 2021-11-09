import styled from 'styled-components';

export const StyledArticle = styled.article`
    max-width: calc(100% - 10rem);
    padding: 5rem 0rem 5rem 0rem;
    font-size: 2rem;
    & section {
        width: 70%;
        line-height: 2.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    };
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: .5rem;
    background-color: ${props => props.theme.offWhite};
    color: ${props => props.theme.darkBlue2};
`