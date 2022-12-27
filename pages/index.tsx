import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import rick from '../public/test.png'
import heading from '@public/banos_media_heading.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div> { /* div is grouping stuff together */}
      <div className='copyright'>
        <h3>A site created by ShinyDuck21</h3>
      </div>
      <div className='topnav'>
        <a href='https://www.google.com'>google</a>
      </div>
      <div className='heading'> { /* classname='heading' basically assigns everything in that group the class of 'heading' */ }
        <img src={heading.src} />
      </div>
      <h1 className='test'>Hello</h1>
      <p>World</p>
      <img src={rick.src} /> 
    </div>
  )
}
