import styled, {keyframes} from 'styled-components'

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
`

export const StyledStar = styled.i`
    font-size: 35px;
    color: #EDF060;
`