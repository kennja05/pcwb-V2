import styled from 'styled-components';

export const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(${props => props.orange},${props => props.light ? props.darkBlue : props.offWhite});
    padding-top: 1rem;
    padding-bottom: 1rem;
`