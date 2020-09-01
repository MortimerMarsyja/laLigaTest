import styled from 'styled-components'
import {whiteColor,blueColor,pinkColor,greyColors} from '../../07-styles/index.style';


 export const StyledLogin = styled.div`
  background: ${whiteColor};
  margin: 256px auto;
  box-shadow: 0 1px 6px 0 rgba(32,32,36,0.30);
  height:256px;
  border-radius:3px;
  width:400px;
  align-items:center;
  justify-content:center;
  display:flex;
  flex-wrap:wrap;
  line-height:3px;
  .leftBlock{
    display:flex;
    height:30px;
    p{
      margin-left:12px;
      margin-right:22px;
    }
  }
  p{
    width:100%;
    text-transform:uppercase;
    font-weight:600;
    margin-left:30px;
    justify-content:flex-start;
  }
  form{
    margin-top:30px;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
  }
  input{
    margin-bottom:12px;
    background:${greyColors[100]};
    padding:6px;
    border-radius: 3px;
    border:none;
    &:focus{
      background-color:${pinkColor};
      border-color:red;
    }
  }
  .inputButton{
    border-radius:30px;
    height:32px;
    background-color:${blueColor};
    color: ${whiteColor};
    padding:6px;
    border:none;
    font-weight: 800;
    line-height:13px;
    margin-top:15px;
    transition: 0.48s;
  }
  .inputButton:hover{
    cursor:pointer;
    background-color:${pinkColor};
    color:#000;
  }
  label{
    line-height:24px;
    heigh:30px;
  }
`
