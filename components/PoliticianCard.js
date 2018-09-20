import React, { Component } from 'react';
import Router from 'next/router';
import {
    Container,
    Photo,
    DetailsContainer,
    Name,
    DetailText,
    ExpensesText,
    Data,
    ButtonContainer,
    ButtonText,
    InformationIcon
} from '../styles/PoliticianCardStyles';

import { informationIcon, toMoney } from '../general/Constants';

export default class PoliticianCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        Router.push(`/politician?id=${this.props.id}`, `/politician/${this.props.id}`).then(() => window.scrollTo(0, 0))
    }

    render() {
        return(
            <Container>
                <Data>
                    <Photo src={this.props.photo || 'http://style.anu.edu.au/_anu/4/images/placeholders/person.png'} />
                    <DetailsContainer>
                        <Name>{this.props.name}</Name>
                        <DetailText>Cargo: {this.props.function}</DetailText>
                        <DetailText>Partido: {this.props.party}</DetailText>
                        <DetailText>Estado: {this.props.state}</DetailText>
                        <ExpensesText>Despesas: {toMoney(this.props.expenses)}</ExpensesText>
                    </DetailsContainer>
                </Data>
                <ButtonContainer onClick={this.handleClick}>
                    <InformationIcon src={informationIcon}/>
                    <ButtonText>Ver informações</ButtonText>
                </ButtonContainer>
            </Container>
        );
    }
}