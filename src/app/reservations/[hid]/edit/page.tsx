'use client'
import Image from 'next/image';
import getReservation from '@/libs/getReservation';
import { Select, MenuItem, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import Link from 'next/link';
import { useState } from 'react';
import deleteReservation from '@/libs/deleteReservation'

export default async function ReservationDetailPage({params}:{params:{hid:string}}){

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTQ5YzEzYjk5YjMyYWQ0MTgzNjM3ZiIsImlhdCI6MTcxMTM5MDk1NiwiZXhwIjoxNzEzOTgyOTU2fQ.Xro0bsnN2zb7tSbT21Lob9Vwus2b3KHgHIryuO07pmM"
    const ReservationDetail = await getReservation(token,params.hid)

    // const [name,setName] = useState(ReservationDetail.data.restaurant.name)
    // const [reserDate,setReserDate] = useState(ReservationDetail.data.reserDate)
    // const [amount,setAmount] = useState(ReservationDetail.data.amount)

    return(
        <main className="text-center p-5">
            {/* <h1 className="text-xl font-medium">{ReservationDetail.data.restaurant.name}</h1> */}
            <div className='bg-slate-100 rounded-md px-5 mx-5 py-2 my-2'>
            <div className='text-md mx-5 text-left'>
            <div className="text-xl font-bold">{ReservationDetail.data.restaurant.name}</div>
                    <table className='table-auto border-separate border-spacing-2'>
                    <tbody>
                        <tr>
                            <td>User</td>
                            <td>{ReservationDetail.data.user}</td>
                        </tr>
                        <tr>
                            <td>Restaurant</td>
                            <td><TextField variant="standard" name="Restaurant" value={ReservationDetail.data.restaurant.name}/></td>
                        </tr>
                        <tr>
                            <td>Date&Time</td>
                            <td><TextField variant="standard" name="DateTime" value={ReservationDetail.data.reserDate}/></td>
                        </tr>
                        <tr>
                            <td>Amount</td>
                            <td><input type="number" value={ReservationDetail.data.amount}/></td>
                        </tr>
                    </tbody>
                    </table>
            </div>
            <button onClick={() => deleteReservation(token,params.hid)}>delete</button>
            </div>
        </main>
    )
}