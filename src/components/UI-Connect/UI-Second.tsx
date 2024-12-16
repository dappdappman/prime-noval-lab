import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { dapps } from "@/src/utils/dapps.data";
import { chains } from "@/src/utils/chains.data";
import style from "@/styles/ui-second.module.css";
import { wallets } from "@/src/utils/wallets.data";

// Define the shape of app data
interface AppData {
  name: string;
  image: string;
}

// Props for SecondUI component
interface SecondUIProps {
  appType: string;
  setSelectedWallet: (wallet: AppData) => void;
  setShowSecond: (show: boolean) => void;
  setShowThird: (show: boolean) => void;
}

const SecondUI: React.FC<SecondUIProps> = ({
  appType,
  setSelectedWallet,
  setShowSecond,
  setShowThird,
}) => {
  const [arrayData, setArrayData] = useState<AppData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    let data: AppData[] = [];
    if (appType === "Wallet") {
      data = wallets.map((item) => ({
        ...item,
        image: typeof item.image === "string" ? item.image : item.image.src,
      }));
    } else if (appType === "Chain") {
      data = chains.map((item) => ({
        ...item,
        image: typeof item.image === "string" ? item.image : item.image.src,
      }));
    } else if (appType === "Dapp") {
      data = dapps.map((item) => ({
        ...item,
        image: typeof item.image === "string" ? item.image : item.image.src,
      }));
    }
  
    // Filter data based on search term
    const filteredData = searchTerm
      ? data.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : data;
  
    setArrayData(filteredData);
  }, [appType, searchTerm]);
  

  return (
    <section className={style.connectInnerSection}>
      <div className={style.connectHeader}>
        <h2 className={style.connectTitle}>Select a {appType}</h2>
      </div>
      <div className={style.walletArrayContainer}>
        <div className={style.searchContainer}>
          <IoIosSearch />
          <input
            type="text"
            placeholder={`Search ${appType}`}
            className={style.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={style.arrayContainer}>
          {arrayData.length > 0 ? (
            arrayData.map((item, index) => (
              <div
                key={index}
                className={style.arrayCard}
                onClick={() => {
                  setSelectedWallet(item);
                  setShowSecond(false);
                  setShowThird(true);
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className={style.walletImage}
                  width={50} // Replace with actual width
                  height={50} // Replace with actual height
                />
                <p className={style.walletName}>
                  {item.name.length > 9
                    ? `${item.name.slice(0, 9)}...`
                    : item.name}
                </p>
              </div>
            ))
          ) : (
            <p className={style.noResults}>No results found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SecondUI;