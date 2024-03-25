import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth";
import { ReservationItem } from "../../interface";

export default async function editReservation (token:string, id:string, data:ReservationItem) {

    const response = await fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
        method:"GET",
        headers: {
            "Content-Type" : "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            _id: data._id,
            user: data.user,
            restaurant: data.restaurant,
            reserDate: data.reserDate,
            amount: data.amount,
            // createdAt: data.createdAt,
        }),
    })
    if(!response.ok) {
        throw new Error('Failed to update reservations')
    }
    return await response.json()
}