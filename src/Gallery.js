import React from 'react';
import styled, {keyframes} from 'styled-components';

export default function Gallery(props){
    const {url, explanation, title, copyright} = props.image;

    const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    

    background-color: ${props => props.theme.primaryColor};

    @media only screen and ${props => props.theme.breakpointMobile} {
        background-color: ${props => props.theme.black};
        color: ${props => props.theme.white};
    }
    `
    const StyledImage = styled.img`
    &:hover {
        transform: scale(1.1);
    }

    @media only screen and ${props => props.theme.breakpointMobile} {
       width: 100%;

       &:hover {
        transform: scale(1);
    }
    }
    `

    const StyledP = styled.p`
    width: 50%;
    display: flex;
    flex-wrap: wrap;

    &:hover {
        transform: scale(1.1);
        font-weight: bold;
    }

    @media only screen and ${props => props.theme.breakpointMobile} {
       width: 100%;

       &:hover {
        transform: scale(1);
        font-weight: normal;
    }
    `

    return (
    <StyledDiv className='image'>
        <h2>{title}</h2>
        <StyledImage src={url}></StyledImage>
        <StyledP>{explanation}</StyledP>
        { copyright ? <h6>CopyRight: {copyright}</h6> : null}
    </StyledDiv>);  
}

