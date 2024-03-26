import Banner from '../components/Banner'
import styles from './page.module.css'
import UserInfo from '@/components/UserInfo'
import Sidebar from '@/components/Sidebar'


export default  async function Home() {
    // const menuItems = [
    //   { title: 'Home', link: '/' },
    //   { title: 'Our Restaurants', link: '/restaurants' },
    //   { title: 'Contact', link: '/contact' },
    // ];
  return (
    <main className={styles.body}>
      <Banner/>
      <UserInfo/>
      {/* <Sidebar items={menuItems}/> */}
    </main>
  )
}
