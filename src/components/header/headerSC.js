import styled from 'styled-components';
import { colors, MQ } from '../../config/resources';

export const HeaderSC = styled.div`
    background: ${colors.grey};
    padding: 0;
`

export const Name = styled.h1`
    color: ${colors.blueDark};
    font-size: 30px;
    margin: 30px 10vw 0;
    @media ${MQ.sm} {
    font-size: 50px;
    }
`
export const Profession = styled.h2`
    color: ${colors.blueDark};
    margin: 0 10vw;
    font-weight: 400;
    font-size: 18px;
`
export const UpHeader = styled.a`
    background: ${colors.blue};
    border-radius: 50%;
    position: fixed;
    bottom: 1vw;
    right: 1vw;
    width: 8vw;
    height: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${MQ.md} {
        bottom: 2.5vw;
        right: 2.5vw;
        width: 5vw;
        height: 5vw;
    }
    svg {
        width: 2.5vw;
        height: 2.5vw;
    }
`