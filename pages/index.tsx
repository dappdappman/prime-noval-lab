import Footer from '@/src/components/Layout/Footer';
import Navbar from '@/src/components/Layout/Navbar';
import Connect from '@/src/components/UI-Connect/Connect';
import Hero from '@/src/components/UI-Home/Hero';
import Trays from '@/src/components/UI-Home/Trays';
import React, { useState } from 'react';
import Head from "next/head";

const Index = () => {

  const [showConnect, setShowConnect] = useState(false);

  return (
    <>
      <Head>
        <title>Blockchain Dapp Sync - One Wallet, Blockchain Support</title>
      </Head>
      <Navbar />
      <Hero onClick={() => setShowConnect(true)} />
      <Trays onClick={() => setShowConnect(true)} />
      <Footer />
      { showConnect && <Connect /> }
    </>
  )
}

export default Index;