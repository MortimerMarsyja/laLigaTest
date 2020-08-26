import styled from 'styled-components'


export const StyledText = styled.div`
  height:34px;
  width:auto;
  margin-right:9px;
  display:flex;
  flex-wrap:nowrap;
  line-height:3px;
  align-items:center;
  a{
    position:absolute;
    right: 50%;
  }
  svg{
    margin: 5px auto;
  }
  p{
    text-transform:uppercase;
    font-weight:600;
    margin-left:30px;
    justify-content:flex-start;
  }
`