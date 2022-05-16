import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { useState, useEffect } from 'react'

export default function Home() {
  const useWindowDimensions = () => {
    const hasWindow = typeof window !== "undefined"

    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null
      const height = hasWindow ? window.innerHeight : null
      return {
        width,
        height,
      }
    }

    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    )

    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }
    }, [hasWindow])

    return windowDimensions
  }

  const { height, width } = useWindowDimensions()
  const breakpoint = 450
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
          {width <= breakpoint && <Image className={styles.image} src='/favicon.png' width={280} height={280} />}
          {width > breakpoint && <Image className={styles.image} src='/favicon.png' width={500} height={500} />}
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
