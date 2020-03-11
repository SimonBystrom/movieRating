import styled from 'styled-components'


// wraps the render (container) of all movieElements
export default styled.div`
    padding-left: ${props => props.recommendations ? "30px" : "20px"};
    padding-top: 140px;
    padding-right: 20px;
    padding-bottom: 15px;
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
    

`