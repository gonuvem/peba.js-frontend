import React, { PureComponent } from 'react';
import styled from 'styled-components';

const searchIcon = require('../static/images/search.svg');

const TextInput = styled.input`
    width: 90%;
    border: none;
    color: #707070;
    font-size: 17px;
    font-family: Roboto;
    font-weight: 500;
    outline: none;
`;

const Wrapper = styled.div`
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

const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    cursor: pointer
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ExplanationText = styled.p`
    font-family: Roboto;
    font-size: 14px;
    color: #B5B5B5;
    margin: 0;
`;

export default class Search extends PureComponent {
    render() {
        return (
            <Container>
                <Wrapper>
                    <TextInput placeholder="Procure por um deputado ou senador"/>
                    <SearchIcon src={searchIcon} />
                </Wrapper>
                <ExplanationText>Busque por nome, partido ou estado</ExplanationText>
            </Container>
        );
    }
}