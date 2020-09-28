import styled from "styled-components";

import {aliceBlueColor} from "../../07-styles/index.style";

export const StyledUser = styled.div`
  width: 448px;
  background-color: ${aliceBlueColor};
  display:flex;
  justify-content:space-between;
  margin: 12px auto;
  padding: 12px 9px;
  border-radius:20px;
  margin-top:30px;
  .leftUserFeatures{
    width:auto;
  }
  .rightUserFeatures{
    height:24px;
    margin-top:15px;
    text-align:rignt;
  }
  .circleButton{
    background:white;
    border-radius: 50%;
    height: 34px;
    width: 34px;
    border: none;
    fill:blue;
    margin-top:-10px;
    margin-right:10px;
    transition: 0.48s;
    svg{
      margin:4px -2px;
    }
  &:hover{
    cursor:pointer;
    fill:red;
  }
  }
  .avatar{
    border-radius:28px;
    margin-left:152px;
    margin-top:12px;
  }
  ul{
    list-style-type:none;
    li{
      line-height:30px;
    }
  }
`;

export const ItemWrapper = styled.div`
  width: 812px;
  margin: 12px auto;
`;
