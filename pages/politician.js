import React, { Component } from 'react';
import { 
    Layout, 
    PieChart,
    VerticalBarChart,
    HorizontalBarChart,
    ChairChart,
    ExpensesTable
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
import API from '../general/Api';

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

export default class Politician extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...this.props
        }
    }
    
    render() {
        return(
            <Layout headerContent={<HeaderContent {...this.state} />}>
                <Container>
                    <VerticalBarChart title={'Gastos por mês no ano de 2018'} data={this.state.expensesByMonthData} />
                    <PieChart title={'Gastos de 2018 divididos por categoria'} data={this.state.expensesByType}/>
                    <ChairChart
                    frequency={this.state.frequency}
                    title={'Presenças nas sessões no ano de 2018'} 
                    />
                    <HorizontalBarChart title={'Maiores beneficiários dos gastos de 2018'} data={this.state.expensesByTopNProviders} />
                    <ExpensesTable id={this.props.politicianId} title={'Classificação das despesas'} />
                </Container>
            </Layout>
        );
    }
}


Politician.getInitialProps = async context => {
    const { id } = context.query;

    try{
        const general = await API.get(`politicos/${id}`);
        console.log('Frequency', general.data)
        const expenses = await API.get(`expenses/charts?politicianId=${id}`);
        console.log('Expenses', convertExpensesByMonth(expenses.data.expensesByMonth).datasets)
        return({
            politicianId: id,
            ...convertGeneralData(general.data),
            status: general.status,
            expensesByMonthData: convertExpensesByMonth(expenses.data.expensesByMonth),
            expensesByTopNProviders: convertExpensesByTopNProviders(expenses.data.expensesByTopNProviders),
            expensesByType: convertExpensesByType(expenses.data.expensesByType),
        });

    } catch (error) {
        console.log(error.response.data.message)
    }
}