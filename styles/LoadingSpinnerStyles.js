import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: ${props => props.position};
    z-index: 35;
    background: rgba(49, 49, 49, 0.5);
    background-color: ${props => props.backgroundColor}
`;