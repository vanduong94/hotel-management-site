import type { Meta, StoryObj } from "@storybook/react";
import RoomCard from "./room-card";
import { RoomCardProps } from "./types";
import Button from "../button";

const meta: Meta<typeof RoomCard> = {
  title: "Molecules/RoomCard",
  component: RoomCard,
  subcomponents: { 
    Button: Button as React.ComponentType<any> 
  },
};

export default meta;
type Story = StoryObj<RoomCardProps>;

export const Card: Story = {
  args: {
    room: {
      _id: "13b171c3", 
      dimension: 300, 
      discount: 0, 
      images: [],
      isBooked: false, 
      isFeature: false, 
      numberOfBeds: 2, 
      offeredAmenities: [], 
      specialNote: "",
      description: "Nam commodo suscipit quam. In consectetuer turpis ut velit. Fusce vel dui. Ut leo. Phasellus ullamcorper ipsum rutrum nunc.",
      slug: {
        current: "standard-room",
        _type: "slug"
      },
      name: "Standard room",
      price: 100,
      type: "Standard",
      coverImage: {
        url: "https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RhbmRhcmQlMjBob3RlbCUyMHJvb21zfGVufDB8fDB8fHww"
      }
    }
  },
};