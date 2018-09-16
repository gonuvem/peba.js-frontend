import React, { PureComponent } from 'react';
import {
    TextInput,
    Wrapper,
    SearchIcon,
    Container,
    ExplanationText
} from '../styles/SearchStyles';
import { searchIcon } from '../general/Constants';

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