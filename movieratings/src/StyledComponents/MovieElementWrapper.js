import styled from 'styled-components'

// wraps the individual movieElements (container)
export default styled.div`

    margin-left: 13px;
    margin-bottom: 80px;
    
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
        box-shadow: 0px 6px 10px 4px rgba(0,0,0,0.41);
    }
`