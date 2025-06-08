import './App.css';
import 'leaflet/dist/leaflet.css';
import Map from "./Map";
import Info from "./Info";
import { useEffect, useState } from "react";

function App() {
  const [locations, setLocations] = useState({});
  const [day, setDay] = useState(2);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/json/locations.json")
      .then((res) => res.json())
      .then((data) => {
        const dayMap = {};
        data.forEach(({ day, items }) => {
          dayMap[day] = items;
        });
        setLocations(dayMap);
      })
      .catch((err) => console.error("Failed to load locations", err));
  }, []);

  const items = locations[day];

  if (!items) return <div>Loading...</div>;
  if (items.length === 0) return <div>No items for this day.</div>;

  const current = items[index];

  const handleNext = () => {
    setIndex(prev => (prev < items.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setIndex(prev => (prev > 0 ? prev - 1 : prev));
  };


  return (
    <div className="App">
      <header className="App-header">
        <div className='Main'>
          <Map current={current} />
          <Info
            current={current}
            index={index}
            total={items.length}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </div>
      </header>
    </div>
  );
}

export default App;