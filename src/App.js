import {Map} from './components/Map';
import { useState, useEffect } from 'react';
import {Loader} from './components/Loader.js';

function App() {

  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);

      console.log(events);
    }
    fetchEvents();
    console.log(eventData);
  }, [])
  return (
    <div>
    { !loading ? <Map eventData={eventData}/> : <Loader/>}
    </div>
  );
}

export default App;
