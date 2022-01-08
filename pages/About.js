import React, { Component } from 'react';
import Head from 'next/head'
import NavBar from '../components/navBar';
import Footer from '../components/footer';

export default function About() {
    return (
        <div>
            <Head>
                <title>About Me</title>
            </Head>
            <NavBar />
            <div>
                <h1>
                    Hey There
                </h1>
            </div>
            <Footer />
        </div>
      );
}
 
 About;
