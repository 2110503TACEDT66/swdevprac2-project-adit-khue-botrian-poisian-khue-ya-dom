import './globals.css'
import { Inter } from 'next/font/google'
import TopMenu from '@/components/TopMenu'
import NextAuthProvider from '@/components/NextAuthProvider'

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ['latin'] })
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={session}>
        <TopMenu/>
        {children}
        </NextAuthProvider>
        </body>
    </html>
  )
}
