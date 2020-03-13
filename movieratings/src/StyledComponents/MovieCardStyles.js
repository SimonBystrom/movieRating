import styled from 'styled-components'

// All Styles for the MainMovieCard's (MovieHistory / Recommendations / Searched)

// wraps the render (container) of all movieElements
export const MovieWrapper = styled.div`
    padding-left: ${props => props.recommendations ? "30px" : "20px"};
    padding-top: 140px;
    padding-right: 20px;
    padding-bottom: 50px;
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
    width: 1400px;
    
    

`

// wraps the individual movieElements (container)
export const MovieElementWrapper =  styled.div`

    margin-left: 13px;
    margin-bottom: 45px;
    
    display: flex;
    flex-wrap: wrap;
    align-content: space-around; 

    position: relative; 

    z-index: 0;
    transform: scale(1);
    /*hover off*/
    transition: all 0.3s;
    border-radius: ${props => props.history ? "5px" : props.search ?  "5px" : props.recommendation ? "5px" : "0px"};

    :hover {
        transform: scale(${props => props.history ? "1.3" : props.search ? "1.3" : props.recommendation ? "1.2" : "1"});
        z-index: 10;
        transition: all 0.5s;
        box-shadow: 0px 6px 10px 4px rgba(0,0,0,0.75);
    }
`



// styles the movie poster element
export const MovieImg =  styled.img`
    
    width: ${props => props.history ? "185px" : props.search ?  "185px" : props.recommendation ? "260px" : "200px"};
    height: ${props => props.history ? "250px" : props.search ?  "250px" : props.recommendation ? "350px" : "350px"};
    display: block; 
   
    border-radius: ${props => props.history ? "5px" : props.search ?  "5px" : props.recommendation ? "5px" : "0px"};
    
    
`