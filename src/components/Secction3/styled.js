import styled from 'styled-components';
import { colors, MQ } from '../../config/resources';


export const ContainerRocket = styled.div`
    width: 40%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 30px 0;
    @media ${MQ.sm} {
        width: 25%;
        margin:0;
    }
`
export const ImgRocket = styled.img`
    width: 100%;
    height: auto;
    @media ${MQ.sm} {
        width: 70%;
    }
`
export const UlWebs = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    @media ${MQ.sm} {
        width: 70%;
    }
`
export const LiContent = styled.div`
    /* width: 50%; */
`
export const ImgSC = styled.div`
    background-image: url(${props => props.linkUrl});
    background-size: cover;
    background-position: center;
    width: 35%;
    height: 100%;
    border-right: 5px solid ${colors.blueDark};
    @media ${MQ.md} {
        filter: grayscale(80%);
        transition: filter .5s;
    }
`
export const LiwebsSC = styled.li`
    background: ${colors.white};
    margin-bottom: 30px;
    border-radius: 7px;
    height: 65px;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    :hover  ${ImgSC} {
        transition: filter .5s;
        filter: grayscale(0%);
    }
    @media ${MQ.sm} {
        height: 100px;
    }
`
export const LinkSC = styled.a`
    background: ${colors.blue};
    border-radius: 50%;
    margin-right: 30px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    font-weight: 700;
    text-decoration: none;
    font-size: 14px;
    @media ${MQ.sm} {
        width: 50px;
        height: 50px;
        font-size: 16px;
    }
`
export const Title = styled.h3`
    color: ${colors.blue};
    font-size: 16px;
    @media ${MQ.sm} {
        font-size: 18.72px;
    }
`
