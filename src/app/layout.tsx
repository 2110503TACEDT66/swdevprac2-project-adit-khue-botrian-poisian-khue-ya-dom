import './globals.css'
import { Inter } from 'next/font/google'
import TopMenu from '@/components/TopMenu'
import NextAuthProvider from '@/components/NextAuthProvider'

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth";
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  const menuItems = [
    { title: 'Home', link: '/' },
    { title: 'Our Restaurants', link: '/restaurants' },
    { title: 'Reservation', link: '/reservationslist' },
    { title: 'Register Form', link: '/register' },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={session}>
        <Sidebar items={menuItems}/>
        <TopMenu/>
        {children}
        </NextAuthProvider>
        </body>
    </html>
  )
}
