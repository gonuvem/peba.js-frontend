import React, { useState } from 'react';
import Router from 'next/router';
import {
    TextInput,
    Wrapper,
    SearchIcon,
    Container,
    ExplanationText,
    Content
} from '../styles/SearchBarStyles';
import { searchIcon } from '../general/Constants';

const SearchBar = ({ marginTopOnMobile }) => {
    const [searchText, setSearchText] = useState('');

    const handleKeyPress = event => {
        if(event.key == 'Enter') {
            dispatchSearch();
        }
    }

    const dispatchSearch = () => {
        searchText.length !== 0 
        ?
            Router.push({
                pathname: `/search`,
                query: {
                    terms: searchText,
                },
            }).then(() => window.scrollTo(0, 0))
        :
            alert('Digite um termo para busca');
    }

    return (
        <Container marginTopOnMobile={marginTopOnMobile}>
            <Content>
                <Wrapper>
                    <TextInput 
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    placeholder="Procure por um deputado ou senador"
                    onSubmit={() => console.log('submited')}
                    onKeyDown={handleKeyPress}
                    />
                    <SearchIcon alt='Ícone de busca' onClick={dispatchSearch} src={searchIcon} />
                </Wrapper>
                <ExplanationText>Busque por nome, partido ou estado</ExplanationText>
            </Content>
        </Container>
    );
}

export default SearchBar;
