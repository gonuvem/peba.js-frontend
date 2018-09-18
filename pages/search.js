import React, { Component } from 'react';
import Router from 'next/router';
import { 
    Layout, 
    SearchBar, 
    Paginator ,
    PoliticianCard
} from '../components';
import { 
    Container,
    ResultText,
    EvidenceText
} from '../styles/SearchPageStyles';
import API from '../general/Api';


export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            ...this.props
        };

        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.requestNewPage = this.requestNewPage.bind(this);
        this.pagePressed = this.pagePressed.bind(this);
    }

    nextPage = async () => {
        await this.setState({
            currentPage: this.state.currentPage + 1,
            data: { ...this.state.data, page: this.state.currentPage + 1}
        });
        this.requestNewPage(this.state.currentPage);
    }

    previousPage = async () => {
        await this.setState({
            currentPage: this.state.currentPage - 1,
            data: { ...this.state.data, page: this.state.currentPage - 1}
        });
        this.requestNewPage(this.state.currentPage);
    }

    requestNewPage = async page => {
        API({ method: this.state.method, url: `${this.state.query}page=${page}`,  ...this.state.data })
        .then((response) => {
            //console.log('Pagination Response', response.data);
            this.setState({ ...response.data })
        })
        .catch((error) => {
            console.log('Pagination Error', error.response);
        })
    }

    pagePressed = async page => {
        await this.setState({
            currentPage: page,
            data: { ...this.state.data, page }
        });
        this.requestNewPage(this.state.currentPage);
    }

    render() {
        //console.log("Searchprops", this.state)
        return (
            this.state.status === 201 ?
                <Layout headerContent={<SearchBar/>}>
                    <Container>
                        <ResultText>
                            <EvidenceText>
                                {this.state.total}
                            </EvidenceText>
                            {' '}político(s) foram encontrados para a pesquisa{' '}
                            <EvidenceText>
                                {this.state.reserachText}
                            </EvidenceText>
                        </ResultText>
                        <Paginator 
                        numberOfPages={this.state.pages} 
                        currentPage={this.state.currentPage} 
                        onPagePress={this.pagePressed}
                        onNextPress={this.nextPage}
                        onPreviousPress={this.previousPage}
                        />
                        {this.state.politicians.map((element) => (
                            <PoliticianCard 
                            function={element.cargo}
                            id={element._id}
                            key={element._id}
                            name={element.nome} 
                            photo={element.urlFoto}
                            expenses={element.totalDespesas}
                            state={element.siglaUf}
                            party={element.siglaPartido}
                            />
                        ))}
                        <Paginator
                        style={{marginTop: 16}}
                        numberOfPages={this.state.pages} 
                        currentPage={this.state.currentPage} 
                        onPagePress={this.pagePressed}
                        onNextPress={this.nextPage}
                        onPreviousPress={this.previousPage}
                        />
                    </Container>
                </Layout>
            : <div>Error</div>
        );
    }
}

Search.getInitialProps = async context => {
    const { text, state, terms } = context.query;
    let query, data = {}, method='GET';
    if(terms === undefined) {
        query = `politicos?uf=${state}&`;
    } else {
        query = 'politicos?';
        data = {
            terms: terms.split(','),
            page: 1
        };
        method='POST'
    }

    try {
        const response = await API({ method, url: `${query}`, data });
        return { reserachText: text, ...response.data, status: response.status, state, method, query, data };
    } catch (error) {
        console.log(error.response.data.message)
        return { reserachText: text, ...error.response.status, state, method, query, data };
    }
}