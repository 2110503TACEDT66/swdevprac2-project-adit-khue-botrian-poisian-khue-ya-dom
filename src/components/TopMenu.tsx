import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu () {
    return (
        <div className={styles.menucontainer}>
            <TopMenuItem title = 'Reservation' pageRef='/reservation'/>
            <Image src = {'/img/restaurantlogo.png'} className="h-full w-auto"
            alt='logo' width={0} height={0} sizes="100vh"/>
        </div>
    );
}