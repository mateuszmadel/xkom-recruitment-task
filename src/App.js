import React, {useState} from 'react';
import {ReservationForm} from "./features/reservation/ReservationForm";
const ReservationPage = React.lazy(() => import('./features/seats/SeatsView'))
function App() {

  const [formStep, setFormStep] = useState(1);
  const [numberOfSeats, setNumberOfSeats] = useState(0);
  const [nextToEachOther, setNextToEachOther] = useState(false);

  const handleFormSubmit = (values) =>{
    setNumberOfSeats(values.numberOfSeats);
    setNextToEachOther(values.nextToEachOther);
    setFormStep(2);
  }

  return (
      <div className="App">
        <React.Suspense fallback={<h1>Loading...</h1>}>
          {formStep===1 ?<ReservationForm submitForm={handleFormSubmit}/>: <ReservationPage nextToEachOther={nextToEachOther} numberOfSeats={numberOfSeats} /> }
        </React.Suspense>
      </div>
  );
}

export default App;
