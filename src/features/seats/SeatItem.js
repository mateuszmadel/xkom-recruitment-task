import styled,{css} from "styled-components"
import { useState} from "react";

export function SeatItem({reserveSeat, unreserveSeat, data}){
    const [isSelected, setSelected] =useState(false);

    const handleClick = () =>{
        if(!data.reserved){
            if(isSelected){
                setSelected(false);
                unreserveSeat(data.id);
            }
            else{
                setSelected(true);
                reserveSeat(data);
            }
        }
    }
    return (
        <Wrapper onClick={handleClick} reserved={data.reserved} isSelected={isSelected}/>
    )

}

const Wrapper = styled.div`
  height: 0;
  padding-bottom: 100%;
  margin-bottom:16px;
  border:1px solid;
  ${({ reserved }) =>
    reserved && css`
            background-color: #606060
    `}
  ${({ isSelected }) =>
    isSelected && css`
            background-color: orange
    `}
`;
