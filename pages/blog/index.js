import Head from "next/head";
import Link from "next/link";
import NavBar from "../../components/navBar"
import styles from "../../styles/Blog.module.css"

export default function Blog() {
    return (
        <div className={styles.container}>
          <Head>
            <title>Ape&lsquo;s Blog</title>
            <link rel="icon" href="monkey.png" />
          </Head>
          <div className={styles.listContainer}>
            <div  className={styles.blogTitleContainer}>
              <h2 className={styles.blogTitle}>
                Blog Posts
              </h2>
              <div className={styles.titleUnderline}>
              </div>
            </div>
            <div className={styles.listItem}>
              <text className={styles.date}>
                12 March 2021
              </text>
              <Link href='/About' className={styles.postTitle}>
                <a>
                 An introduction to DeFi
                </a>
              </Link>
            </div>
            <div className={styles.listItem}>
              <text className={styles.date}>
                12 March 2021
              </text>
               <text className={styles.postTitle}>
                  What is an AMM
               </text>
            </div>
            <div className={styles.listItem}>
              <text className={styles.date}>
                12 March 2021
              </text>
              <text className={styles.postTitle}>
                How to do business
              </text>
            </div>
            <div className={styles.listItem}>
              <text className={styles.date}>
                12 March 2021
              </text>
              <text className={styles.postTitle}>
                Where am I?
              </text>
            </div>
          </div>
        </div>
      );
}
