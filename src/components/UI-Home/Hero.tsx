import { Typewriter } from 'react-simple-typewriter';
import style from "@/styles/hero.module.css";
import Image from 'next/image';
import heroBg from '@/public/nodess.jpeg'

type HeroProps = {
  onClick?: () => void;
}


const Hero = ({ onClick }: HeroProps) => {
  return (
    <main className={style.heroMain} onClick={onClick}>
      <section className={style.heroSectionTransparent}></section>
      <Image src={heroBg} alt='hero' className={style.heroSectionCoverImage} />
      <section className={style.heroContent}>
        <h1 className={style.heroTitle}>
          Blockchain Dapps &nbsp; <br />
          <span className={style.heroTypewriter}>
            <Typewriter
              words={[
                'Phantom Chain',
                'Polygon Chain',
                'Binance Smart Chain',
                'Arbitrum Chain',
                'Cronos Chain',
                'Avalanche Chain',
                'Ethereum Chain',
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className={style.heroDescription}>
          Blockchain Dapps is a powerful tool for wallet validation, essential for ensuring the security and integrity of digital assets. Performs a comprehensive analysis of the wallet's structure and contents, including checks for correct formatting, correct key derivation, and proper encryption.
          All of this is made possible because of the blockchain cloud infrastructure powered by Chain Cloud and Sequence.
        </p>
        <button className={style.heroButton}>Get Started</button>
      </section>
    </main>
  );
};

export default Hero;
