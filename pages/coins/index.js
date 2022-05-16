import {useState} from 'react'
import styles from '../../styles/Coins.module.css'
import Coin from '../../comps/Coin'
import Link from 'next/link'
import Searchbar from '../../comps/Searchbar'
import { useEffect } from 'react'

import FuzzySearch from 'fuzzy-search';

export const getStaticProps = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const data = await res.json()

    return {
        props : {
            coins : data
        }
    }
}

const Coins = ({coins}) => {
    const [search, setSearch] = useState('')
    const [result , setResult] = useState([])

    const searcher = new FuzzySearch(coins, ['name'], {
        caseSensitive: false,
    });

    const filteredCoins = coins.filter(coin => {
        coin.id.toLowerCase().includes(search.toLowerCase())
    })

    useEffect(() => {
        setResult(searcher.search(search.toLowerCase()));
    }, [search])

    const handleChange = (e) => {
        e.preventDefault()

        setSearch(e.target.value.toLowerCase())
    }

    console.log(result)
    
    return (
        <div className={styles.coins}>
            <Searchbar type='text' placeholder='Search' onChange={handleChange} />
            <div className={styles.coinList}>
            { search  ? result.map(((coin) => (
                <div key={coin.id}>
                    <Link href={'/coins/' + coin.id}>
                        <a><Coin coin={coin}/></a>
                    </Link>
                </div>
            ))) : coins.map(((coin) => (
                <div key={coin.id}>
                    <Link href={'/coins/' + coin.id}>
                        <a><Coin coin={coin}/></a>
                    </Link>
                </div>
            )))}
            </div>
            {}
        </div>
    );
}
 
export default Coins;