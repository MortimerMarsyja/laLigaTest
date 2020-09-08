import styled from 'styled-components'
import {whiteColor} from '../../07-styles/index.style';

 export const StyledHome = styled.div`
  margin-top:30px;
  background: ${whiteColor};
  height:34px;
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  line-height:3px;
  .user-icon{
    margin-right:9px;
  }
  ul{
    display:flex;
    flex-direction:column;
    list-style:none;
    margin: 0 auto;
    width: 164px;
    margin-bottom:30px;
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
