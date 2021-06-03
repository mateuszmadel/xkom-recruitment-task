import {Button} from 'antd';
import styled, {css} from 'styled-components'

export function SeatsFooter({handleSubmit}) {
    return (
        <Wrapper>
            <Item>
                <Square/>
                Miejsca dostępne
            </Item>
            <Item>
                <Square reserved/>
                Miejsca zarezerwowane
            </Item>
            <Item>
                <Square selected/>
                Twój wybór
            </Item>
            <Button type="primary" size="large" onClick={handleSubmit}>Rezerwuj</Button>
        </Wrapper>
    )

}

const Wrapper = styled.footer`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-evenly;
  @media ${'(max-width:768px)'} {
    flex-direction: column;
    align-items: center;
  }
`
const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${'(max-width:768px)'} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
  }
`
const Square = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border: 1px solid;
  @media ${'(max-width:768px)'} {
    margin: 0;
  }
  ${({reserved}) =>
          reserved && css`
            background-color: #606060;
          `}
  ${({selected}) =>
          selected && css`
            background-color: orange
          `}

`
