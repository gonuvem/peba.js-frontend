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
    ChartsLine
} from '../styles/PoliticianPageStyles'
import { emailIcon, formatDate } from '../general/Constants';
import API from '../general/Api';

const HeaderContent = props => (
    <HeaderContainer>
        <Photo src={props.photo ? props.photo : 'http://style.anu.edu.au/_anu/4/images/placeholders/person.png'} />
        <Informations>{props.name}</Informations>
        <Informations>{props.party ? props.party : '(Partido não informado)'}-{props.state ? props.state : '(Estado não informado)'}</Informations>
        <EmailContainer>
            <EmailIcon src={emailIcon} />
            <Email>{props.email ? props.email : 'Email não fornecido'}</Email>
        </EmailContainer>
        <ExpensesContainer>
            <Expenses>{props.expenses ? `R$ ${props.expenses}` : 'Gastos não informados'}</Expenses>
            <SinceDate>{props.since ? `gastos a partir de ${formatDate(new Date(props.since))}` : 'Data não informada' }</SinceDate>
        </ExpensesContainer>
    </HeaderContainer>
);

const dataPie = {
    datasets: [{
        data: [10,20,30,15],
        backgroundColor: [
            '#95D6FF',
            '#FA9CE4',
            '#FFC260',
            '#91FCDF'
            ],
            hoverBackgroundColor: [
            '#95D6FF',
            '#FA9CE4',
            '#FFC260',
            '#91FCDF'
            ]
    }],
    labels: [
        'Gasolina',
        'Passagens',
        'Alimentação',
        'Auxílio Paletó'
    ]
}

const dataVerticalBar = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'],
    datasets: [
        {
            label: 'Valor em reais',
            backgroundColor: '#97C7F6',
            borderColor: '#4E98E0',
            borderWidth: 1,
            hoverBackgroundColor: '#97C7F6',
            hoverBorderColor: '#4E98E0',
            data: [6555.50, 5988.88, 8000.55, 8551.66, 560.99, 5555.88, 4660.99, 1000.55]
        }
    ]
}

const dataHorizontallBar = {
    labels: ['Posto Ipiranga', 'GoNuvem', 'HotCash', 'Meninos que fizeram o PEBA', 'Miss France'],
    datasets: [
        {
            label: 'Valor em reais',
            backgroundColor: '#97C7F6',
            borderColor: '#4E98E0',
            borderWidth: 1,
            hoverBackgroundColor: '#97C7F6',
            hoverBorderColor: '#4E98E0',
            data: [6555.50, 5988.88, 8000.55, 8551.66, 560.99]
        }
    ]
}

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
                    <VerticalBarChart title={'Gastos por mês no ano de 2018'} data={dataVerticalBar} />
                    <ChartsLine>
                        <PieChart title={'Gastos de 2018 divididos por categoria'} data={dataPie}/>
                        <ChairChart
                        presence={250}
                        justifiedAbsence={100}
                        unjustifiedAbsence={250}
                        total={600}
                        title={'Presenças nas sessões no ano de 2018'} 
                        />
                    </ChartsLine>
                    <HorizontalBarChart title={'Maiores beneficiários dos gastos de 2018'} data={dataHorizontallBar} />
                    <ExpensesTable title={'Classificação das despesas'} />
                </Container>
            </Layout>
        );
    }
}


Politician.getInitialProps = async context => {
    const { id } = context.query;

    try{
        const general = await API.get(`politicos/${id}`);
        return({ ...convertData(general.data), status: general.status });

    } catch (error) {
        console.log(error.response.data.message)
    }
    

    const props = {
        name: 'Francisco Everardo Oliveira da Silva',
        email: 'tiririca@camara.com',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Tiririca_na_camara.jpg/200px-Tiririca_na_camara.jpg',
        party: 'PQP',
        state: 'SP',
        expenses: '272.869,52',
        since: new Date()
    };
}

const convertData = data => ({
    id: data._id,
    name: data.nome,
    email: data.email,
    photo: data.urlFoto,
    party: data.siglaPartido,
    state: data.siglaUf,
    function: data.cargo,
    address: data.endereco,
    phone: data.telefone
})