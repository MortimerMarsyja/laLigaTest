import styled from 'styled-components'
 
import {greyColors} from '../../07-styles/index.style'

export const StyledUser = styled.div`
  width: 800px;
  background-color: #none;
  margin: 12px auto;
  padding: 12px 9px;
  border-radius:6px;
  border: 1px solid ${greyColors[100]};
  .avatar{
    margin-left:60px;
    margin-top:12px;
  }
  ul{
    list-style-type:none;
    li{
      line-height:30px;
    }
  }
`

export const ItemWrapper = styled.div`
  width: 812px;
  margin: 12px auto;
`


