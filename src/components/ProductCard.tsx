'use client'
import Image from 'next/image';
import styles from './productcard.module.css'
//import InteractiveCard from './InteractiveCard';

export default function ProductCard ({ restaurantName, imgSrc} : { restaurantName:string , imgSrc:string}){
  
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
            <Image src={'/img/restaurant1'}
            alt = 'Product Picture'
                fill={true}
                objectFit='cover'
                className='object-cover rounded-t-lg'
            />
            </div>
            <div className={styles.cardtext}>restaurant</div>
            </div>
    );
}