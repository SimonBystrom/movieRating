import styled from 'styled-components'


//Navbar Styling

export const NavbarStyle = styled.div`
    position: fixed;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #191919;
    color: white;
    padding: 20px 20px 20px 20px ;
  
    box-shadow: 0px 8px 20px 10px rgba(0,0,0,0.75);
    

    
    width: 100vw;
    
    height: 50px;
    z-index: 100;
    top: 0;
    left: 0;
`


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 60%;
    padding: 0px 0px 0px 5%; 
`