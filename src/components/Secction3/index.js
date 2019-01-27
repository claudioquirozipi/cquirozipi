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
} from './styled';
import LiWebs from './LiWebs';
import rocket from '../../assets/img/icon/rocket.svg';
import tracsa from '../../assets/img/tracsa.PNG';
import sellboot from '../../assets/img/sellboot.PNG';
import boolanews from '../../assets/img/boolanews.PNG';
import junmat from '../../assets/img/junmat.PNG';
import wullpers from '../../assets/img/wullpers.PNG';



class Secction3 extends Component {
    render(){
        return(
            <Secction id="works">
                <ContainerFlexSB>
                    <Tittle2>Portafolio</Tittle2>
                    <Line1/>
                </ContainerFlexSB>
                <ContainerFlexSB>
                    <ContainerRocket>
                        <ImgRocket src={rocket}/>
                    </ContainerRocket>
                    <UlWebs>
                        <LiWebs 
                            imgLink={boolanews} 
                            title="Boolanews" 
                            description="Esta está realizada con Sass"
                            urlHref="http://www.boolanews.com/"
                        />
                        <LiWebs 
                            imgLink={junmat} 
                            title="Junmat" 
                            description="Esta está realizada con js puro"
                            urlHref="https://junmat.com/"
                        />
                        <LiWebs 
                            imgLink={wullpers} 
                            title="Wullpers" 
                            description="Landing-page con Sass y php"
                            urlHref="http://wulpers.com/"
                        />
                        <LiWebs 
                            imgLink={sellboot} 
                            title="Sellboot" 
                            description="Landing-page con Sass y php"
                            urlHref="http://sellboot.com/"
                        />
                        <LiWebs 
                            imgLink={tracsa} 
                            title="Tracsa" 
                            description="Página realizada con Wordpress y Sass"
                            urlHref="http://www.tracsa.com.ar/"
                        />
                    </UlWebs>
                </ContainerFlexSB>
            </Secction>
        );
    }
}

export default Secction3;