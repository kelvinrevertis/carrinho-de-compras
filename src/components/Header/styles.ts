import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 101px;
  left: 0;
  top: 0;
  background: #0F52BA;
`;

export const TitleContainer = styled.div`
  position: absolute;
  left: 4.51%;
  right: auto;
  top: 2.73%;
  bottom: auto;
  padding-top: 28px;

  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  
  span {
    padding-top: 7px;
    margin-left: 4px;
    font-weight: 300;
    font-size: 20px;
  }
`;

export const ButtonCartContainer = styled.button`
position: absolute;
display: flex;
align-items: center;
justify-content: space-evenly;
width: 90px;
height: 45px;
left: 1262px;
top: 29px;
background: #FFFFFF;
border-radius: 8px;
border: none;

 span{
font-style: normal;
font-weight: 700;
font-size: 18px;

color: #000000;
}
`;