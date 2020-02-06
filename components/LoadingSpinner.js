import React from 'react';
import {
    Container
} from '../styles/LoadingSpinnerStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingSpinner = ({ show, backgroundColor, position }) => {
    return (
        show ?
            <Container backgroundColor={backgroundColor || 'transparent'} position={position}>
                <CircularProgress style={{ color: '#FFC800'}} thickness={5}/>
            </Container>
        : 
            null
    );
}

export default LoadingSpinner;
