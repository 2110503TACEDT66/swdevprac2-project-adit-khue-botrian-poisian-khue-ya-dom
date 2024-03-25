import ProductCard from '@/components/ProductCard'
import Banner from '../components/Banner'
import styles from './page.module.css'
import CardPanel from '@/components/CardPanel'
import UserInfo from '@/components/UserInfo'

export default function Home() {
  return (
    <main className={styles.body}>
      <Banner/>
      <UserInfo/>
    </main>
  )
}
