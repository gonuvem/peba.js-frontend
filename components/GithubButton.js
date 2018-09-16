import React, { PureComponent } from 'react';
import styled from 'styled-components';

const githubLogo = require('../static/images/github-logo.svg');

const Wrapper = styled.div`
    width: 122px;
    height: 27px;
    background-color: #E6E6E6;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 4px;
    cursor: pointer
`;

const Text = styled.p`
    font-family: Roboto;
    font-weight: 600
    color: #2F2F2F;
    font-size: 14px;
`;

const Logo = styled.img`
    width: 22px;
    height: 22px;
    object-fit: contain;
    margin-right: 12px
`;


export default class GithubButton extends PureComponent {

    render() {
        return(
            <Wrapper onClick={() => {}}>
                <Logo src={githubLogo} />
                <Text>Contribua</Text>
            </Wrapper>
        );
    }
}