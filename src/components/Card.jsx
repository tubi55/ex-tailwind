import Btn from "./Btn";
import Info from "./Info";
import Thumbnail from "./Thumbnail";

function Card() {
  return (
    <article className="relative w-[280px] bg-white px-10 py-10  m-auto mb-10 text-center rounded-xl">
      <Thumbnail />
      <Info />
      <Btn />
    </article>
  );
}

export default Card;
