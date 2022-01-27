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
        margin: 0 0rem 0 0;
        padding: 1rem .5rem;
        background-image: linear-gradient(to right, ${props => props.theme.colors.darkBlue2}, ${props => props.theme.colors.darkBlue});
        & img {
            height: auto;
            max-width: 100%;
            border-radius: 1rem;
        }
    }
    & section:nth-of-type(4n-3), section:nth-of-type(4n) {
        width: calc(65% - 1rem);
        color: ${props => props.theme.colors.offWhite};
        @media only screen and (max-width: 768px) {
            width: 98%;
        };
    };
    & section:nth-of-type(4n-2), section:nth-of-type(4n-1) {
        width: calc(35% - 1rem);
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