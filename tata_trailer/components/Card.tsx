import Image from "next/image";

const Card = ({ imgUrl }: any) => {
  return (
    <div className="w-full h-full bg-green-100 rounded-lg  dark:bg-gray-800">
      <div className="mx-auto mb-4 w-full h-full relative">
        <Image
          className="rounded-t-lg"
          src={imgUrl}
          alt={`Avatar`}
          fill
          loading="lazy"
          objectFit="center"
        />
      </div>
    </div>
  );
};

export default Card;
