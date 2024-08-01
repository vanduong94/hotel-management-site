import React, { FC } from "react";
import Image from "next/image";
import { RoomCardProps } from "./types";

import Button from "../button";

const RoomCard: FC<RoomCardProps> = ({
  room: { coverImage, name, price, type, description, slug, isBooked },
}) => {
  return (
    <div className="rounded-xl w-72 mb-10 mx-auto md:mx-0 overflow-hidden text-black">
      <div className="h-60 overflow-hidden">
        <Image
          src={coverImage.url}
          alt={name}
          width={250}
          height={250}
          className="img scale-animation"
        />
      </div>

      <div className="p-4 bg-white">
        <div className="flex justify-between text-xl font-semibold">
          <p>{name}</p>
          <p>${price}</p>
        </div>

        <p className="pt-2 text-xs">{type} Room</p>
        <p className="pt-3 pb-6">{description.slice(1, 100)}...</p>
        <Button
          href={`/rooms/${slug.current}`}
          buttonType="btn-card"
        >
          {isBooked ? "Booked" : "Book now"}
        </Button>
      </div>
    </div>
  );
};

export default RoomCard;
