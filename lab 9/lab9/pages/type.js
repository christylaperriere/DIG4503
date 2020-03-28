import Head from 'next/head';
import Link from 'next/link';
import TypeSearch from "../components/TypeSearch";
import styles from '../components/Style.module.css'

const Type = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Search by Type!</title>
      </Head>
      <Link href="/index">
        <a className={styles.link}>Index</a>
      </Link>
      <TypeSearch/>
      <h2 className={styles.title}>Results:</h2>
      <div id="reportingArea"></div>
      <h3 className={styles.header}>Want more Pokemon?</h3>
      <Link href="/id">
        <a className={styles.link}>Search by Id</a>
      </Link>
      <br></br>
      <br></br>
      <Link href="/name">
        <a className={styles.link}>Search by Name</a>
      </Link>
    </div>
  );
}

export default Type; 