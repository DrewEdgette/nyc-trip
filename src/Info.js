function Info({ current, index, total, handlePrev, handleNext }) {
  if (!current) return null;

  return (
    <div className="Info">
      <div className="InfoImage">
        <div className="ImageContainer">
          <img src={current.image}/>
        </div>
      </div>

      <div className="InfoText">
        <div className="TextArea">
          <h1>{current.title}</h1>
          <p>{current.time}</p>
          <div className="Description">
            <p>{current.description}</p>
          </div>
        </div>
      </div>

      <div className="InfoNav">
        <div className="InfoNavContainer">
          <button onClick={handlePrev}>Prev</button>
          <p>{index + 1}/{total}</p>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Info;