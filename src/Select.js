import React from "react";

function Select({ locations, onSelectDay }) {
  const days = Object.keys(locations);

  return (
    <div className="select-screen">
      <h1>NYC Trip</h1>
      <div className="day-grid">
        {days.map((day) => (
          <button key={day} onClick={() => onSelectDay(day)}>
            {/* replace with day‑specific thumbnail if you have it */}
            <img src={`/images/${day}.jpg`} alt={`Day ${day}`} />
            <span>Day {day}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Select;
