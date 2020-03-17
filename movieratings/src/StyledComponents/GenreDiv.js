import styled from 'styled-components'

// Displayed Genre styles

export default styled.div`
    border: 2px solid white;
    border-radius: 4px;
    display: inline-block;
    font-size: 13px;
    padding: 3px 10px;
    margin: 5px;

    /*big screens */
    @media (min-width : 1824px)and (max-width: 1921px) {
        font-size: 25px;

    }

    /* 4K */
    @media (min-width : 1921px) {
        font-size: 25px;

    }
    
`