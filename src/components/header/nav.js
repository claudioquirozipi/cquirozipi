import React, { Component } from 'react';

import {
    NavContainer,
    NavUl,
    NavLi,
    NavA
} from './navSC';

class Nav extends Component {
    
    render() {
        
        return (
            
            <NavContainer>
                <NavUl>
                    {this.props.navData.map((data,i)=>{
                        if( i === 0 ){
                            return(
                                <NavA href={"#"+ data.id}>
                                    <NavLi key={i}>
                                        {data.name} 
                                    </NavLi>
                                </NavA>
                            )

                        } else {
                            return(
                                <NavA href={"#"+ data.id}>
                                    <NavLi key={i} >
                                        {data.name} 
                                    </NavLi>
                                </NavA>
                            )
                        }
                    })}
                    
                </NavUl>
            </NavContainer>
    
        );
    }
}

export default Nav;