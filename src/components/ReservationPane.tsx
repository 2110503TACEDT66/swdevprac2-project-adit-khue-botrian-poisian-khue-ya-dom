"use client"
import { useState } from 'react'
import { useEffect } from 'react'
import { Date } from 'mongoose'

import getReservations from '@/libs/getReservations'
import { ReservationItem, ReservationJson } from '../../interface'

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth";
import { Session } from 'inspector'
import Link from 'next/link'

export default async function ReservationPane () {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null
    const reservationResponse = await getReservations(session.user.token)

    // const [reservationResponse, setReservationResponse] = useState<ReservationJson|null>(null)

    // useEffect(()=> {
    //     const fetchData = async () => {
    //         const session = await getServerSession(authOptions)
    //         if(!session || !session.user.token) return null
    //         const reservation = await getReservations(session.user.token)
    //         setReservationResponse(reservation)
    //     }
    //     fetchData()
    // },[])

    if(!reservationResponse) return (<p>Loading reservation ...</p>)

    return (
        <>
        {
            reservationResponse.data.map((item:ReservationItem) => (
                <div className="bg-slate-100 rounded-md px-5 mx-5 py-2 my-2" key={item._id}>
                    <div className="text-xl font-bold">{item._id}</div>
                    <table className='table-auto border-separate border-spacing-2'>
                    <tbody>
                        <tr>
                            <td>User</td>
                            <td>{item.user}</td>
                        </tr>
                        <tr>
                            <td>Restaurant</td>
                            <td>{item.restaurant.name}</td>
                        </tr>
                        <tr>
                            <td>Date&Time</td>
                            <td>{item.reserDate.toString()}</td>
                        </tr>
                        <tr>
                            <td>Amount</td>
                            <td>{item.amount}</td>
                        </tr>
                    </tbody>
                    </table>
                    
                    {/* <div>User : {item.user}</div>
                    <div>Restaurant : {item.restaurant.name}</div>
                    <div>Date&Time : {item.reserDate.toString()}</div>
                    <div>Amount : {item.amount}</div> */}
                    
                    <Link href={`/reservations/${item._id}`}>
                    <button className='block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm'>
                        View & Edit
                    </button>
                    </Link>
                </div>
            ))
        }
        </>
    )
}