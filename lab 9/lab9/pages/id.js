import Head from 'next/head';
import Link from 'next/link';
import IdSearch from "../components/IdSearch"; 
import styles from '../components/Style.module.css'

const Id = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Search by Index</title>
      </Head>
      <Link href="/index">
        <a className={styles.link}>Index</a>
      </Link>
      <IdSearch/>
      <h2 className={styles.title}>Results:</h2>
      <div id="reportingArea"></div>
      <h3 className={styles.header}>Want more Pokemon?</h3>
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

export default Id; 