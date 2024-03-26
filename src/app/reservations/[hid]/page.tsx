'use client'
import Image from 'next/image';
import getReservation from '@/libs/getReservation';
import Link from 'next/link';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { ReservationItem } from '../../../../interface';
import deleteReservation from '@/libs/deleteReservation';

export default function ReservationDetailPage({params}:{params:{hid:string}}){

    const {data: session, status} = useSession()
    const [reservationResponse, setReservationResponse] = useState<ReservationItem|null>(null)
    const [deleteSta,setDeleteSta] = useState(0)

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

    return(
        <main className="text-center p-5">
            {/* <h1 className="text-xl font-medium">{ReservationDetail.data.restaurant.name}</h1> */}
            <div className='bg-slate-100 rounded-md px-5 mx-5 py-2 my-2'>
            {/* <Image src={ReservationDetail.data.picture}
            alt='Product Picture'
            width={0} height={0} sizes="100vw"
            className='rounded-lg w-[30%] bg-black'/> */}
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
                            <td>{reservationResponse?.restaurant.name}</td>
                        </tr>
                        <tr>
                            <td>Date&Time</td>
                            <td>{reservationResponse?.reserDate.toString()}</td>
                        </tr>
                        <tr>
                            <td>Amount</td>
                            <td>{reservationResponse?.amount}</td>
                        </tr>
                        {
                            (deleteSta == 0 )? <tr>
                            <td><button className='block rounded-md bg-red-400 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm'
                            onClick={() => setDeleteSta(1)}>delete</button></td>
                            <td><button className='block rounded-md bg-blue-400 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm'
                            onClick={() => window.location.href=`/reservations/${params.hid}/edit`}>edit</button></td>
                            </tr>:
                            <></>
                        }
                    </tbody>
                    </table>        
                        {
                        (deleteSta != 0 && session)? 
                        <>
                        <div className='text-red-500'>Once you delete it, it cannot be brought back!</div>
                        <tr>
                        <td><button className='block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm m-md'
                        onClick={() => setDeleteSta(0)}>cancel</button></td>
                        <td><button className='block rounded-md bg-red-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm'
                        onClick={() => {deleteReservation(session.user.token,params.hid); alert('Reservation Delete'); window.location.href='/reservationslist';} }>delete</button></td>
                        </tr></>
                        :<></>
                        }
                    
            </div>
            </div>
            
        </main>
    )
}