import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg'
import { Layout, SearchBar, LoadingSpinner } from '../components';
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
import api from '../general/Api';

const HeaderContent = () => (
    <HeaderContainer>
        <Logo src={pebaLogo} />
        <SearchBar />
    </HeaderContainer>
);

const Glossary = props => {
    const [currentPage, setCurrentPage] = useState(0);
    const [terms, setTerms] = useState([]);
    const [loading, setLoading] = useState(true);

    const requestNewLetter = async () => {
        setLoading(true);
        api.get(`glossary`, { params: {
            letter: letters[currentPage]
        }})
        .then(res => {
            setTerms(res.data.terms || []);
            setLoading(false);
        })
        .catch(err => {
            setTerms([]);
            setLoading(false);
        })
    }

    useEffect(() => {
        requestNewLetter();
    }, [currentPage]);

    const pageController = direction => {
        direction === 'left'
        ?
            currentPage !== 0 ? setCurrentPage(currentPage) : undefined
        :
            currentPage !== 25 ? setCurrentPage(currentPage + 1) : undefined;
    }

    const conditionalRendering = () => {
        if(loading) {
            return <LoadingSpinner show />
        };

        return(terms.length
            ?
                <Content>
                    {terms.map((el, index) => (
                        <Section key={index}>
                            <TitleContainer>
                                <Title>{el.term}</Title>
                            </TitleContainer>
                            <AboutText>
                                {el.definition}
                            </AboutText>
                        </Section>
                    ))}
                </Content>
            : 
                <Content>
                    <ErrorMessage> Não existem termos cadastrados com a letra {letters[currentPage]}</ErrorMessage>
                </Content>
        )
    }

    return (
        <Layout headerContent={<HeaderContent />}>
            <Container>
                <ControllerIconContainer onClick={() => pageController('left')}>
                    <ReactSVG src={previousIcon} svgClassName='enabledController' />
                </ControllerIconContainer>
                <LettersContainer>
                { letters.map((el, index) => (
                    <Page
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    fontColor={index === currentPage ? 'white' : '#FFC800'}
                    backgroundColor={index === currentPage ? '#FFC800' : 'white'}
                    >
                        {el}
                    </Page>
                ))}
                </LettersContainer>
                <ControllerIconContainer onClick={() => pageController('right')}>
                    <ReactSVG src={nextIcon} svgClassName='enabledController' />
                </ControllerIconContainer>
            </Container>
            <SelectContainer>
                <Select>
                    <select onChange={e => setCurrentPage(e.target.value)}>
                    { letters.map((el, index) => (
                        <option
                        value={index}
                        key={index}
                        >
                            {`Letra ${el}`}
                        </option>
                    ))}
                    </select>
                </Select>
                <SelectHint>
                    Seleciona uma letra acima para listar todas os termos
                </SelectHint>
            </SelectContainer>
            {conditionalRendering()}
        </Layout>
    );
}

export default Glossary;
