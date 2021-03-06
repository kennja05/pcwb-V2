import styled from 'styled-components';

export const ArticleWrapper = styled.div`
    color: ${props => props.theme.colors.offWhite};
    width: 100vw;
    background: ${props => props.theme.colors.darkBlue2};
    font-size: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
`