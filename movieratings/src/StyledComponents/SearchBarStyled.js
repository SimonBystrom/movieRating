import styled from 'styled-components'

// Searchbar Styles

 export const  SearchBarStyled =  styled.input`
    transition: all, 0.5s;

    padding-left: 45px;
    padding-bottom: 3px;

    margin-left: 120px;
    margin-right: 60px;

    border-radius: 0px;

    height: 35px;
    width: 400px;
   
    border-bottom: 1px solid white;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px; 
    outline: none;

    font-size: 20px;
    font-style: none;
    color: white;

    background-color: #191919;
    
    z-index: 110;
    opacity: 0.6;
    
    &::placeholder{
        font-size: 13px;
        opacity: 0.7;
    }
    &:focus{
        cursor: text;
        border-bottom: 1px solid white;
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        opacity: 1;
    }
  
    
    
`

export const SearchIcon = styled.i.attrs({
    className: 'ri-search-2-line'
})`
   
  font-size: 25px;
  color: white;
  opacity: 0.2;
  position: absolute;
  top: 8px;
  left: 120px;
  transition: all, 0.5s;
   ${SearchBarStyled}:focus ~ & {
      opacity: 1;
  } 
  cursor: text;

  `


  export const SearchLanguage = styled.img`
    transition: all, 0.4s;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 60px;
    opacity: 0;
    cursor: text;
    filter: grayscale(100%);
    ${SearchBarStyled}:focus ~ & {
      filter: grayscale(0%);
      opacity: 1;
  }
  `
