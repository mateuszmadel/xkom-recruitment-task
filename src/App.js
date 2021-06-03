import React, {useState} from 'react';
import {ReservationForm} from './features/reservation/ReservationForm';

const SummaryView = React.lazy(() => import('./features/summary/SummaryView'));
const SeatsView = React.lazy(() => import('./features/seats/SeatsView'))

function App() {

    const [formStep, setFormStep] = useState(1);
    const [numberOfSeats, setNumberOfSeats] = useState(0);
    const [nextToEachOther, setNextToEachOther] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleFormSubmit = (values) => {
        setNumberOfSeats(values.numberOfSeats);
        setNextToEachOther(values.nextToEachOther);
        setFormStep(2);
    }
    const showSummary = (selected) => {
        setSelectedSeats(selected);
        setFormStep(3);
    }
    const goToStart = () => {
        setFormStep(1);
    }
    return (
        <div className="App">
            <React.Suspense fallback={<h1>Loading...</h1>}>
                {formStep === 1 ? <ReservationForm submitForm={handleFormSubmit}/> :
                    (formStep === 2 ? <SeatsView nextToEachOther={nextToEachOther} numberOfSeats={numberOfSeats}
                                                 showSummary={showSummary}/> :
                        <SummaryView selectedSeats={selectedSeats} goToStart={goToStart}/>)}
            </React.Suspense>
        </div>
    );
}

export default App;
