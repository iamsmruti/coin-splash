import styles from './Coin.module.css'
import Image from 'next/image'

const Coin = ({coin, id}) => {
    return (
        <div className={styles.coin}>
            <div className={styles.part1}>
                <div className={styles.icon}>
                    <Image src={coin.image} width={30} height={30} layout='responsive'/>
                </div>
                <p className={styles.name}>{coin.name}</p>
                <p className={styles.symbol}>{coin.symbol}</p>
            </div>
            <div className={styles.part2}>
                <p className={styles.price}>$ {coin.current_price}</p>
                <p className={styles.price}>{coin.total_volume}</p>
                {coin.price_change_percentage_24h < 0 ? <p className={styles.negative}>{coin.price_change_percentage_24h.toFixed(2)} %</p> : <p className={styles.positive}>{coin.price_change_percentage_24h.toFixed(2)} %</p>}
                <p className={styles.market_cap}>$ {coin.market_cap}</p>
            </div>
            
        </div>
    );
}
 
export default Coin;