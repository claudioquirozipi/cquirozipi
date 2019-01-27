import React, { Component } from 'react';

import Nav from './nav';
import { 
    HeaderSC,
    Name,
    Profession,
    UpHeader
} from './headerSC';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            navData: [
                {name: "Sobre mi", id: "about"},
                {name: "Habilidades", id: "skill"},
                {name: "Portafolio", id: "works"},
                {name: "Apps", id: "apps"}
            ]
        };
    }  
    render() {
        return (
            <HeaderSC id="header">
                <Name>Ing Claudio Quiroz</Name>
                <Profession>Desarrolador Web</Profession>
                <Nav navData={this.state.navData}/>
                <UpHeader href="#header">
                    <svg viewBox="0 0 100 100">
                        <path 
                            fill="white"
                            d="M50 0 M 100 80 H 0 L 50 0"/>
                    </svg>
                </UpHeader>
            </HeaderSC>
        );
    }
}

export default Header;  