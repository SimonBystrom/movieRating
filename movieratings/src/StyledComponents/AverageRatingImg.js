import styled, {keyframes} from 'styled-components'

//  Average rating styles

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
    bottom: 3px;
    left: 3px;
    font-size: 25px;
    color: ${props => props.good ? "#5FEF64" : props.ok ? "#FCFF51" : props.bad ? "#D05353" : ""};
    animation: ${fade} 0.55s;
    animation-fill-mode: forwards;

    /* 4k and Big screens */
    @media only screen and (min-width : 1824px) {
        font-size: 35px;
       
    }
    
`

