import Image from "next/image";
import { StarItem as ItemType } from "../types/star-item";

interface Props {
  star: ItemType;
}

const StarItem = ({ star }: Props) => {
  return (
    <div className="rounded shadow-md p-5 flex flex-col justify-between items-center">
      <Image src={star.src} width={120} height={120} alt={star.name} />
      <h4 className="text-base my-3 font-medium text-center text-slate-700">
        {star.name}
      </h4>
      <div className="text-3xl font-bold flex gap-2 text-slate-700 items-center">
        <Image
          src="/assets/cc/star.png"
          width={40}
          height={40}
          alt={star.name}
        />
        {star.count}
      </div>
    </div>
  );
};

export default StarItem;
