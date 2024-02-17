import type { Metadata } from 'next'
import {Toaster } from "react-hot-toast"
import Progressbar from '@/components/Progressbar'
import GoogleTranslateScript from '@/components/GoogleTranslateScript'
import './globals.css'
import AuthProvider from './context/Providers'
import { authOptions } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'

  export const metadata: Metadata = {
    title: 'Botex Finance - Real estate crypto investment platform',
    description: 'Invest in real estate and earn massive profits in cryptocurrencies.',
  }

  export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-primary">
        <AuthProvider session={session}>
            <Progressbar>
              {children}
            </Progressbar>
            <Toaster
              position="top-right"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
              // Define default options
                className: '',
                duration: 5000,
                style: {
                  background: '#363636',
                  color: '#fff',
                  fontSize: '12px'
                }
              }}
            />
            <GoogleTranslateScript />
        </AuthProvider>
      </body>
    </html>
  )
}
