import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import { Header } from '../components/Header'

export default function Home() {

  return (
    <div >
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}
