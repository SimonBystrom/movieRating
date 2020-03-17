import styled, {keyframes} from 'styled-components'

// Styles for all StarRating Components

export const StarWrapper =  styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    
`


export const StarContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: flex-start;
    margin-right: 15px;
`

 const saveClick = keyframes`
    from {
        color: white;
    }
    to {
        color: #EDF060;
    }
 `


export const StyledSaveButton = styled.i`
    
    color: white;
    font-size: 45px;
    padding-left: 10px;
    padding-right: 40px;
    cursor: pointer;
    
     :hover{
        animation: ${saveClick} 0.8s;
        animation-fill-mode: forwards;

    }


    /* 4K and Big Screens*/
    @media (min-width : 1824px) {
        font-size: 65px;

    }
`



export const StyledStar = styled.i`
    font-size: 35px;
    color: #EDF060;

    

    /* 4K * and big screens */
    @media (min-width : 1824px) {
        font-size: 55px;

    }
`



export const StyledUser = styled.p`
    margin: 7px;
    margin-right: 20px;
    color: white;

 

    /* 4K * and big screens */
    @media (min-width : 1824px) {
        font-size: 24px;

    }
`

export const Star = styled.i`
    font-size: 20px;
    color: ${props => props.gold ? "#EDF060" : "white"};
    cursor: ${props => props.fill ? "pointer" : "default"};

    @media (min-width : 1824px) {
        font-size: 30px;

    }
`

export const Storage = styled.h3`
    padding-left: 10px;
    color: white;

    @media (min-width : 1824px) {
        font-size: 30px;
        padding-left: 20px;
    }
`