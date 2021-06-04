import {render, screen} from "@testing-library/react";
import React from "react";
import SummaryView from "./SummaryView";

describe('Summary', ()=> {
    const selectedSeats = [{
        "id": "s03",
        "cords": {
            "x": 2,
            "y": 1
        },
        "reserved": false
    }]
    it('renders message with correct coordinates', ()=>{
        render(
            <SummaryView selectedSeats={selectedSeats}/>
        )
        expect(screen.getByText(`rząd x${selectedSeats[0].cords.x} miejsce y${selectedSeats[0].cords.y}`, { exact: false })).toBeInTheDocument()
    })
})
