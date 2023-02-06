import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    padding: 116px;

`
export const ProductBoxCard = styled.div`


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 217.56px; 
    height: 285px;
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    padding: 14px;
    gap: 0.5rem;
    position: relative;

  span{ //mame
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2C2C2C;
  }

  #price {
    background: #373737;
    color: white;
    border-radius: 5px;
    font-size: 15px;
    padding: 6px;
    font-weight: 700;
  }

  p {// description
    font-weight: 300;
    bottom: 15.44%;
    font-size: 10px;
    line-height: 12px;
    color: #2C2C2C;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-bottom: 27px;

    
    &:hover {
      overflow: visible;
      -webkit-line-clamp: initial;
    }
}

  img {
    width: 111px;
    height: 138px;
    object-fit: contain;
  }

  div{ // price and name
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding-bottom: 9px;
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 17px;
    position: absolute;
    width: 100%;
    height: 31.91px;
    background: #0F52BA;
    border: none;
    border-radius: 0px 0px 8px 8px;
    cursor: pointer;   
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    bottom: 0;
    margin-top: 12px;
  }
`;



