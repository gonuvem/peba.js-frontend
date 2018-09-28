import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import { Layout, SearchBar } from '../components';
import {
    Logo,
    Title,
    TitleContainer,
    Content,
    AboutText,
    HeaderContainer,
    Section,
    ErrorMessage
} from '../styles/IndexPageStyles';
import {
    Container,
    ControllerIconContainer,
    Page,
    LettersContainer,
    Select,
    SelectContainer,
    SelectHint
} from '../styles/PaginatorStyles';
import {
    nextIcon,
    previousIcon,
    pebaLogo,
    letters
} from '../general/Constants';
import '../static/css/Paginator.css';
import API from '../general/Api';

const HeaderContent = () => (
    <HeaderContainer>
        <Logo src={pebaLogo} />
        <SearchBar />
    </HeaderContainer>
);

export default class Glossary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            ...this.props
        };

        this.requestNewLetter = this.requestNewLetter.bind(this);
        this.conditionalRendering = this.conditionalRendering.bind(this);

    }


    requestNewLetter = async page => {
        try {
            const response = await API({ method: 'get', url: `glossary?letter=${letters[page]}` });
            this.setState({ ...response.data, status: response.status });
        } catch (error) {
            this.setState({ status: response.status });

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.currentPage !== this.state.currentPage) {
            this.requestNewLetter(this.state.currentPage);
        }
    }

    static async getInitialProps(context) {
        try {
            const response = await API({method: 'get', url: `glossary?letter=${letters[0]}` });
            return({ ...response.data, status: response.status });
        } catch (error) {
            console.log('Error Glossary', error)
            return({ ...error.response.data, status: error.response.status });
        }
    }

    pageController = direction => {
        direction === 'left'
        ?
            this.state.currentPage !== 0 ? this.setState({ currentPage: this.state.currentPage - 1 }) : undefined
        :
            this.state.currentPage !== 25 ? this.setState({ currentPage: this.state.currentPage + 1 }) : undefined;
    }

    conditionalRendering = () => (
        this.state.status === 201 
        ?
            <Content>
                {this.state.terms.map((element, index) => (
                    <Section key={index}>
                        <TitleContainer>
                            <Title>{element.term}</Title>
                        </TitleContainer>
                        <AboutText>
                            {element.definition}
                        </AboutText>
                    </Section>
                ))}
            </Content>
        : 
            <Content>
                <ErrorMessage> Não existem termos cadastrados com a letra {letters[this.state.currentPage]}</ErrorMessage>
            </Content>
    )

    render() {
        return (
            <Layout headerContent={<HeaderContent />}>
                <Container>
                    <ControllerIconContainer onClick={() => { this.pageController('left')}}>
                        <ReactSVG src={previousIcon} svgClassName='enabledController' />
                    </ControllerIconContainer>
                    <LettersContainer>
                    { letters.map((element, index) => (
                        <Page
                        key={index}
                        onClick={() => this.setState({ currentPage: index})}
                        fontColor={index === this.state.currentPage ? 'white' : '#FFC800'}
                        backgroundColor={index === this.state.currentPage ? '#FFC800' : 'white'}
                        >
                            {element}
                        </Page>
                    ))}
                    </LettersContainer>
                    <ControllerIconContainer onClick={() => { this.pageController('right')}}>
                        <ReactSVG src={nextIcon} svgClassName='enabledController' />
                    </ControllerIconContainer>
                </Container>
                <SelectContainer>
                    <Select>
                        <select onChange={(event) => this.setState({currentPage: event.target.value})}>
                        { letters.map((element, index) => (
                            <option
                            value={index}
                            key={index}
                            >
                                {`Letra ${element}`}
                            </option>
                        ))}
                        </select>
                    </Select>
                    <SelectHint>
                        Seleciona uma letra acima para listar todas os termos
                    </SelectHint>
                </SelectContainer>
                {this.conditionalRendering()}
            </Layout>
        );
    }
}