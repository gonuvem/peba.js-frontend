import React, { useState, useEffect } from 'react';
import { 
    Layout, 
    SearchBar, 
    Paginator,
    PoliticianCard,
    LoadingSpinner
} from '../components';
import { 
    Container,
    ResultText,
    EvidenceText
} from '../styles/SearchPageStyles';
import { queryStringParser } from '../general/Constants';
import api from '../general/Api';

const Search = () => {
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [pages, setPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [politicians, setPoliticians] = useState([]);

    const { terms, state: uf } = queryStringParser(typeof window !== 'undefined' ? location.search : '');
    
    const requestData = async () => {
        setLoading(true);
        const method = uf ? 'GET' : 'POST';
        const params = uf ? { uf, page } : {} ;
        const data = uf ? {} : { terms: terms.split(' '), page }

        api({ method, url: 'politicos', params: { ...params, page }, data })
        .then(res => {
            const { pages = 0, total = 0, politicians = [] } = res.data;
            setPages(pages);
            setTotal(total);
            setPoliticians(politicians);
            setLoading(false);
        })
        .catch(err => {
            setPages(0);
            setTotal(0);
            setPoliticians([]);
            setLoading(false);
        })
    }

    useEffect(() => {
        requestData();
    }, [page, uf]);

    useEffect(() => {
        setPage(0);
    }, [terms]);

    const render = () => {
        if(loading) {
            return <LoadingSpinner show position='absolute' />
        };

        if(!politicians.length) {
            return (
                <Container>
                    <ResultText>
                        Não foi encontrado nenhum político para a pesquisa{' '}
                        <EvidenceText>
                            {uf || terms}
                        </EvidenceText>
                    </ResultText>
                </Container>
            )
        }
        
        return (
            <Container>
                <ResultText>
                    <EvidenceText>
                        {total}
                    </EvidenceText>
                    {' '}político(s) foram encontrados para a pesquisa{' '}
                    <EvidenceText>
                    {uf || terms}
                    </EvidenceText>
                </ResultText>
                <Paginator 
                pageCount={pages} 
                onPageChange={({ selected }) => setPage(selected)}
                forcePage={page}
                />
                {politicians.map((el, id) => (
                    <PoliticianCard 
                    function={el.cargo}
                    id={el._id}
                    key={id}
                    name={el.nome} 
                    photo={el.urlFoto}
                    expenses={el.totalDespesas}
                    state={el.siglaUf}
                    party={el.siglaPartido}
                    />
                ))}
                <Paginator
                style={{marginTop: 16}}
                pageCount={pages} 
                onPageChange={({ selected }) => setPage(selected)}
                forcePage={page}
                />
            </Container>
        )
    }

    return (
        <Layout headerContent={<SearchBar marginTopOnMobile={'60px'}/>}>
            {render()}
        </Layout>
    );
    
}

export default Search;
