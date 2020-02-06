import React from 'react';
import { Wrapper, Text, Logo } from '../styles/GithubButtonStyles';
import { githubLogo } from '../general/Constants';

const GithubButton = () => (
    <Wrapper href='https://github.com/gonuvem/peba.js-frontend' target='_blank'>
        <Logo alt='Logo Github' src={githubLogo} />
        <Text>Contribua</Text>
    </Wrapper>
);

export default GithubButton;
