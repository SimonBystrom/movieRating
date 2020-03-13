import styled from 'styled-components'

// All styles for the App.js page


export const StyledMainInfoWrapper = styled.div`
    position: relative;
    
`

export const StyledTitle = styled.h1`
    position: absolute;
    top: ${props => props.mainPage ? "130px" : props.searchPage ? "195px" : "130px"};
    left: ${ props => props.mainPage ? "120px" : props.searchPage ? "550px" : "120px"};
    font-size: ${props => props.searchPage ? "26px" : "32px"};
    color: white;
    font-family: "Ubuntu";
`

export const StyledDescription = styled.p`
    position: absolute;
    top: ${props => props.first ? "200px" : props.second ? "270px" : props.third ? "360px" : props.fourth ? "450px" : "0px"};
    left: 130px;
    color: white;
    font-family: "Ubuntu Condensed";
    max-width: ${props => props.first ? "450px" : props.second ? "220px" : props.third ? "250px" : props.fourth ? "350px" : "0px"};
    text-align: left;
    font-size: ${props => props.lang === "jp" ? "14px" : "16px"};
   
`

export const PageContainer = styled.div`
    position: relative;
    
    min-height: 100%;
    max-width: 100vw;
    text-align: center;
    background-color: #171219;

`

export const ContentWrapper = styled.div`
    padding-bottom: 50px;
`