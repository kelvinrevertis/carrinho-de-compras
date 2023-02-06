import styled from "styled-components"

export const CartBarContainer = styled.div`

display: flex;
width: 33.75%;
position: fixed;
z-index: 1;
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: #0F52BA;
box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`

export const CloseButton = styled.button`

position: fixed; 
right: 22px; 
top: 22px;
width: 38px;
height: 38px;
border-radius: 50%;
background-color: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
cursor: pointer;
`

export const Footer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 17px;
    position: absolute;
    width: 100%;
    height: 97px;
    background: #000000;
    border: none;
    cursor: pointer;   
    font-weight: 700;
    font-size: 28px;
    line-height: 18px;
    color: #FFFFFF;
    bottom: 0;
    margin-top: 12px;

`