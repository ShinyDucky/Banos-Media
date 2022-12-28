import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import rick from '../public/test.png'
import heading from '@public/banos_media_heading.png'
import { topnav } from "@components/topnav"
import googlelogo from '@public/google_logo.png'

const inter = Inter({ subsets: ['latin'] })

export default function about() {
    return (
        <div>
            <div className='topnav'>
        {/* <a href='/'><img src={heading.src} className='headinglogo1'/></a> */}
        <h3 className='copyright1'>A site by ShinyDuck21</h3>
        <a href='https://www.google.com' target='_blank' className='google'><img src={googlelogo.src} className='headinglogo'/><b>oogle</b></a>
            </div>
            <a href='/'><img src={heading.src} className='headinglogo1'/></a>
            <div>
            <h1 className='welcomeHeader'><b>ABOUT THE DEVELOPERS</b></h1>
            <p className='welcomep1'><b>ShinyDuck21</b></p>
            <p className='about1'>ShinyDuck21 is an active developer who has created the discord bot Banos, where the inspiration for the name "Banos Media" came from. If you wish to support more of his work, please visit his <a href='https://www.github.com/shinyduck21' target='_blank'>Github page</a>.</p>
            </div>
            <div>
            <p className='aboutHead2'><b>PirateOfHyrule</b></p>
            <p className='about2'>PirateOfHyrule, or Pirate.zip, knew literally nothing about javascript or CSS when joining this project, but learned along the way enough to design certain parts of the page. He mostly spends his time playing video games and making youtube content. If you wish to support him, please visit his <a href='https://www.youtube.com/@pirate_zip' target='_blank'>Youtube Channel</a>.</p>
            </div>
        </div>
    )
}