import React, { Component } from 'react';

import facebook from '../../assets/img/icon/facebook.svg';
import twitter from '../../assets/img/icon/twitter.svg';
import github from '../../assets/img/icon/github.svg';
import linkedin from '../../assets/img/icon/linkedin.svg';

import { 
    NetworksUl,
    NetworksLi,
    IconContainer,
    ImgIcon,
    NetworksTitle,
    NetworksSubTitle

} from './styled';


class Networks extends Component {
    render() {
        return (
            <NetworksUl>
                <NetworksLi>
                    <NetworksTitle>Experiencia</NetworksTitle>
                    <NetworksSubTitle>2 años</NetworksSubTitle>
                </NetworksLi>
                <NetworksLi>
                    <NetworksTitle>Edad</NetworksTitle>
                    <NetworksSubTitle>32 años</NetworksSubTitle>
                </NetworksLi>
                <NetworksLi>
                    <IconContainer>
                        <a href="https://www.facebook.com/Cquirozipi-300417390755879/?modal=admin_todo_tour" target="_blanck">
                            <ImgIcon src={ facebook }  alt="facebook"/>
                        </a>
                        <a href="https://twitter.com/cquirozipi" target="_blanck">
                            <ImgIcon src={ twitter } alt="twitter"/>
                        </a>
                        <a href="https://github.com/claudioquirozipi" target="_blanck">
                            <ImgIcon src={ github } alt="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/claudio-quiroz-214630bb/" target="_blanck">
                            <ImgIcon src={ linkedin } alt="linkedin"/>
                        </a>
                    </IconContainer>    
                </NetworksLi>
            </NetworksUl>
        );
    }
}

export default Networks;