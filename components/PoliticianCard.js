import React from 'react';
import { useRouter } from 'next/router';
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

const PoliticianCard = props => {
    const { 
        name,
        id,
        photo,
        function: polFunction,
        party,
        state,
        expenses,
    } = props;

    const router = useRouter();

    const handleClick = () => {
        router.push(`/politician?id=${id}`).then(() => window.scrollTo(0, 0))
    }

    return(
        <Container>
            <Data>
                <Photo alt={`Foto de ${name}`} src={photo || 'http://style.anu.edu.au/_anu/4/images/placeholders/person.png'} />
                <DetailsContainer>
                    <Name>{name}</Name>
                    <DetailText>Cargo: {polFunction}</DetailText>
                    <DetailText>Partido: {party}</DetailText>
                    <DetailText>Estado: {state}</DetailText>
                    <ExpensesText>Despesas: {toMoney(expenses)}</ExpensesText>
                </DetailsContainer>
            </Data>
            <ButtonContainer onClick={handleClick}>
                <InformationIcon alt='Icone de informações' src={informationIcon}/>
                <ButtonText>Ver informações</ButtonText>
            </ButtonContainer>
        </Container>
    );
}

export default PoliticianCard;
