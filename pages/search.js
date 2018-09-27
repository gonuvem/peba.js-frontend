import React, { Component } from 'react';
import { 
    Layout, 
    SearchBar, 
    Paginator,
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
        this.conditionalRendering = this.conditionalRendering.bind(this);
        this.defaultResponse = this.defaultResponse.bind(this);
        this.errorResponse = this.errorResponse.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.setState({ ...this.props });
        }
    }

    static async getInitialProps(context) {
        const { text, state, terms } = context.query;
        let query, data = {}, method='GET', reserachText;
        if(terms === undefined) {
            query = `politicos?uf=${state}&`;
            reserachText = text;
        } else {
            reserachText = terms;
            query = 'politicos?';
            data = {
                terms: terms.split(' '),
                page: 0
            };
            method='POST'
        }

        try {
            const response = await API({ method, url: `${query}page=0`, data });
            return { reserachText, ...response.data, status: response.status, state, method, query, data };
        } catch (error) {
            console.log('error', error)
            return { reserachText, status: error.response.status, state, method, query, data };
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

    conditionalRendering = () => {
        switch (this.state.status) {
            case 201:
                return this.defaultResponse();        
            default:
                return this.errorResponse();
        }
    }

    errorResponse = () => (
        <Container>
            <ResultText>
                Não foi encontrado nenhum político para a pesquisa{' '}
                <EvidenceText>
                    {this.state.reserachText}
                </EvidenceText>
            </ResultText>
        </Container>
    )

    defaultResponse = () => (
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
    )


    render() {
        return (
            <Layout headerContent={<SearchBar marginTopOnMobile={'60px'}/>}>
                {this.conditionalRendering()}
            </Layout>
        );
    }
}