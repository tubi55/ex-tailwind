import Btn from "./Btn";
import Info from "./Info";
import MotionBg from "./MotionBg";
import Thumbnail from "./Thumbnail";
import { twMerge } from "tailwind-merge";

function Card({ data: { name, pic, position }, className }) {
  console.log(className);
  return (
    <article className={twMerge("group card rounded-xl", className)}>
      <MotionBg />
      <Thumbnail pic={pic} />
      <Info name={name} position={position} />
      <Btn />
    </article>
  );
}

export default Card;
