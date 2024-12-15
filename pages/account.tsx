import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "@/styles/account.module.css";
import animationData from "@/public/loading.json";
import Head from "next/head";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Account = () => {
  return (
    <>
    <Head>
        <title>Blockchain Dapp Sync - One Wallet, Blockchain Support</title>
      </Head>
    <section className={styles.errorContainer}>
      <h1 className={styles.errorHeading}>Loading Account</h1>

      <div className={styles.animationContainer}>
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className={styles.animation}
          aria-label="Loading animation"
          />
      </div>

      <h1 className={styles.errorSubheading}>Loading Account...</h1>

      <p className={styles.errorMessage}>
        If it takes too long, kindly restart the process as your credentials may
        be wrong.
      </p>

      <Link href="/" className={styles.errorReturnButton} aria-label="Restart the process">
        Restart
      </Link>
    </section>
    </>
  );
};

export default Account;
