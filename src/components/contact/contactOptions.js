
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
// Separate icon components
const EmailIcon = <MdOutlineEmail className="contact-option-icon" />;
const PhoneIcon = <FiSmartphone className="contact-option-icon" />;
const WhatsappIcon = <BsWhatsapp className="contact-option-icon" />;
export const contactOptions = [
  {
    icon: EmailIcon,
    title: "Email",
    value: "sherif.goma89@gmail.com",
    link: "mailto:sherif.goma89@gmail.com",
  },
  {
    icon: PhoneIcon,
    title: "Phone Number",
    value: "+57 313 843 0910",
    link: "mailto:sherif.goma89@gmail.com",
  },
  {
    icon: WhatsappIcon,
    title: "Whatsapp",
    value: "+57 313 843 0910",
    link: "https://api.whatsapp.com/send?phone=+573138430910",
  },
];
