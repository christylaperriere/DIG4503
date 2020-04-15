import Head from 'next/head';
import Link from 'next/link';
import TypeSearch from "../components/TypeSearch";
import styles from '../components/Style.module.css'

function Type() {
  return(
    <div className={styles.body}>
      <Head>
        <title>Search by Type</title>
      </Head>
      <LinkHeader />
      <TypeSearch />
    </div>
  )
}

export default Type; 