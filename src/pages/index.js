import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Alensimonyan from './alen-simonyan.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>դեբիլլլ</title>
        <meta name="description" content="դեբիլլլ" />
        <meta name="viewport" content="դեբիլլլ, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Image src={Alensimonyan} alt="դեբիլլլ" />
      </main>
    </>
  )
}
