import styled from 'styled-components';

export const StyledArticle = styled.article`
    max-width: calc(100% - 10rem);
    margin: 0 0 2rem 0;
    line-height: 2.8rem;
    & section h2{
        color: ${props => props.theme.colors.orange};
        padding: 2rem;
        display: inline-block;
        &:hover{
            color: ${props => props.theme.colors.darkOrange};
        }
    }
    & section div {
        background: ${props => props.theme.colors.offWhite};
        padding: 1rem;
        border-radius: .3rem;
    }
    & section:nth-of-type(odd) {
        width: 65%;
        color: ${props => props.theme.colors.darkBlue2};
        @media only screen and (max-width: 768px) {
            width: 100%;
        };
    };
    & section:nth-of-type(even) {
        width: 35%;
        @media only screen and (max-width: 768px) {
            width: 100%;
        };
    };
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`