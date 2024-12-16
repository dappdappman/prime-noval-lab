import Link from "next/link";
import styles from "@/styles/account.module.css";
import Head from "next/head";
import BounceLoader from "react-spinners/BounceLoader";

const Account = () => {
  return (
    <>
    <Head>
        <title>Blockchain Dapp Sync - One Wallet, Blockchain Support</title>
      </Head>
    <section className={styles.errorContainer}>
      <h1 className={styles.errorHeading}>Loading Account</h1>

      <div className={styles.animationContainer}>
        <BounceLoader color="#00b12c" />
      </div>

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
