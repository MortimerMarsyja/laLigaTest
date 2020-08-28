import styled from 'styled-components'


export const StyledRow = styled.div`
  height:34px;
  width:auto;
  display:flex;
  flex-wrap:nowrap;
  margin-left:32px;
  line-height:3px;
  align-items:center;
  button{
    border-radius:3px;
    background:#87CEFA;
    outline:none;
    border:none;
    margin-left:6px;
  }
  button:hover{
    background:pink;
    cursor: pointer !important;
  }
  p{
    margin-right:12px;
    text-transform:uppercase;
    font-weight:600;
    margin-left:30px;
    justify-content:flex-start;
  }
`