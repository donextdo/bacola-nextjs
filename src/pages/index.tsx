import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MyAccount from '@/components/MyAccount/MyAccount'
import Cart from '@/features/Cart/Cart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-red-600 font-bold font-ff-headings text-center">HELLO WORLD</h1>
      <MyAccount />
      {/* <Cart /> */}
    </>
  )
}
