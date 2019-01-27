import styled  from 'styled-components';
import { colors, MQ } from '../../config/resources';

export const Backgroundblue = styled.div`
    background: ${colors.blueDark};
    margin-top: 50px;
`
export const Secction = styled.div`
    padding: 20px 10vw 0;
`
export const ContainerFlexSB = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;    
    @media ${MQ.sm} {
        flex-direction: row;
    }
`
export const Tittle1 = styled.h2`
    color: ${colors.white};
    background: ${colors.blueDark};
    position: relative;
    padding: 5px 40px;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    font-size: 20px;
`
export const Tittle2 = styled.h2`
    color: ${colors.white};
    background: ${colors.blueLight};
    padding: 5px 30px;
    border-radius: 10px;
    font-size: 20px;
    /* font-weight: 400; */
`
export const Line1 = styled.div`
    background: ${colors.blueLight};
    height: 3px;
    width: 100%;
    @media ${MQ.sm} {
        width: 70%;
    }
`