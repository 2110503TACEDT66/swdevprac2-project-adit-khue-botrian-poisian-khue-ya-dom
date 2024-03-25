import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth";
import { ReservationItem } from "../../interface";

export default async function deleteReservation (token:string, id:string) {

    const response = await fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
        method:"DELETE",
        headers: {
            "Content-Type" : "application/json",
            authorization: `Bearer ${token}`,
        },
    })
    if(!response.ok) {
        throw new Error('Failed to update reservations')
    }
    return await response.json()
}