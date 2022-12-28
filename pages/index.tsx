import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import heading from '@public/banos_media_heading.png'
import { topnav } from "@components/topnav"
import googlelogo from '@public/google_logo.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div> { /* div is grouping stuff together */}
      {/* <topnav /> */}
      {/* <div className='copyright'>
        <h3>A site created by ShinyDuck21</h3>
      </div> */}
      <div className='topnav'>
        {/* <img src={heading.src} className='headinglogo1'/> */}
        <h3 className='copyright1'>A site by ShinyDuck21</h3>
        <a href='https://www.google.com' target='_blank' className='google'><img src={googlelogo.src} className='headinglogo'/><b>oogle</b></a>
        <a href='https://discord.com/api/oauth2/authorize?client_id=908473991906344960&permissions=8&scope=bot%20applications.commands' target='_blank' className='addbanos'><b>Add Banos to your Discord Server</b></a>
        {/* <a href='https://www.youtube.com' target='_blank'>YouTube</a> */}
        {/* <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'><b className='clickpls'>CLICK ME NATE</b></a> */}
      </div>
      <a href='/'><img src={heading.src} className='headinglogo1'/></a>
      {/* <div className='heading'> */} { /* classname='heading' basically assigns everything in that group the class of 'heading' */}
        {/* <img src={heading.src} /> */}
      {/* </div> */}
      {/* <h1 className='test'>Hello</h1> */}
      {/* <p>World</p> */}
      {/* <img src={rick.src} />  */}
      <h1 className='welcomeHeader'><b>Welcome to Banos Media!</b></h1>
      <p className='welcomep1'>This is a social media site by ShinyDuck21 and PirateOfHyrule.</p>
      <p className='welcomep2'>Options:</p>
      <p className='option1'><a href='/signup'>Create an account</a></p>
      <p className='option2'><a href='https://google.com'>Log in</a></p>
      <p className='option3'><a href='https://google.com'>Find a user</a></p>
      <p className='option4'><a href='/about'>About the developers</a></p>
      {/* <p className='devnote1'>DEVELOPER NOTE: ALL LINKS GO TO <a href='https://google.com'>GOOGLE.COM</a> UNTIL FURTHER NOTICE</p> */}
    </div>
  )
}
