import Image from "next/image";
import Link from "next/link";
import styles from "./CoinCard.module.css";

const CoinCard = ({ coin }) => {
  return (
    <div className={styles.coinCard}>
      <h1>
        {coin.name} <span>{coin.symbol}</span>
      </h1>
      <div className={styles.basic}>
        <div className={styles.icon}>
          <Image
            src={coin.image.large}
            width={"80%"}
            height={"80%"}
            layout="responsive"
          />
        </div>
        <div className={styles.basicInfo}>
          <p>
            Current Price : <br /> $ {coin.market_data.current_price.usd}{" "}
            {coin.market_data.price_change_percentage_24h < 0 ? (
              <span className={styles.negative}>
                {coin.market_data.price_change_percentage_24h.toFixed(2)} %
              </span>
            ) : (
              <span className={styles.positive}>
                ({coin.market_data.price_change_percentage_24h.toFixed(2)} %)
              </span>
            )}
          </p>
          <p>
            Market Cap : <br /> $ {coin.market_data.market_cap.usd}
          </p>
          <p>
            Total Volume : <br /> {coin.market_data.total_volume.usd}
          </p>
        </div>
      </div>
      <div className={styles.rank}>
        <p>Market Cap Rank : {coin.market_data.market_cap_rank}</p>
      </div>
      <div className={styles.desc}>
        <p>{coin.description.en.split(". ")[0]}</p>
      </div>
      <div className={styles.links}>
        <p>
          Official Site :
            <a target='_blank' href={coin.links.homepage[0]}>LINK</a>
        </p>
        <p>
          Github Repo :
            <a target='_blank' href={coin.links.repos_url.github[0]}>LINK</a>
        </p>
      </div>
    </div>
  );
};

export default CoinCard;
