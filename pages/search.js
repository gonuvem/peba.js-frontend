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
        await this.setState({currentPage: this.state.currentPage + 1});
        this.requestNewPage(this.state.currentPage);
    }

    previousPage = async () => {
        await this.setState({currentPage: this.state.currentPage - 1});
        this.requestNewPage(this.state.currentPage);
    }

    requestNewPage = page => {
        API.get(`politicos?uf=${this.props.state}&page=${page}`)
        .then((response) => {
            console.log('Pagination Response', response.data);
            this.setState({ ...response.data })
        })
        .catch((error) => {
            console.log('Pagination Error', error.response);
        })
    }

    pagePressed = async page => {
        console.log('Page pressed', page)
        await this.setState({currentPage: page});
        this.requestNewPage(this.state.currentPage);
    }

    render() {
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
    const { text, state } = context.query;

    try {
        const response = await API.get(`politicos?uf=${state}&page=0`);
        return { reserachText: text, ...response.data, status: response.status, state };
    } catch (error) {
        return { reserachText: text, ...error.response.status, state };
    }
}