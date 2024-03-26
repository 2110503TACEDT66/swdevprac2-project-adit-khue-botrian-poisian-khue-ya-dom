import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth";
import { MakeReservation, ReservationItem } from "../../interface";

export default async function editReservation (token:string, id:string, data:MakeReservation) {

    const response = await fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
        method:"PUT",
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