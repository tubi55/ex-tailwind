function Thumbnail() {
  return (
    <figure className="relative inline-block mb-2 size-40">
      <img
        className="absolute object-cover rounded-full size-full"
        src="./img/peter.jpg"
        alt="peter"
      />
    </figure>
  );
}

export default Thumbnail;
