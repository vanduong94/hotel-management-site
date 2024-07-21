import { Room } from "@/app/models/room";
import sanityClient from "./sanity";
import * as queries from "./sanity-queries";

export async function getFeaturedRoom() {
  const result = await sanityClient.fetch<Room>(
    queries.getFeaturedRoomQuery,
    {},
    { cache: "no-cache" } // call on every request
  );

  return result;
}
