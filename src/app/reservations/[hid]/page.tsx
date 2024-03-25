import Image from 'next/image';
import getReservation from '@/libs/getReservation';
import Link from 'next/link';

export default async function ReservationDetailPage({params}:{params:{hid:string}}){

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTQ5YzEzYjk5YjMyYWQ0MTgzNjM3ZiIsImlhdCI6MTcxMTM5MDk1NiwiZXhwIjoxNzEzOTgyOTU2fQ.Xro0bsnN2zb7tSbT21Lob9Vwus2b3KHgHIryuO07pmM"
    const ReservationDetail = await getReservation(token,params.hid)

    return(
        <main className="text-center p-5">
            {/* <h1 className="text-xl font-medium">{ReservationDetail.data.restaurant.name}</h1> */}
            <div className='bg-slate-100 rounded-md px-5 mx-5 py-2 my-2'>
            {/* <Image src={ReservationDetail.data.picture}
            alt='Product Picture'
            width={0} height={0} sizes="100vw"
            className='rounded-lg w-[30%] bg-black'/> */}
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
                            <td>{ReservationDetail.data.restaurant.name}</td>
                        </tr>
                        <tr>
                            <td>Date&Time</td>
                            <td>{ReservationDetail.data.reserDate.toString()}</td>
                        </tr>
                        <tr>
                            <td>Amount</td>
                            <td>{ReservationDetail.data.amount}</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
            </div>
        </main>
    )
}