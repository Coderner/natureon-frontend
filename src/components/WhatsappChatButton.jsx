import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChatButton = ({ phoneNumber = "919999999999", message = "Hi, I have a query!" }) => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition-transform duration-300 hover:scale-105"
      title="Need Help? WhatsApp Us"
   >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppChatButton;
