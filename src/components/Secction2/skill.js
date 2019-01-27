import React, { Component } from 'react';
import { colors } from '../../config/resources';

import { ContainerSVG } from './styled';

class Skill extends Component {
    render(){
        const percentage =  parseInt(this.props.percentage)*250/100 + ",250"
        const textPercentage = this.props.percentage + "%"
        return(
            <ContainerSVG>
                <svg viewBox="0 0 100 120" width="100%" height="100%">
                    <circle 
                        cx="50" 
                        cy="50" 
                        r="40" 
                        fill="transparent" 
                        strokeWidth="10"
                        stroke={colors.grey}                        
                    />
                    <circle 
                        cx="50" 
                        cy="50" 
                        r="40" 
                        fill="transparent" 
                        strokeWidth="10"
                        stroke={colors.blueDark}                 
                        strokeLinecap="round"
                        stroke-dasharray={percentage}
                    />
                    <text 
                        x="50" 
                        y="55" 
                        font-size="15" 
                        text-anchor="middle" 
                        fill={colors.black}
                    >
                        {textPercentage}
                    </text>
                    <text 
                        x="50" 
                        y="115" 
                        font-size="15" 
                        text-anchor="middle" 
                        fill={colors.black}
                    >
                        {this.props.title}
                    </text>
                </svg>                    
            </ContainerSVG>
        );
    }
}

export default Skill;