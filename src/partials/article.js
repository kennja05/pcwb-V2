import styled from 'styled-components';

export const StyledArticle = styled.article`
    max-width: calc(100% - 5rem);
    line-height: 2.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & section h2{
        color: ${props => props.theme.colors.orange};
        padding: 2rem 0 0rem 0;
        display: inline-block;
    }
    & section {
        margin: 0 1rem 0 0;
        background-image: linear-gradient(to right, ${props => props.theme.colors.darkBlue2}, ${props => props.theme.colors.darkBlue});
        & img {
            height: auto;
            max-width: 100%;
            border-radius: 1rem;
        }
    }
    & section:nth-of-type(odd) {
        width: 64%;
        color: ${props => props.theme.colors.offWhite};
        @media only screen and (max-width: 768px) {
            width: 98%;
        };
    };
    & section:nth-of-type(even) {
        width: 34%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media only screen and (max-width: 768px) {
            width: 100%;
        };
    };
    
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`