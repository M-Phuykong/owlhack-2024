function Cheat({ RatingNum, ReviewText }) {
  return (
    <div>
      <div>
        <strong>Rating: {RatingNum}</strong>
      </div>
      <div>
        <p>{ReviewText}</p>
      </div>
    </div>
  );
}
//npm install openai@3.3.0
export default Cheat;
