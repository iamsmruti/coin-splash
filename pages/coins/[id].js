import Link from 'next/link'
import CoinCard from '../../comps/CoinCard/CoinCard'
import LineChart from '../../comps/LineChart'
import styles from '../../styles/CoinDetails.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=35&page=1&sparkline=false',
    {
        headers: {
            ContentType: 'application/json'
        }
    })
    const data = await res.json()
    const paths = data.map((coin) => {
        return {
            params: { id: coin.id.toString() }
        }
    })

    return {
        paths,
        fallback : false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id
    const resCoin = await fetch('https://api.coingecko.com/api/v3/coins/' + id)
    const dataCoin = await resCoin.json()

    const resGraph = await fetch('https://api.coingecko.com/api/v3/coins/' + id +'/market_chart?vs_currency=usd&days=7')
    const dataGraph = await resGraph.json()

    return {
        props : {
            coin : dataCoin, 
            graph : dataGraph
        }
    }
}

const CoinDetails = ({coin, graph}) => {
    const data = graph.prices
    const data1 = []
    const data2 = []
    for (let i = 0; i < data.length; i++) {
        var ts = new Date(data[i][0]);
        data1[i] = ts.toDateString().substring(3,10)
    }

    for (let i = 0; i < data.length; i++) {
        data2[i] = data[i][1]
    }

    return (
        <div className={styles.coinDetails}>
            <div className={styles.breadcrumb}>
                <p>
                    <Link href='/coins'>
                        <a>Coins</a>
                    </Link> &gt; {coin.name}
                </p>
            </div>

            <div className={styles.coinInfo}>
                <CoinCard coin={coin} />
            </div>

            <div className={styles.coinGraph}>
                <div className='chart'>
                    <LineChart data1={data1} data2={data2} />
                </div>
            </div>
        </div>
    );
}


export default CoinDetails;