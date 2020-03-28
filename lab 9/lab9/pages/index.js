import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/Style.module.css'

const Home = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Pokedex!</title>
      </Head>
      <h2 className={styles.title}>Search the Pokedex</h2>
      <Link href="/id">
        <a className={styles.link}>Search by Id</a>
      </Link>
      <br></br>
      <br></br>
      <Link href="/name">
        <a className={styles.link}>Search by Name</a>
      </Link>
      <br></br>
      <br></br>
      <Link href="/type">
        <a className={styles.link}>Search by Type</a>
      </Link>
    </div>
  );
}

export default Home; 