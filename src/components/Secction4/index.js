import React, { Component } from 'react';
import { 
    Secction,
    ContainerFlexSB,
    Tittle2,
    Line1
} from '../container/styled';
import { 
    UlWebs,
    ContainerRocket,
    ImgRocket
} from '../Secction3/styled';
import LiWebs from '../Secction3/LiWebs';
import grafico from '../../assets/img/icon/grafico.svg';
import contador from '../../assets/img/contador.PNG';

class Secction3 extends Component {
    render(){
        return(
            <Secction id="apps">
                <ContainerFlexSB>
                    <Tittle2>Apps</Tittle2>
                    <Line1/>
                </ContainerFlexSB>
                <ContainerFlexSB>
                    <ContainerRocket>
                        <ImgRocket src={grafico}/>
                    </ContainerRocket>
                    <UlWebs>
                        <LiWebs 
                            imgLink={contador} 
                            title="Contador" 
                            urlHref="https://contador-55ade.firebaseapp.com/"
                        />
                        
                    </UlWebs>
                </ContainerFlexSB>
            </Secction>
        );
    }
}

export default Secction3;