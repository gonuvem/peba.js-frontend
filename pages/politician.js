import React, { Component } from 'react';
import { 
    Layout, 
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
    SinceDate
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