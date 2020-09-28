import styled from 'styled-components'
import {whiteColor,aliceBlueColor} from '../../07-styles/index.style';

 export const StyledHome = styled.div`
  margin-top:30px;
  background: ${whiteColor};
  height:34px;
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  line-height:3px;
  h2{
    margin-bottom:30px;
  }
  .user-icon{
    margin-right:9px;
  }
  .pagination{
    width: 202px;
    margin: 0 auto;
  }
  ul{
    display:flex;
    flex-direction:column;
    list-style:none;
    margin: 0 auto;
    border-radius:20px;
    width: 300px;
    margin-bottom:30px;
    padding: 10px 20px;
    background-color:${aliceBlueColor};
  }
  li{
    display:flex;
    height:30px;
    line-height:30px;
  }
  p{
    width:100%;
    text-transform:uppercase;
    font-weight:600;
    margin-left:30px;
    justify-content:flex-start;
  }
`
