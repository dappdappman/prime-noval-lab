import { useRouter } from "next/router";
import style from "@/styles/footer.module.css";

const Footer = () => {
  const router = useRouter();

  const refreshPage = () => {
    router.replace("/"); // Redirects to the homepage or any specified route
  };

  return (
    <footer className={style.footer}>
      <p className={style.footerText}>@ 2024. Blockchain Wallet Rectification</p>
      <div className={style.footerLinks}>
        <p className={style.footerLink} onClick={refreshPage}>
          Terms of Service
        </p>
        <p className={style.footerLink} onClick={refreshPage}>
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;