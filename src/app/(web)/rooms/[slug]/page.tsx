"use client";

import { getRoom } from "@/lib/apis";
import React from "react";
import useSWR from "swr";
import LoadingSpiner from "../../loading";
import HotelPhotoGallery from "@/components/hotel-photo-gallery";

type Props = {};

const RoomDetails = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const fetchRoom = () => getRoom(slug);

  const { data: room, error, isLoading } = useSWR("/api/room", fetchRoom);

  if (error) throw new Error("Cannot fetch data");
  if (typeof room === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  if (!room) return <LoadingSpiner />;

  // console.log("Foobar");
  // console.log(room);

  return (
    <div>
      <HotelPhotoGallery photos={room.images}/>
    </div>
  );
};

export default RoomDetails;
