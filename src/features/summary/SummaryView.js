import styled from "styled-components";
import {Button} from "antd";

export default function SummaryView({selectedSeats, goToStart}) {
    return (
        <Wrapper>
            <h1>Twoja rezerwacja przebiegła pomyślnie!</h1>
            Wybrałeś miejsca:
            {selectedSeats.map((seat) => {
                return <div key={seat.id}>{`-rząd x${seat.cords.x} miejsce y${seat.cords.y} (id: ${seat.id})`}</div>
            })}

            <h2>Dziękujemy, w razie problemów prosimy o kontakt z działem administracji.</h2>
            <Button onClick={() => goToStart()}>Wróć do formularza rezerwacji</Button>
        </Wrapper>
    )
}
const Wrapper = styled.div`
  padding: 30px;
`
