import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectSeats, fetchSeats} from './seatsSlice'
import {Row, Col,} from 'antd'
import styled from 'styled-components'
import {SeatItem} from './SeatItem'

export default function SeatsView({numberOfSeats, nextToEachOther,}) {
    const dispatch = useDispatch()
    const seats = useSelector(selectSeats)

    const seatsStatus = useSelector(state => state.seats.status)
    const [selectedSeats, setSelectedSeats] = useState([])

    useEffect(() => {
        if (seatsStatus === 'idle') {
            dispatch(fetchSeats())
        }
    }, [seatsStatus, dispatch])

    // prepare data for grid render
    const maxValueOfX = Math.max(...(seats.items).map(el => el.cords.x), 0);
    const maxValueOfY = Math.max(...(seats.items).map(el => el.cords.y), 0);
    const createEmptySpace = (row) => {
        let items = []
        for (let i = 0; i <= maxValueOfX; i++) {
            items[i] = row.find(item => item.cords.x === i)
        }
        return items;
    }
    let rows = [];
    for (let i = 0; i <= maxValueOfY; i++) {
        rows[i] = seats.items.filter(el => el.cords.y === i)
    }

    const reserveSeat = (seat) => {
        setSelectedSeats([...selectedSeats, seat])
    }
    const unreserveSeat = (id) => {
        setSelectedSeats(selectedSeats.filter(el => el.id !== id))
    }

    //proposed seats logic
    const chooseSeats = (rows) => {
        if (nextToEachOther) {
            for (let row of rows) {
                let tempArray = [];
                for (let element of row) {
                    if (element === undefined || element.reserved === true) {
                        tempArray.length = 0;
                    } else {
                        tempArray.push(element);
                        if (tempArray.length === numberOfSeats) {
                            return tempArray;
                        }
                    }
                }
            }
        } else {
            let tempArray = [];
            for (let row of rows) {
                for (let element of row) {
                    if (element !== undefined && element.reserved === false) {
                        tempArray.push(element);
                    }
                    if (tempArray.length === numberOfSeats) {
                        return tempArray;
                    }
                }
            }
        }
        return [];
    }
    useEffect(() => {
        if (seatsStatus === 'succeeded') {
            setSelectedSeats(chooseSeats(rows.map((row) => createEmptySpace(row))))
        }
    }, [seatsStatus])

    return (
        <Wrapper>
            {
                seats.items.length > 0 && rows.map((row, index) => {

                    return <Row key={index} gutter={{xs: 8, sm: 16}} justify="center">
                        {
                            createEmptySpace(row).map((element, index2) => {
                                return (element === undefined ?
                                    <Col key={index + index2.toString()} style={{height: '50px'}} xs={2} md={1}/> :
                                    <Col key={element.id} xs={2} md={1}><SeatItem key={element.id}
                                                                                  reserveSeat={reserveSeat}
                                                                                  unreserveSeat={unreserveSeat}
                                                                                  data={element}
                                                                                  selectedSeats={selectedSeats}/></Col>)
                            })
                        }
                    </Row>
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  padding: 30px;
`
