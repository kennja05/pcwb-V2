import styled from 'styled-components';

export const StyledArticle = styled.article`
    max-width: calc(100% - 10rem);
    & section:first-of-type {
        width: 70%;
        line-height: 2.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${props => props.theme.colors.offWhite};

    };
    & section {
        border: 1px solid black;
    };
    display: flex;
    justify-content: center;
    color: ${props => props.theme.colors.darkBlue2};
`