import styled from 'styled-components'
import {whiteColor} from '../../07-styles/index.style';

export const StyledPaginationController = styled.div`
height:30px;
width:202px;
margin:0 auto;
box-shadow: 1px 2px 6px 0 rgb(173 170 170 / 30%);
border-radius: 30px;
background: ${whiteColor};
.pagesWrapper{
  &-core{
    width:88px;
    margin: 0 auto;
  }
  input[type='number']{
    border: 1px solid blue;
    border-radius: 4px;
  }
  line-height: 20px;
  padding: 4px 9px;
  width: 184px;
  display:flex;
  label{
    margin-right:12px;
  }
}
.iconButton{
  border: none;
  border-radius: 3px;
  line-heighF: 24px;
  height: 22px;
  width: 32px;
  transition: 0.48s;
  background:none;
  color:blue;
  fill:blue;
  &:disabled{
    fill:#d0d0d0;
    pointer-events:none;
  }
}
.iconButton:first-child{
  margin-right:0 -18px 0 0;
}
.iconButton:hover{
  cursor:pointer;
  color:red;
  fill:red;
}
p{
  text-transform:uppercase;
  font-weight:600;
  justify-content:flex-start;
}
`
