import styled from 'styled-components'

// All Styles for the MainMovieCard's (MovieHistory / Recommendations / Searched)

// wraps the render (container) of all movieElements
export const MovieWrapper = styled.div`
    padding-left: ${props => props.recommendations ? "30px" : "35px"};
    padding-top: 140px;
    
    padding-bottom: 50px;
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 96vw;


    /* iPads */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1366px) and (orientation : landscape){
        padding-left: ${props => props.recommendations ? "50px" : "90px"}; 
        padding-right: 50px;
        width: 92vw;
        padding-bottom: 50px;
        padding-top: ${props => props.recommendations ? "200px" : "140px"};
    }
    
    /*big screens */
    @media only screen and (min-width : 1824px) and (max-width: 1921px){
        padding-left: ${props => props.recommendations ? "110px" : "4%"};
        padding-top: 160px;
        margin-bottom: 25px;
    }
    /* 4K */
    @media only screen and (min-width : 1921px){
        padding-left: ${props => props.recommendations ? "60px" : "45px"};
        padding-top: 170px;
        margin-bottom: 80px;
        width: 96%
    }
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

    /*big screens */
    @media only screen and (min-width : 1824px) and (max-width: 1921px){
       margin-left: 20px;
       margin-bottom: 55px;
    }
    /* 4K */
    @media only screen and (min-width : 1921px){
        margin-left: 20px;
        margin-bottom: 55px;
    }
`



// styles the movie poster element
export const MovieImg =  styled.img`
    
    width: ${props => props.history ? "180px" : props.search ?  "180px" : props.recommendation ? "260px" : "200px"};
    height: ${props => props.history ? "250px" : props.search ?  "250px" : props.recommendation ? "350px" : "350px"};

   
    display: block; 
   
    border-radius: ${props => props.history ? "5px" : props.search ?  "5px" : props.recommendation ? "5px" : "0px"};
    
    /* Ipads */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1366px) and (orientation : landscape) {
        width: ${props => props.history ? "190px" : props.search ?  "190px" : props.recommendation ? "220px" : "200px"};
        height: ${props => props.history ? "260px" : props.search ?  "260px" : props.recommendation ? "320px" : "320px"};
        
    }
    /*big screens */
    @media only screen and (min-width : 1824px)and (max-width: 1921px) {
        width: ${props => props.history ? "270px" : props.search ?  "270px" : props.recommendation ? "300px" : "200px"};
        height: ${props => props.history ? "340px" : props.search ?  "340px" : props.recommendation ? "390px" : "350px"};

    }

    /* 4K */
    @media only screen and (min-width : 1921px) {
        width: ${props => props.history ? "330px" : props.search ?  "330px" : props.recommendation ? "450px" : "200px"};
        height: ${props => props.history ? "400px" : props.search ?  "400px" : props.recommendation ? "550px" : "350px"};

    }
`