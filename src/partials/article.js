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
            color: ${props => props.theme.colors.offWhite};
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
    };
    & section:nth-of-type(even) {
        width: 35%;
    };
    display: flex;
    justify-content: center;
`