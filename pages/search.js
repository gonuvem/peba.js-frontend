import React, { Component } from 'react';
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

        this.requestNewPage = this.requestNewPage.bind(this);
    }

    static async getInitialProps(context) {
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
            const response = await API({ method, url: `${query}page=0`, data });
            return { reserachText: text, ...response.data, status: response.status, state, method, query, data };
        } catch (error) {
            console.log('error', error)
            return { reserachText: text, ...error, state, method, query, data };
        }
    }

    requestNewPage = async page => {
        API({ method: this.state.method, url: `${this.state.query}page=${page.selected}`,  ...this.state.data })
        .then((response) => {
            this.setState({ ...response.data, currentPage: page.selected })
        })
        .catch((error) => {
            console.log('Pagination Error', error.response);
        })
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
                        pageCount={this.state.pages} 
                        onPageChange={this.requestNewPage} 
                        forcePage={this.state.currentPage}
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
                        pageCount={this.state.pages} 
                        onPageChange={this.requestNewPage}
                        forcePage={this.state.currentPage}
                        />
                    </Container>
                </Layout>
            : <div>Error</div>
        );
    }
}

/*Search.getInitialProps = async context => {
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
        console.log(error)
        return { reserachText: text, ...error.response.status, state, method, query, data };
    }
}*/