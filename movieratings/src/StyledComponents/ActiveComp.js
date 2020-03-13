import styled from 'styled-components'


// All styling for components in the activeCard


export const ActiveWrapper =  styled.div`
    margin: 0;
    display: flex;
    /* height: 100%; */
    width: 100%;
   
`

export const ActiveMovieInfoWrapper =  styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100%;
    
`


export const ActiveImg = styled.img`
    width: 540px;
    height: 700px;
    display: block;
    position: relative;
`



export const ActiveTitle =  styled.h1`
    font-size: 50px;
    color: white;
    font-family: "Libre Franklin" bold;
    font-weight: 2000;
    
`

export const ActiveRelease =  styled.h2`
    color: white;
    margin-top: -20px;
    
    font-size: 25px;
`

export const ActiveRating = styled.h4`
    color: white;
    margin-top: -10px;
    font-family: "Ubuntu Condensed" bold;
`



export const ActiveDescription =  styled.p`
    color: white;
    max-width: 500px;
    /* text-align: left; */
    
`

export const ActiveGenre =  styled.div`
    color: white;
`

export const StyledBackArrow = styled.i`
    color: white;
    font-size: 65px;
    margin-top: 30px;
    cursor: pointer;

`


