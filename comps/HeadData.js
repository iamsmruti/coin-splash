import Head from 'next/head'
const HeadData = ({prop}) => {
  return (
    <div>
      <Head>
        <title>Coin Splash {prop}</title>
        <meta name="description" content="Coin Splash - A Crypto App" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </div>
  );
};

export default HeadData;
