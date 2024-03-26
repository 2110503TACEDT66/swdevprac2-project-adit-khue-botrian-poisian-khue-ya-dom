'use client'
import Image from 'next/image';
import getReservation from '@/libs/getReservation';
import Link from 'next/link';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { ReservationItem } from '../../../../interface';

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
                    </tbody>
                    </table>
            </div>
            </div>
        </main>
    )
}