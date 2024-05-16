import Btn from "./Btn";
import Info from "./Info";
import Thumbnail from "./Thumbnail";

function Card() {
  return (
    <article>
      <Thumbnail />
      <Info />
      <Btn />
    </article>
  );
}

export default Card;
