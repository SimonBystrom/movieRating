import styled from 'styled-components'

// Footer Styles

export const StyledFooterWrapper = styled.div`
    position: absolute;  
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #000000;
    color: white;
    padding: 20px 0px 20px 0px ;

    width: 100vw;

    margin-top: -50px;
    height: 50px;
    z-index: 100;
    bottom: 0;
    left: 0;
    font-size: 12px;

    /* 4k and Big screens */
    @media only screen and (min-width : 1824px) {
        font-size: 18px;
        height: 70px;
        margin-top: -70px;
    }
      
`

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    padding: 0px 250px 0px 250px;
    
    /* Ipads  */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape){
        padding: 0px 100px 0px 100px;
    }
`

export const StyledFooterImg = styled.img`
    width: 20%;
    height: 20%;
    margin-bottom: -30px;
`

export const StyledFooterAnchor = styled.a`
    font-size: 12px;
    &:link {text-decoration: none;}
    &:hover {text-decoration: ${props => props.git ? "none" : props.codePen ? "none" : "underline"}};
    color: white;

      /* 4k and Big screens */
      @media only screen and (min-width : 1824px) {
        font-size: 18px;

    }
`

export const StyledFooterP = styled.p`
    font-size: 12px;
    margin-top: ${props => props.credits ? "10px" : "30px"};

      /* 4k and Big screens */
      @media only screen and (min-width : 1824px){
        font-size: 18px;

    }
    
`

export const StyledFooterSocial = styled.i`
    font-size: 40px;
    /* padding-right: 50px; */
   
    
`





// 