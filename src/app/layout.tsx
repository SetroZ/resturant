import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Notification from '@/components/Notification'
import NavBar from '@/components/NavBar'
import AuthProvider from '@/components/AuthProvider'
import QueryProvider from '@/components/QueryProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
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
        {/* <AuthProvider>
          <QueryProvider>
            <header>
              <Notification />
              <NavBar />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
              <ToastContainer
                position='bottom-right'
                theme='light'
                autoClose={3000}
              />
            </footer>
          </QueryProvider>
        </AuthProvider> */}
      </body>
    </html>
  )
}
