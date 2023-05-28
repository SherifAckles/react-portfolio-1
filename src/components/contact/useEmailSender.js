import { useRef } from "react";
import emailjs from "emailjs-com";
// THE CUSTOM HOOK
const useEmailSender = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_llz1c7d",
        "template_iws3frs",
        form.current,
        "nEe2vpFMSRKc_xMJi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return { form, sendEmail };
};

export default useEmailSender;
