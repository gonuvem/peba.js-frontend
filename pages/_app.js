import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../static/css/map.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Peba - Indexador de Dados Públicos</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
