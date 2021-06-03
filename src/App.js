import React, {useState} from 'react';
import {ReservationForm} from "./features/form/ReservationForm";

function App() {

  const [numberOfSeats, setNumberOfSeats] = useState(0);
  const [nextToEachOther, setNextToEachOther] = useState(false);

  const handleFormSubmit = (values) =>{
    setNumberOfSeats(values.numberOfSeats);
    setNextToEachOther(values.nextToEachOther);
  }
  return (
    <ReservationForm submitForm={handleFormSubmit} />
  );
}

export default App;
