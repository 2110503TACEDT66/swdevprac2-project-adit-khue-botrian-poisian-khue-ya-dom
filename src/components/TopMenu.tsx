import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { Link } from '@mui/material';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function TopMenu () {
    const session = await getServerSession(authOptions);

    return (
        <div className={styles.menucontainer}>
            {/* <TopMenuItem title = 'Reservation' pageRef='/reservation'/> */}
            <Link href={'/'}>
            <Image src = {'/img/restaurantlogo.png'} className="h-full w-auto"
            alt='logo' width={0} height={0} sizes="100vh"/>
            </Link>
        </div>
    );
}