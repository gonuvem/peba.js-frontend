import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 56px auto;
`;

export const ControllerIcon = styled.img`
    width: 10px;
    height: 10px;
    object-fit: contain;
    
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
    cursor: pointer;
`;

export const Selected = {
    backgroundColor: '#FFC800',
    color: 'white'
}

export const Unselected = {
    backgroundColor: 'white',
    color: '#FFC800'
}
