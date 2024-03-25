'use client'
import { useState } from 'react'
import { useRef, useEffect } from 'react'

import getRestaurants from '@/libs/getRestaurants'
import { RestaurantItem,RestaurantJson } from '../../interface'



export default function BookingList () {

    const [restaurantResponse, setRestaurantResponse] = useState<RestaurantJson|null>(null)

    useEffect(()=> {
        const fetchData = async () => {
            const restaurants  = await getRestaurants()
            setRestaurantResponse(restaurants)
        }
        fetchData()
    },[])

    console.log(restaurantResponse)


    if(!restaurantResponse) return (<p>Loading restaurant ...</p>)

    return (
        <>
        {
            restaurantResponse.data.map((item) => (
                <div className="bg-slate-100 rounded-md px-5 mx-5 py-2 my-2" key={item._id}>
                    <div className="text-xl font-bold">{item.name}</div>
                    <div>Open : {item.open_time}-{item.close_time}</div>
                    <div>address : {item.address}</div>
                    
                    {/* <button className='block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm'
                    onClick={()=>dispatch(removeBooking(item.id))}>
                         remove
                    </button> */}
                </div>
            ))
        }
        </>
    )
}