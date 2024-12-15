import style from "@/styles/connect.module.css";
import FirstUI from './UI-First';
import SecondUI from "./UI-Second";
import { useState } from "react";
import ThirdUI from "./UI-Third";

const Connect = () => {

  const [appType, setAppType] = useState("");

  const [selectedWallet, setSelectedWallet] = useState(null);

  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  return (
    <section className={style.connectSection}>
      {
        showFirst &&
        <FirstUI setAppType={setAppType} setShowSecond={setShowSecond} setShowFirst={setShowFirst} setShowThird={setShowThird} />
      }
      {
        showSecond &&
        <SecondUI appType={appType} setSelectedWallet={setSelectedWallet} setShowSecond={setShowSecond} setShowThird={setShowThird} />
      }
      {
        showThird &&
        <ThirdUI appType={appType} selectedWallet={selectedWallet} />
      }
    </section>
  );
}

export default Connect;