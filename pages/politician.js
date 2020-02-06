import React, { useState, useEffect } from 'react';
import { 
    Layout, 
    PieChart,
    VerticalBarChart,
    HorizontalBarChart,
    ChairChart,
    ExpensesTable,
    LoadingSpinner
} from '../components';
import {
    HeaderContainer,
    Photo,
    Informations,
    Email,
    EmailContainer,
    EmailIcon,
    ExpensesContainer,
    Expenses,
    SinceDate,
    Container,
} from '../styles/PoliticianPageStyles'
import { 
    emailIcon, 
    formatDate, 
    convertExpensesByMonth, 
    convertGeneralData,
    convertExpensesByTopNProviders,
    convertExpensesByType,
    toMoney
} from '../general/Constants';
import api from '../general/Api';
import { currentYear, queryStringParser } from '../general/Constants';

const HeaderContent = props => (
    <HeaderContainer>
        <Photo src={props.photo || 'http://style.anu.edu.au/_anu/4/images/placeholders/person.png'} />
        <Informations>{props.name}</Informations>
        <Informations>{props.party || '(Partido não informado)'}-{props.state || '(Estado não informado)'}</Informations>
        <EmailContainer>
            <EmailIcon src={emailIcon} />
            <Email>{props.email || 'Email não fornecido'}</Email>
        </EmailContainer>
        <ExpensesContainer>
            <Expenses>{props.expenses ? `${toMoney(props.expenses)}` : 'Gastos não informados'}</Expenses>
            <SinceDate>{props.since ? `consulta realizada em ${formatDate(new Date(props.since))}` : 'Data não informada' }</SinceDate>
        </ExpensesContainer>
    </HeaderContainer>
);

const Politician = () => {
   const [generalData, setGeneralData] = useState({});
   const [expensesData, setExpensesData] = useState({});
   const [loading, setLoading] = useState(true);
    
    const loadData = async () => {
        const { id } = queryStringParser(location.search);

        try {
            const [generalRes, expensesRes] = await Promise.all([
                api.get(`politicos/${id}`),
                api.get(`expenses/charts?politicianId=${id}`),
            ]);

            const {
                expensesByMonth,
                expensesByTopNProviders,
                expensesByType,
            } = expensesRes.data;

            const general = convertGeneralData(generalRes.data);
            const expenses = {
                month: convertExpensesByMonth(expensesByMonth),
                topNProviders: convertExpensesByTopNProviders(expensesByTopNProviders),
                type: convertExpensesByType(expensesByType),
            };

            setGeneralData(general);
            setExpensesData(expenses);
            setLoading(false);
        } catch (err) {
            setGeneralData({});
            setExpensesData({});
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    if (loading) {
        return (
            <LoadingSpinner show={loading} position='fixed'/>
        );
    }

    const { month, topNProviders, type } = expensesData;
    const { frequency, id } = generalData;
    return(
        <Layout headerContent={<HeaderContent {...generalData} />}>
            <Container>
                <VerticalBarChart title={`Gastos por mês no ano de ${currentYear}`} data={month} />
                <PieChart title={`Gastos de ${currentYear} divididos por categoria`} data={type}/>
                <ChairChart
                frequency={frequency}
                title={`Presenças nas sessões no ano de ${currentYear}`} 
                />
                <HorizontalBarChart title={`Maiores beneficiários dos gastos de ${currentYear}`} data={topNProviders} />
                <ExpensesTable id={id} title={'Classificação das despesas'} />
            </Container>                
        </Layout>
    );
}

export default Politician;

