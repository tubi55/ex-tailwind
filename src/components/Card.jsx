import Btn from "./Btn";
import Info from "./Info";
import MotionBg from "./MotionBg";
import Thumbnail from "./Thumbnail";

function Card({ data: { name, pic, position } }) {
  return (
    <article className="group card">
      <MotionBg />
      <Thumbnail pic={pic} />
      <Info name={name} position={position} />
      <Btn />
    </article>
  );
}

export default Card;
