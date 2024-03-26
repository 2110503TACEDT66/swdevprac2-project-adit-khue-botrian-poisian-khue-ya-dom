'use client'
import Image from 'next/image';
import getReservation from '@/libs/getReservation';
import { Select, MenuItem, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import deleteReservation from '@/libs/deleteReservation'
import { useSession } from 'next-auth/react';
import { ReservationItem, ReservationJson } from '../../../../../interface';

export default function ReservationDetailPage({params}:{params:{hid:string}}){

    const {data: session, status} = useSession()
    const [reservationResponse, setReservationResponse] = useState<ReservationItem|null>(null)

    useEffect(()=> {
        const fetchData = async () => {
            if(session){
                const reservation = await getReservation(session.user.token,params.hid)
                console.log(reservation)
                setReservationResponse(reservation.data)
            }
        }
        fetchData()
    },[])

    // const [name,setName] = useState(ReservationDetail.data.restaurant.name)
    // const [reserDate,setReserDate] = useState(ReservationDetail.data.reserDate)
    // const [amount,setAmount] = useState(ReservationDetail.data.amount)

    return(
        // <></>
        <main className="text-center p-5">
            {/* <h1 className="text-xl font-medium">{ReservationDetail.data.restaurant.name}</h1> */}
            <div className='bg-slate-100 rounded-md px-5 mx-5 py-2 my-2'>
            <div className='text-md mx-5 text-left'>
            <div className="text-xl font-bold">{reservationResponse?.restaurant.name}</div>
                    <table className='table-auto border-separate border-spacing-2'>
                    <tbody>
                        <tr>
                            <td>User</td>
                            <td>{reservationResponse?.user}</td>
                        </tr>
                        <tr>
                            <td>Restaurant</td>
                            <td><TextField variant="standard" name="Restaurant" value={reservationResponse?.restaurant.name}/></td>
                        </tr>
                        <tr>
                            <td>Date&Time</td>
                            <td><TextField variant="standard" name="DateTime" value={reservationResponse?.reserDate}/></td>
                        </tr>
                        <tr>
                            <td>Amount</td>
                            <td><input type="number" value={reservationResponse?.amount}/></td>
                        </tr>
                    </tbody>
                    </table>
            </div>
            {
               session? <button onClick={() => deleteReservation(session.user.token,params.hid)}>delete</button>:<></>
            }
            
            </div>
        </main>
    )
}