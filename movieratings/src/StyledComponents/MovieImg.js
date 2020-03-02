import styled from 'styled-components'

// styles the movie poster element
export default styled.img`
    
    width: ${props => props.history ? "185px" : props.search ?  "185px" : props.recommendation ? "260px" : "200px"};
    height: ${props => props.history ? "250px" : props.search ?  "250px" : props.recommendation ? "350px" : "350px"};
    display: block; 
   
    border-radius: ${props => props.history ? "5px" : props.search ?  "5px" : props.recommendation ? "5px" : "0px"};
    
    
`