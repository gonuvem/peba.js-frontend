import React, { PureComponent } from 'react';
import Router from 'next/router';
import {
    TextInput,
    Wrapper,
    SearchIcon,
    Container,
    ExplanationText
} from '../styles/SearchBarStyles';
import { searchIcon } from '../general/Constants';

export default class SearchBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };

        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.dispatchSearch = this.dispatchSearch.bind(this);
    }

    handleChangeText = event => {
        this.setState({ searchText: event.target.value });
    }

    handleKeyPress = event => {
        if(event.keyCode == 13) {
            this.dispatchSearch();
        }
    }

    dispatchSearch = () => {
        this.state.searchText.length !== 0 
        ?
            Router.push({
                pathname: `/search`,
                query: {
                    text: this.state.searchText,
                },
                asPath: `/search/?text=${this.state.searchText}`
            }).then(() => window.scrollTo(0, 0))
        :
            alert('Digite um termo para busca');
    }

    render() {
        return (
            <Container>
                <Wrapper>
                    <TextInput 
                    value={this.state.searchText}
                    onChange={this.handleChangeText}
                    placeholder="Procure por um deputado ou senador"
                    onSubmit={() => console.log('submited')}
                    onKeyDown={this.handleKeyPress}
                    />
                    <SearchIcon onClick={this.dispatchSearch} src={searchIcon} />
                </Wrapper>
                <ExplanationText>Busque por nome, partido ou estado</ExplanationText>
            </Container>
        );
    }
}