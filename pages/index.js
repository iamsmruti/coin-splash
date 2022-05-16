import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { useState, useEffect } from 'react'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
          { <Image className={styles.image} src='/favicon.png' width={500} height={500} />}
        </div>

        <div className={styles.info}>
          <div className={styles.heading}>
            <h2>COIN</h2>
            <h4>SPLASH</h4>
          </div>

          <p>This is a Portal to display useful information about the Crytocurrencies.</p>

          <Link href='/coins'>
            <a>
              <button>Explore Coins</button>
            </a>
          </Link>
        </div>
    </div>
  )
}
