import {render, fireEvent} from "@testing-library/react";
import React from "react";
import {SeatItem} from "./SeatItem";


describe('seat', () => {
    const data = {
        "id": "s03",
        "cords": {
            "x": 2,
            "y": 1
        },
        "reserved": false
    }
    const dataReserved = {
        "id": "s04",
        "cords": {
            "x": 0,
            "y": 4
        },
        "reserved": true
    }
    const selectedSeats = [
        {
            "id": "s03",
            "cords": {
                "x": 2,
                "y": 1
            },
            "reserved": false
        }
    ]

    it('renders with orange background if selected ', () => {
        const {container} = render(
            <SeatItem reserveSeat={jest.fn()} unreserveSeat={jest.fn()} selectedSeats={selectedSeats} data={data}/>
        )
        const seat = container.firstChild
        expect(getComputedStyle(seat).getPropertyValue('background-color')).toBe('orange');
    })
    it('changes color onclick', () => {
        const {container} = render(
            <SeatItem reserveSeat={jest.fn()} unreserveSeat={jest.fn()} selectedSeats={selectedSeats} data={data}/>
        )
        const seat = container.firstChild

        fireEvent.click(seat);
        expect(getComputedStyle(seat).getPropertyValue('background-color')).toBe('');

        fireEvent.click(seat);
        expect(getComputedStyle(seat).getPropertyValue('background-color')).toBe('orange');
    })
    it('renders with gray background if reserved', () => {
        const {container} = render(
            <SeatItem reserveSeat={jest.fn()} unreserveSeat={jest.fn()} selectedSeats={selectedSeats}
                      data={dataReserved}/>
        )
        const seat = container.firstChild
        expect(getComputedStyle(seat).getPropertyValue('background-color')).toBe('rgb(96, 96, 96)');
    })
})
