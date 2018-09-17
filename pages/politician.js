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

const HeaderContent = props => (
    <HeaderContainer>
        <Photo src={props.photo} />
        <Informations>{props.name}</Informations>
        <Informations>{props.party}-{props.state}</Informations>
        <EmailContainer>
            <EmailIcon src={emailIcon} />
            <Email>{props.email}</Email>
        </EmailContainer>
        <ExpensesContainer>
            <Expenses>R$ {props.expenses}</Expenses>
            <SinceDate>gastos a partir de {formatDate(new Date(props.since))}</SinceDate>
        </ExpensesContainer>
    </HeaderContainer>
);

export default class Politician extends Component {
    render() {
        return(
            <Layout headerContent={<HeaderContent {...this.props} />}>
                
            </Layout>
        );
    }
}


Politician.getInitialProps = async context => {
    const { id } = context.query;
    const props = {
        name: 'Francisco Everardo Oliveira da Silva',
        email: 'tiririca@camara.com',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Tiririca_na_camara.jpg/200px-Tiririca_na_camara.jpg',
        party: 'PQP',
        state: 'SP',
        expenses: '272.869,52',
        since: new Date()
    };

    return props;
}