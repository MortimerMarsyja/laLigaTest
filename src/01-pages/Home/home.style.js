import styled from 'styled-components'
import {whiteColor} from '../../07-styles/index.style';

 export const StyledHome = styled.div`
  margin-top:18px;
  background: ${whiteColor};
  height:34px;
  width:100%;
  display:flex;
  flex-wrap:wrap;
  line-height:3px;
  p{
    width:100%;
    text-transform:uppercase;
    font-weight:600;
    margin-left:30px;
    justify-content:flex-start;
  }
`
