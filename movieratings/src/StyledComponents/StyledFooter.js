import styled from 'styled-components'

export const StyledFooterWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #000000;
    color: white;
    padding: 20px 230px 20px ;
  
    
    
    width: 100%;
    height: 50px;
    z-index: 100;
    bottom: 0;
    left: 0;
    font-size: 12px;
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
`

export const StyledFooterP = styled.p`
    font-size: 12px;
    margin-top: ${props => props.credits ? "50px" : "30px"};
    margin-left: ${props => props.credits ? "120px" : ""};
`

export const StyledFooterSocial = styled.i`
    font-size: 40px;
    margin-right: 50px;
    
`





// 