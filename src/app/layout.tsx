import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Notification from '@/components/Notification'
import NavBar from '@/components/Navbar'
import AuthProvider from '@/components/AuthProvider'
import QueryProvider from '@/components/QueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Restaurant',
  description: 'a restaurant app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='w-full h-full'>
      <body className=' bg-gray-50 flex flex-col h-full w-full'>
        <AuthProvider>
          <QueryProvider>
            <header>
              <Notification />
              <NavBar />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
