"use client";

import { getRoom } from "@/lib/apis";
import { Room } from "@/models/room";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

type Props = {};

function Rooms({}: Props) {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const roomType = searchParams.get("roomType");

    if (roomType) setRoomTypeFilter(roomType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, []);

  async function fetchData() {
    return getRoom();
  }

  const { data, error, isLoading } = useSWR("get/hotelRooms", fetchData);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  const filterRooms = (rooms: Room[]) => {
    return rooms.filter((room) => {
      // Apply room type filter

      if (
        roomTypeFilter &&
        roomTypeFilter.toLocaleLowerCase() !== "all" &&
        room.type.toLocaleLowerCase() !== roomTypeFilter.toLocaleLowerCase()
      ) {
        return false;
      }

      // Apply search query filter
      if (
        searchQuery &&
        !room.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      ) {
        return false
      }

      return true
    });
  };

  const filteredRooms = filterRooms(data || [])

  return <div>Rooms</div>;
}

export default Rooms;
