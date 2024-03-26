'use client'
import { TextField } from "@mui/material"
import { useState } from "react";
import LocationDateReserve from '@/components/DateReserve'

export default function reservation() {
    const [restaurant,setRestaurant] = useState<string>('')
    const [amount,setAmount] = useState<number>(0)
    const [reserDate,setReserDate] = useState<Dayjs|null>(null)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Reservation</div>
            {/* <div className="text-xl font-medium">{bookingName}</div> */}
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    Reserve your restaurant here!
                </div>
                <LocationDateReserve 
                onRestaurantChange={(value:string)=>(setRestaurant(value))}
                onAmountChange={(value:number)=>setAmount(value)}
                onReserDateChange={(value:Dayjs)=>setReserDate(value)}
                />
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" name="Book Vaccine" 
            >
                Make Reservation
            </button>
        </main>
    );
}
