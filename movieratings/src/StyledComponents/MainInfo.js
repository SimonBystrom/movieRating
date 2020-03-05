import styled from 'styled-components'


export const StyledMainInfoWrapper = styled.div`
    position: relative;
    
`

export const StyledTitle = styled.h1`
    position: absolute;
    top: 130px;
    left: 150px;
    color: white;
    font-family: "Ubuntu";
`

export const StyledDescription = styled.p`
    position: absolute;
    top: ${props => props.first ? "200px" : props.second ? "270px" : props.third ? "320px" : props.fourth ? "410px" : "0px"};
    left: 160px;
    color: white;
    font-family: "Ubuntu Condensed";
    max-width: ${props => props.first ? "450px" : props.second ? "450px" : props.third ? "250px" : props.fourth ? "250px" : "0px"};
    text-align: left;
`