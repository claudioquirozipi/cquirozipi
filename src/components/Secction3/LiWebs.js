import React, { Component } from 'react';


import { 
    LiwebsSC,
    LiContent,
    ImgSC,
    LinkSC,
    Title
} from './styled';

class LiWebs extends Component {

    render() {
        return (
            <LiwebsSC>
                <ImgSC  linkUrl={this.props.imgLink}/>
                <LiContent>
                    <Title>{this.props.title}</Title>    
                    {/* <p>{this.props.description}</p> */}
                </LiContent>    
                <LinkSC href={this.props.urlHref} target="_blanck">ir</LinkSC>
            </LiwebsSC>
        );
    }
}

export default LiWebs;