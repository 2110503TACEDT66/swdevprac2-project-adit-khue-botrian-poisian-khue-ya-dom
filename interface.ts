import { Dayjs } from "dayjs";
import { Timestamp } from "mongodb"

interface HospitalItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }
  
  interface HospitalJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HospitalItem[]
  }

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

