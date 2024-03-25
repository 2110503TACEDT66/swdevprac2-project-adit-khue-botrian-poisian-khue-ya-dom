import './globals.css'
import { Inter } from 'next/font/google'
import TopMenu from '@/components/TopMenu'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopMenu/>
        {children}
        </body>
    </html>
  )
}
