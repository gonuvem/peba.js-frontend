import React, { PureComponent } from 'react';
import {
    Container
} from '../styles/LoadingSpinnerStyles';
import CircularProgress from '@material-ui/core/CircularProgress';


export default class LoadingSpinner extends PureComponent {

    render() {
        return (
            this.props.show ?
                <Container backgroundColor={this.props.backgroundColor} position={this.props.position}>
                    <CircularProgress style={{ color: '#FFC800'}} thickness={5}/>
                </Container>
            : 
                null
        );
    }
}