import styled from "styled-components"

export const HeaderContainer = styled.div`
  padding: 0 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 101px;
  background: #0F52BA;
`;

export const TitleContainer = styled.div`

  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  
  span {
    font-weight: 300;
    font-size: 20px;
  }
`;

export const ButtonCartContainer = styled.button`

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90px;
  height: 45px;
  background: #FFFFFF;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  span{
    font-weight: 700;
    font-size: 20px;
    color: #000000;
}
`;