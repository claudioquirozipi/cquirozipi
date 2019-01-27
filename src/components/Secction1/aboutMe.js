import React, { Component } from 'react';
import img from '../../assets/img/user.jpg';
import { 
    ContainerAboutMe,
    ImgUser,
    PUser

} from './styled';
class AboutMe extends Component {
    render(){
        return(
            <ContainerAboutMe>
                <ImgUser src={ img }/>
                <PUser>
                Soy ingeniero en procesos industriales y desarrollador web.
                Me dedico al área del frontend y puedo llevar 
                código casi cualquier diseño que se necesite. 
                <br/>
                <br/>
                Actualmente estoy aprendiendo el desarrollo de Apps y así fusionar mi carrera de
                ingeniería de procesos industriales con mi otra pasión, la programación.
                </PUser>


            </ContainerAboutMe>
        );
    }
}

export default AboutMe;