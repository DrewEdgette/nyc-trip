// Select.js
function Select({ locations, onSelectDay }) {
  const days = Object.keys(locations);

  return (
    <div className="select-screen">
      <h1>NYC Trip</h1>
      <div className="day-grid">
        {days.map((day) => (
          <button key={day} onClick={() => onSelectDay(day)}>
            Day {day-1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Select;
