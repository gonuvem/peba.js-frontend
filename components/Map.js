import React, { PureComponent } from 'react';
import ReactSVG from 'react-svg';
import '../static/css/map.css';

const map = require('../static/images/Brazil_Map.svg');

const states = [
    'RO',
    'AC',
    'AM',
    'RR',
    'AP',
    'TO',
    'MT',
    'GO',
    'MS',
    'MG',
    'PR',
    'RS',
    'BA',
    'PI',
    'CE',
    'RN',
    'AL',
    'SE',
    'DF',
    'PE',
    'MA',
    'PA',
    'SP',
    'RJ',
    'ES',
    'SC',
    'PB'
]

export default class Map extends PureComponent {

    /*componentDidMount() {
        const components = document.getElementsByClassName('c')[0]
        console.log(components)
    }*/

    render() {
        return (
            <ReactSVG src={map} className='map'/>
        )
    }
}