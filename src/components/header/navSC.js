import styled from 'styled-components';
import { colors, MQ } from '../../config/resources';

export const NavContainer = styled.nav`
    margin: 20px 0 0px;
    @media ${MQ.sm} {
        display: inline-block;
        margin: 20px 10vw 30px;
    }
`

export const NavUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 15px 25px;
    margin: 0;
    background: ${colors.blueDark};
    list-style: none;
    @media ${MQ.sm} {
        flex-direction: row;
        border-radius: 10px;
    }
`
export const NavA = styled.a`
    text-decoration: none;
`
export const NavLi = styled.li`
    color: ${colors.white};
    border-left: ${props => props.border ? "2px solid " + colors.white : "none"};
    cursor: pointer;
    padding: 5px 25px;
    text-align: center;
    transition: all .3s;
    :hover {
        background: ${colors.blue};
        color: ${colors.blueDark};
        border-left: ${props => props.border ? "2px solid " + colors.blue : "none"};
        transform: scale(1.05);
    }   
    font-size: 25px;     
    @media ${MQ.sm} {
        font-size: 17px;
    }
    @media ${MQ.md} {
        font-size: 25px;
    }
`