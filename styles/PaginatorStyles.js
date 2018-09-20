import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 47px auto;
`;

export const ControllerIconContainer = styled.div`
    width: 10px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Page = styled.div`
    width: 33px;
    height: 33px;
    border-radius: 8px;
    font-size: 27px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    color: ${props => props.fontColor};
    background-color: ${props => props.backgroundColor};
    cursor: pointer;
`;
