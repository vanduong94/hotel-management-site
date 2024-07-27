export type RoomCardProps = {
  room: {
    coverImage: {
      url: string;
    };
    description: string;
    isBooked: boolean;
    name: string;
    price: number;
    slug: {
      _type: string;
      current: string;
    };
    type: string;
  };
};
