import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@styles/SIgnup.module.css'
import rick from '../public/test.png'
import heading from '@public/banos_media_heading.png'

const inter = Inter({ subsets: ['latin'] })

export default function signup() {
    return (
        <>
            <div className={styles.container}>
                <form>
                    <div className={styles.textbox}>
                        <b>Username -{'>'} </b>
                        <input type='text' className='username' />
                        <br/>
                        <input type='text' className='password' />
                    </div>
                </form>
            </div>
        </>

    )
}
