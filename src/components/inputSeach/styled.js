import styled from "styled-components";

export const Input = styled.input`
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  
  width: 63%;
  height: 20%;
  border-radius: 6px;
  border: 2px solid #252529;
  background-color: #202024;
  padding: 16px 24px 16px 25px;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  

  &::placeholder {
    color: #AFABB6;
    font-weight: 500;
    
    }

  &:focus {
    border: 2px solid #E07B67;
    outline: none;
    box-shadow: none;
  }
`;
