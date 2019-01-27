import styled from 'styled-components';
import { colors, MQ } from '../../config/resources';

export const ContainerAboutMe = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media ${MQ.sm} {
        width: 70%;
    }
    @media ${MQ.md} {
        flex-direction: row;
    }
`
export const ImgUser = styled.img`
    width: 100px;
    height: auto;
    border-right: 3px solid ${colors.blueLight};
    margin-bottom: 40px;
    @media ${MQ.md} {
        margin-bottom: 0;
    }
`
export const PUser = styled.p`
    width: 100%;
    padding: 0;
    text-align: left;
    margin: 0;
    @media ${MQ.sm} {
        box-sizing: border-box;
        padding-left: 30px;
    }
`
export const NetworksUl = styled.ul`
    padding: 0;
    list-style: none;
    margin: 25px;
    @media ${MQ.sm} {
        margin: 16px 0;
    }
`
export const NetworksLi = styled.li`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 30px;
`
export const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const ImgIcon = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 15px;
    cursor: pointer;
    transition: transform .3s;
    :hover {
        transform: scale(1.1);

    }
`
export const NetworksTitle = styled.h2`
    margin: 0 0 5px 0;
    font-size: 18px;
    font-weight: 700;
    color: ${colors.blueDark};   
`
export const NetworksSubTitle = styled.h3`
    margin: 0;
    color: ${colors.blue};
    font-size: 16px;
    margin-left: 20px;
`