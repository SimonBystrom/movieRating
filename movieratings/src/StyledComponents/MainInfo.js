import styled from 'styled-components'


// All styles for the App.js page


export const StyledMainInfoWrapper = styled.div`
    background-image: url(${props => props.homeImg ? `${props.homeImg}` :  props.searchImg ? `${props.searchImg}` : "null"});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 80px;
    width: 100vw;
    height: 100vh;
    position: relative;  
    background-color: #171219;
    
`

export const StyledTitle = styled.h1`
    position: absolute;
    top: ${props => props.mainPage ? "130px" : props.searchPage ? "180px" : "130px"};
    left: ${ props => props.mainPage ? "120px" : props.searchPage ? "400px" : "120px"};
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
    display: block;
    padding-bottom: 50px;
    min-height: 100vh;
    max-width: 100vw;
    text-align: center;
    background-color: #171219;

`

export const ContentWrapper = styled.div`
    
   
    
`