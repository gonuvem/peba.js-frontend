import React, { Component } from 'react';
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

import { informationIcon } from '../general/Constants';

export default class PoliticianCard extends Component {
    render() {
        return(
            <Container>
                <Data>
                    <Photo src={this.props.photo} />
                    <DetailsContainer>
                        <Name>{this.props.name}</Name>
                        <DetailText>Partido: {this.props.party}</DetailText>
                        <DetailText>Estado: {this.props.state}</DetailText>
                        <ExpensesText>Despesas: R$ {this.props.expenses}</ExpensesText>
                    </DetailsContainer>
                </Data>
                <ButtonContainer>
                    <InformationIcon src={informationIcon}/>
                    <ButtonText>Ver informações</ButtonText>
                </ButtonContainer>
            </Container>
        );
    }
}