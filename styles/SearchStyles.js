import styled from 'styled-components';

export const TextInput = styled.input`
    width: 90%;
    border: none;
    color: #707070;
    font-size: 17px;
    font-weight: 500;
    outline: none;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 575px;
    height: 35px;
    border-radius: 4px;
    padding: 0 15px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    cursor: pointer;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ExplanationText = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #B5B5B5;
    margin: 0;
`;
