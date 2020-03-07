import styled, {keyframes} from 'styled-components'

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
    top: 222px;
    left: 5px;
    font-size: 25px;
    color: ${props => props.good ? "#5FEF64" : props.ok ? "#FCFF51" : props.bad ? "#D05353" : ""};
    animation: ${fade} 0.55s;
    animation-fill-mode: forwards;
    
`

