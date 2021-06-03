import styled, {css} from "styled-components"
import {useEffect, useState} from "react";

export function SeatItem({reserveSeat, unreserveSeat, data, selectedSeats}) {
    const [isSelected, setSelected] = useState(false);

    useEffect(() => {
        if (selectedSeats !== undefined && selectedSeats.some(el => el.id === data.id)) {
            setSelected(true);
        }
    }, [selectedSeats, data.id])

    const handleClick = () => {
        if (!data.reserved) {
            if (isSelected) {
                setSelected(false);
                unreserveSeat(data.id);
            } else {
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
  margin-bottom: 16px;
  border: 1px solid;
  ${({reserved}) =>
          reserved && css`
            background-color: #606060
          `}
  ${({isSelected}) =>
          isSelected && css`
            background-color: orange
          `}
`;
