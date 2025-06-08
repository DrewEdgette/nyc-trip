import './App.css';
import 'leaflet/dist/leaflet.css';
import Map from "./Map";
import Info from "./Info";
import Select from "./Select";
import { useEffect, useState } from "react";

function App() {
  const [locations, setLocations] = useState({});
  const [day, setDay] = useState(null); // null until selected
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

  const handleSelectDay = (selectedDay) => {
    setDay(selectedDay);
    setIndex(0);
  };

  const items = locations[day];

  return (
    <div className="App">
  <header className="App-header">
    {!day ? (
      <Select locations={locations} onSelectDay={handleSelectDay} />
    ) : !items ? (
      <div>No items for this day.</div>
    ) : (
      <>
        {/* NEW TOP BAR GOES HERE */}
        <div className="TopBar">
          <button onClick={() => setDay(null)} className="BackButton">← Back</button>
          <div className="DayTitle">Day {day-1}</div>
        </div>

        {/* MAIN CONTENT: MAP + INFO */}
        <div className="Main">
          <Map current={items[index]} />
          <Info
            current={items[index]}
            index={index}
            total={items.length}
            handlePrev={() => setIndex(i => (i > 0 ? i - 1 : i))}
            handleNext={() => setIndex(i => (i < items.length - 1 ? i + 1 : i))}
          />
        </div>
      </>
    )}
  </header>
</div>

  );
}

export default App;
