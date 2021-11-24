import styled from 'styled-components';

export const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(${props => props.theme.colors.orange},${props => props.theme.colors.darkBlue});
    padding-top: 1rem;
    padding-bottom: 1rem;
`