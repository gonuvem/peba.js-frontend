import React, { PureComponent } from 'react';
import ReactSVG from 'react-svg';
import Router from 'next/router';
import '../static/css/map.css';
import {
    map,
    states
} from '../general/Constants';


export default class Map extends PureComponent {
    constructor(props){
        super(props);
        this.addStateActions = this.addStateActions.bind(this);
    }

    addStateActions = element => {
        const svgStates = element.getElementsByClassName('c');
        Array.from(svgStates).forEach((element, index) => {
            element.addEventListener('click', () => {
                Router.push({
                    pathname: `/search`,
                    query: {
                        text: states[index].fullName,
                        state: states[index].abbreviation
                    },
                    asPath: `/search/state/?text=${states[index].fullName}&state=${states[index].abbreviation}`
                }).then(() => window.scrollTo(0, 0));
            })
        })
    }

    render() {
        return (
            <ReactSVG src={map} onInjected={this.addStateActions} className='map'/>
        )
    }
}