import Btn from "./Btn";
import Info from "./Info";
import MotionBg from "./MotionBg";
import Thumbnail from "./Thumbnail";

function Card({ data: { name, pic, position } }) {
  return (
    <article className="group relative w-[280px] bg-white px-10 m-auto mb-10 text-center rounded-xl shadow-lg pt-16 pb-4 opacity-80 transition-all hover:opacity-100 hover:pt-10 hover:pb-10">
      <MotionBg />
      <Thumbnail pic={pic} />
      <Info name={name} position={position} />
      <Btn />
    </article>
  );
}

export default Card;
