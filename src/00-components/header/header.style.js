import styled from 'styled-components'
import {whiteColor,pinkColor} from '../../07-styles/index.style'

export const StyledHeader = styled.header`
  background: ${whiteColor};
  box-shadow: 0 1px 6px 0 rgba(32,32,36,0.30);
  height:34px;
  width:100%;
  display:flex;
  flex-wrap:nowrap;
  line-height:3px;
  justify-content:space-between;
  .webIcon{
    margin: 4px 8px;
  }
  p{
    text-transform:uppercase;
    font-weight:600;
    margin-left:30px;
    justify-content:flex-start;
  }
  .header-wrapper-left{
    display:flex;
  }
  .buttonLink{
    color:blue;
    text-decoration:underline;
    line-height:30px;
    margin-right:30px;
    &:hover{
      cursor:pointer;
      color:${pinkColor};
    }
  }
`