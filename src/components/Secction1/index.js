import React, { Component } from 'react';
import { 
    Secction, 
    ContainerFlexSB,
    Tittle1,
    Line1
} from '../container/styled';
import Networks from './networks';
import AboutMe from './aboutMe';

class Secction1 extends Component {
    render(){
        return(
            <Secction id="about">
                <ContainerFlexSB>
                    <Tittle1>About me</Tittle1>
                    <Line1/>
                </ContainerFlexSB>
                <ContainerFlexSB>
                    <Networks/>
                    <AboutMe/>
                </ContainerFlexSB>

            </Secction>
        );
    }
}

export default Secction1;