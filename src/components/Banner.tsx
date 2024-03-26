'use client'
import styles from './banner.module.css'
import Image from 'next/image';
import {useRouter} from 'next/navigation'
import { useState } from 'react';

export default function Banner () {
    const covers=['/img/1.jpg','/img/2.jpg','/img/3.jpg','/img/4.jpg']
    const [index,setIndex] = useState(0)
    const router = useRouter()
    return (
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src ={covers[index%4]}
            alt='cover'
            fill={true}
            objectFit='cover'
            />
            {/* <div className={styles.bannerText}>
                <div className='bg-sky-500/25 '>
                <h1>
                Restaurant Reservation
                </h1>
                <h3>
                    Welcome
                </h3>
                </div>
            </div> */}
            {/* <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent'
                onClick={(e)=>{e.stopPropagation();router.push('/restaurant')}}>
                View Your Restaurant
            </button> */}
        </div>
    );
}