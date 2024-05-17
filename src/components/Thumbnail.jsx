function Thumbnail() {
  return (
    <figure className="relative inline-block mb-2 size-40">
      {/* 이미지 그림자 */}
      <img
        className="absolute object-cover translate-y-4 rounded-full size-full blur-xl saturate-150 brightness-125"
        src="./img/peter.jpg"
        alt="peter"
      />

      {/* 원본 이미지 */}
      <img
        className="absolute object-cover rounded-full size-full"
        src="./img/peter.jpg"
        alt="peter"
      />
    </figure>
  );
}

export default Thumbnail;
