import styles from '../styles/navBar.module.css'
export default function NavBar() {
    return ( 
        <div className={styles.container}>
            <div className={styles.navTitleContainer}>
                <h2 className={styles.navTitle}>Fundamentals Monke</h2>
            </div>
            <div className={styles.navMenuContainer}>
                <text className={styles.navMenuItem}>Blog</text>
                <text >About Me</text>
            </div>
            
        </div>
     );
}