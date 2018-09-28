import React, { PureComponent } from 'react';
import {
    Wrapper,
    Text,
    Logo
} from '../styles/GithubButtonStyles';
import { githubLogo } from '../general/Constants';

export default class GithubButton extends PureComponent {

    render() {
        return(
            <Wrapper href='' target='_blank'>
                <Logo src={githubLogo} />
                <Text>Contribua</Text>
            </Wrapper>
        );
    }
}