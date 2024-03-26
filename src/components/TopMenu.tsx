import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { Link } from '@mui/material';
import DropdownTabs from './DropdownTabs';
import getUserProfile from "@/libs/getUserProfile";

import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function TopMenu () {
    const session = await getServerSession(authOptions);
    if(!session || !session.user.token) return null
    const profile = await getUserProfile(session.user.token)

    const tabs = [
        { label: `Name : ${profile.data.name}`, content: <div></div> },
        { label: `Email : ${profile.data.email}`, content: <div></div> },
      ];

    return (
        <div className={styles.menucontainer}>
            {/* <TopMenuItem title = 'Reservation' pageRef='/reservation'/> */}
            
            <Image src = {'/img/restaurantlogo.png'} className="h-full w-auto"
            alt='logo' width={0} height={0} sizes="100vh"/>
            
            <DropdownTabs tabs={tabs} email={profile.data.email}/>
        </div>
    );
}