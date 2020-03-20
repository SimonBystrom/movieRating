import styled, { keyframes } from 'styled-components'

// UserRating hover element styles

const fade = keyframes`
   from {
       opacity: 0;
       z-index: 0;
     
       
   }

   to{
       opacity: 1;
       z-index: 14;
   }
`

export default styled.i`
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 25px;
    color: #EDF060;
    animation: ${fade} 0.55s;
    animation-fill-mode: forwards;

     /* 4k and Big screens */
     @media only screen and (min-width : 1824px) {
        font-size: 35px;
        
    }
`

