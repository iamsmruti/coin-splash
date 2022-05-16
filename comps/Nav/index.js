import styles from './Nav.module.css'
import Image from 'next/image'
import Link from 'next/link';

// React Icons
import { FaHome } from 'react-icons/fa'
import { SiBitcoinsv } from 'react-icons/si'
import { AiFillStar } from 'react-icons/ai'

const Nav = () => {
    let iconStyle = { margin: '1.5rem', color: 'white'}
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>
                        <Image src='/logo.png' width={120} height={60}/>
                    </a>
                </Link>
            </div>
            <div className={styles.menu}>
                <Link href="/">
                    <a>
                        <FaHome style={iconStyle} size={25}/>
                    </a>
                </Link>
                <Link href="/coins">
                    <a><SiBitcoinsv style={iconStyle} size={25}/></a>
                </Link>
                {/* <Link href="/fav-coins">
                    <a><AiFillStar style={iconStyle} size={25}/></a>
                </Link> */}
            </div>
        </div>
    );
}
 
export default Nav;