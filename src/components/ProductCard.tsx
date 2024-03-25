'use client'
import Image from 'next/image';
import styles from './productcard.module.css'
//import InteractiveCard from './InteractiveCard';

export default function ProductCard ({ restaurantName, imgSrc} : { restaurantName:string , imgSrc:string}){
  
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
            <Image src={imgSrc}
            alt = 'Product Picture'
                fill={true}
                objectFit='cover'
                className='object-cover rounded-t-lg'
            />
            </div>
            <div className="w-full h-[30%] p-[10px]">{restaurantName}</div>
            </div>
    );
}