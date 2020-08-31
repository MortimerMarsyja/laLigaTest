import styled from 'styled-components'
import {whiteColor} from '../../07-styles/index.style';

export const StyledPaginationController = styled.div`
height:30px;
box-shadow: 0 1px 6px 0 rgba(32,32,36,0.30);
border-radius: 30px;
background: ${whiteColor};
.pagesWrapper{
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  padding: 4px 24px;
  width: 156px;
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
