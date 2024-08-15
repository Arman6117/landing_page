import Image from "next/image";

interface CardProps {
  img: string;
  name: string;
  type: string;
}

const Card = ({ img, name, type }: CardProps) => {
  return (
    <>
      <Image
        src={img}
        alt={name}
        width={500}
        height={100}
        className="md:w-[300px]"
      />
      <div className="flex flex-col gap-2">
        <span className="text-sm text-primaryOrange">{type}</span>
        <h1 className="font-bold">{name}</h1>
      </div>
    </>
  );
};

export default Card;
