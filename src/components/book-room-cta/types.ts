import { Dispatch, SetStateAction } from "react";

export type BookRoomCtaProps = {
  checkinDate: Date | null;
  setCheckinDate: Dispatch<SetStateAction<Date | null>>;
  checkoutDate: Date | null;
  setCheckoutDate: Dispatch<SetStateAction<Date | null>>;
  price: number;
  discount: number;
  specialNote: string;
  calcMinCheckoutDate: () => Date;
  adults: number;
  setAdults: Dispatch<React.SetStateAction<number>>;
  numberOfChildrens: number;
  setNumberOfChildrens: Dispatch<React.SetStateAction<number>>;
};