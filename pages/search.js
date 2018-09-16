import React, { Component } from 'react';
import { Layout, SearchBar, Paginator } from '../components';
import { 
    Container,
    ResultText,
    EvidenceText
} from '../styles/SearchPageStyles';


export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            politicians: 0,
            currentPage: 0
        }
    }

    render() {
        return (
            <Layout headerContent={<SearchBar/>}>
                <Container>
                    <ResultText>
                        <EvidenceText>
                            {this.state.politicians}
                        </EvidenceText>
                        {' '}políticos foram encontrados para a pesquisa{' '}
                        <EvidenceText>
                            PT
                        </EvidenceText>
                    </ResultText>
                    <Paginator 
                    numberOfPages={5} 
                    currentPage={this.state.currentPage} 
                    onPagePress={(index) => { this.setState({ currentPage: index}); }}
                    onNextPress={() => console.log('Next Pressed')}
                    onPreviousPress={() => console.log('Previous Pressed')}
                    />
                </Container>
            </Layout>
        );
    }
}