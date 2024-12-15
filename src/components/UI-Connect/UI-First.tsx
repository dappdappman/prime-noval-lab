import Image from 'next/image';
import Chains from "@/public/chains.png";
import NewWay from "@/public/new-way.svg";
import style from "@/styles/connect.module.css";
import PancakeSwap from "@/public/PancakeSwap.png";
import TrustWallet from "@/public/Trust_Wallet.png";


const FirstUI = ({ setAppType, setShowSecond, setShowFirst, setShowThird }) => {
  return (
    <section className={style.connectInnerSection}>
        <div className={style.connectHeader}>
          <h2 className={style.connectTitle}>Get Started</h2>
        </div>
        <p className={style.connectText}>Connect</p>
        <div className={style.connectStats}>

          <div className={style.statCard} onClick={() => {
              setAppType("Wallet"); 
              setShowSecond(true); 
              setShowFirst(false);
            }
          }>
            <div className={style.statContent} >
              <div className={style.statImgContainer}>
              <Image src={TrustWallet} width={50} alt='Trust Wallet' />
              </div>
              <p className={style.statText}>All Wallets</p>
            </div>
            <p className={style.statCount1}>370+</p>
          </div>

          <div className={style.statCard} onClick={() => {
              setAppType("Chain");
              setShowSecond(true); 
              setShowFirst(false);
            }
          }>
            <div className={style.statContent}>
              <div className={style.statImgContainer}>
              <Image src={Chains} width={40} alt='Chains' />
              </div>
              <p className={style.statText}>All Chains</p>
            </div>
            <p className={style.statCount2}>126+</p>
          </div>

          <div className={style.statCard} onClick={() => {
              setAppType("Dapp");
              setShowSecond(true); 
              setShowFirst(false);
            }
          }>
            <div className={style.statContent}>
              <div className={style.statImgContainer}>
              <Image src={PancakeSwap} width={40} alt='Dapps' />
              </div>
              <p className={style.statText}>All Dapps</p>
            </div>
            <p className={style.statCount3}>1770+</p>
          </div>

          <div className={style.statCard}
            onClick={() => {
              setAppType("AI Toolkit");
              setShowThird(true); 
              setShowFirst(false);
            }}
          >
            <div className={style.statContent}>
              <div className={style.statImgContainer}>
              <Image src={NewWay} width={40} alt='new-way' />
              </div>
              <p className={style.statText}>AI ToolKit</p>
            </div>
            <p className={style.statCount4}>Fast & Secure</p>
          </div>
        </div>
        <p className={style.connectText}>Connect with Web3</p>

        <div className={style.walletConnect}>
            <Image src={''} alt="meta" width={20} className={style.walletImageBtn} />
          <p className={style.walletText}>WalletConnect</p>
        </div>

        <p className={style.termsText}>
          By connecting your wallet you agree to our &nbsp;
          <span style={{color : 'dodgerblue'}}>Terms of Service &nbsp;</span>
           and &nbsp;
          <span style={{color : 'dodgerblue'}}>Privacy Policy</span>
        </p>
      </section>
  )
}

export default FirstUI