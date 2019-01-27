import React, { Component } from 'react';
import Skill from './skill';
import { 
    Secction, 
    ContainerFlexSB,
    Tittle1,
    Line1
} from '../container/styled';
import {ContainerSkill} from './styled';

class Secction2 extends Component {
    render(){
        return(
            <Secction id="skill">
                <ContainerFlexSB>
                    <Tittle1>Habilidades</Tittle1>
                    <Line1/>
                </ContainerFlexSB>
                <ContainerSkill>
                    <Skill  percentage="80" title="HTML"/>
                    <Skill  percentage="90" title="Css"/>
                    <Skill  percentage="75" title="js"/>
                    <Skill  percentage="30" title="React"/>
                    <Skill  percentage="35" title="Firebase"/>
                    <Skill  percentage="18" title="Node.js"/>
                    
                </ContainerSkill>
            </Secction>
        );
    }
}

export default Secction2;