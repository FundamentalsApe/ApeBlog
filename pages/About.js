import React, { Component } from 'react';
import Head from 'next/head'
import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About Me</title>
                <link rel="icon" href="monkey.png" />
            </Head>
            <div className={styles.bodyContainer}>
                <h1 className={styles.aboutTitle}>About my apeself</h1>
                <p className ={styles.aboutParagraph}>
                    I am an ape that lives deep in the dense crypto jungle, jumping from one tree to another looking for the sweetest and juiciest fruits they have to offer.
                    Contact me on <a href='https://twitter.com/ApeFundamentals' className={styles.link}>Twitter</a> if you wish to!      
                </p>
                    
            </div>
        </div>
      );
}
