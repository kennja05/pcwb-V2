import styled from 'styled-components';

export const StyledArticle = styled.article`
    max-width: calc(100% - 10rem);
    border: 2px solid orange;
    line-height: 2.5rem;
    & section:nth-of-type(odd) {
        width: 65%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background: ${props => props.theme.colors.offWhite};
        color: ${props => props.theme.colors.darkBlue2};
    };
    & section:nth-of-type(even) {
        width: 35%;
    };
    display: flex;
    justify-content: center;
`