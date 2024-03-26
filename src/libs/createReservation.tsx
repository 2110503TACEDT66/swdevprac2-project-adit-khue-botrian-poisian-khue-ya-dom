import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth";
import { MakeReservation, ReservationItem } from "../../interface";

export default async function createReservation (token:string, data:MakeReservation) {

    const response = await fetch(`http://localhost:3001/api/v1/restaurants/${data.restaurantID}/reservations`, {
        method:"POST",
        headers: {
            "Content-Type" : "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            reserDate: data.reserDate,
            user: data.user,
            amount: data.amount 
        }),
    })
    if(!response.ok) {
        throw new Error('Failed to update reservations')
    }
    return await response.json()
}