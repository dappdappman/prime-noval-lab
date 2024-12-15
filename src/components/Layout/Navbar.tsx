import Image from 'next/image';
import React from 'react';
import BlockchainImg from "@/public/blockchain.png";
import Link from 'next/link';
import style from "@/styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.logoContainer}>
        <Image src={BlockchainImg} alt='' width={50} height={50} className={style.logoImage} />
      </div>
      <div className={style.linksContainer}>
        <Link href="" className={style.navLink}>Claim</Link>
        <Link href="" className={style.navLink}>Migrate</Link>
        <Link href="" className={style.navLink}>Swap</Link>
      </div>
    </div>
  );
};

export default Navbar;