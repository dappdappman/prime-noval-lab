
import style from "@/styles/connect.module.css";
import FirstUI from "./UI-First";
import SecondUI from "./UI-Second";
import { useState } from "react";
import ThirdUI from "./UI-Third";

interface AppData {
  name: string;
  image: string;
}

const Connect: React.FC = () => {
  const [appType, setAppType] = useState<string>("");
  const [selectedWallet, setSelectedWallet] = useState<AppData | null>(null);
  const [showFirst, setShowFirst] = useState<boolean>(true);
  const [showSecond, setShowSecond] = useState<boolean>(false);
  const [showThird, setShowThird] = useState<boolean>(false);

  return (
    <section className={style.connectSection}>
      {showFirst && (
        <FirstUI
          setAppType={setAppType}
          setShowSecond={setShowSecond}
          setShowFirst={setShowFirst}
          setShowThird={setShowThird}
        />
      )}
      {showSecond && (
        <SecondUI
          appType={appType}
          setSelectedWallet={setSelectedWallet}
          setShowSecond={setShowSecond}
          setShowThird={setShowThird}
        />
      )}
      {showThird && selectedWallet && (
        <ThirdUI appType={appType} selectedWallet={selectedWallet} />
      )}
    </section>
  );
};

export default Connect;
