function Thumbnail({ pic }) {
  return (
    <figure className="thumbnail">
      <img src={`./img/${pic}`} alt={`${pic}`} />
      <img src={`./img/${pic}`} alt={`${pic}`} />
    </figure>
  );
}

export default Thumbnail;
