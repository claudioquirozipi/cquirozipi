import styled  from 'styled-components';
import { MQ } from '../../config/resources';
export const ContainerSVG = styled.div`
    width: 100%;    
`
export const ContainerSkill = styled.div`
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
    margin: 40px 0;
    grid-gap: 3vw;
    @media ${MQ.sm} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${MQ.md} {
        grid-template-columns: repeat(6, 1fr);
    }

`