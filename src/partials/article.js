import styled from 'styled-components';

export const StyledArticle = styled.article`
    max-width: calc(100% - 10rem);
    padding: 5rem 0rem 5rem 0rem;
    font-size: 2rem;
    & section {
        width: 50%;
        line-height: 2.2rem;
        text-indent: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    };
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow:  inset 2.2rem 2.2rem 4.4rem ${props => props.gray},
    inset -2.2rem -2.2rem 4.4rem ${props => props.offWhite};
`