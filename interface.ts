import { Dayjs } from "dayjs";

  export interface ReservationJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: ReservationItem[]
  }

  export interface ReservationItem {
    _id: string;
    user: string;
    restaurant: RestaurantItem;
    reserDate: Dayjs;
    amount: number;
    createdAt: Dayjs;
  }

  export interface MakeReservation {
    // _id: string;
    user: string;
    restaurantID: string;
    reserDate: Dayjs;
    amount: number;
    // createdAt: Dayjs;
  }

  export interface RestaurantJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: RestaurantItem[]
  }

  export interface RestaurantItem {
    _id: string,
    name: string,
    open_time: string,
    close_time: string,
    address: string,
    tel: string
  }

