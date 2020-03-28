import Head from 'next/head';
import Link from 'next/link';
import NameSearch from "../components/NameSearch"; 
import styles from '../components/Style.module.css'

const Name = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Search by Name!</title>
      </Head>
      <Link href="/index">
        <a className={styles.link}>Index</a>
      </Link>
      <NameSearch/>
      <h2 className={styles.title}>Results:</h2>
      <div id="reportingArea"></div>
      <h3 className={styles.header}>Want more Pokemon?</h3>
      <Link href="/id">
        <a className={styles.link}>Search by Id</a>
      </Link>
      <br></br>
      <br></br>
      <Link href="/type">
        <a className={styles.link}>Search by Type</a>
      </Link>
    </div>
  );
}

export default Name; 