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
   
    /* Ipads */
    @media (min-device-width : 768px) and (max-device-width : 1366px) and (orientation : landscape){
       
        left: ${ props => props.mainPage ? "20px" : props.searchPage ? "200px" : "120px"};
        top: ${props => props.mainPage ? "100px" : props.searchPage ? "140px" : "130px"};
    }
      /* 4K  and big screens*/
      @media (min-width : 1824px) {
        font-size: 45px;
        left: ${ props => props.mainPage ? "170px" : props.searchPage ? "600px" : "120px"};
        top: ${props => props.mainPage ? "100px" : props.searchPage ? "140px" : "130px"};
    }
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
  
    /* Ipads */
    @media (min-device-width : 768px) and (max-device-width : 1366px) and (orientation : landscape){
        margin-left: -100px;
        max-width: ${props => props.first ? "420px" : props.second ? "320px" : props.third ? "300px" : props.fourth ? "280px" : "0px"};
        top: ${props => props.first ? "160px" : props.second ? "245px" : props.third ? "330px" : props.fourth ? "440px" : "0px"};
        font-size: 20px;
    }

     /* big screens*/
     @media (min-width : 1824px) and (max-width: 1921px) {
        font-size: 25px;
        left: 200px;
        max-width: ${props => props.first ? "550px" : props.second ? "520px" : props.third ? "450px" : props.fourth ? "480px" : "0px"};
        top: ${props => props.first ? "175px" : props.second ? "275px" : props.third ? "485px" : props.fourth ? "590px" : "0px"};
    }

    /* 4K */
     @media (min-width : 1921px) {
        font-size: 25px;
        left: 200px;
        max-width: ${props => props.first ? "550px" : props.second ? "520px" : props.third ? "400px" : props.fourth ? "480px" : "0px"};
        top: ${props => props.first ? "175px" : props.second ? "275px" : props.third ? "385px" : props.fourth ? "520px" : "0px"};
    }

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