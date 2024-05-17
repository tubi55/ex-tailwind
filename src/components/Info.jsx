function Info({ name, position }) {
  return (
    <div className="relative">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-base mb-7">{position}</p>
    </div>
  );
}

export default Info;
