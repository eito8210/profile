import { Github, Instagram, Phone, PhoneForwarded, Youtube, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center mt-10 space-y-8"> 
      <div className="flex space-x-16"> 
        <div className="flex flex-col items-center">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github size={150} />
          </a>
          <span className="text-lg font-bold mt-2">GitHub</span>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
            <Youtube size={150} />
          </a>
          <span className="text-lg font-bold mt-2">YouTube</span>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Instagram size={150} />
          </a>
          <span className="text-lg font-bold mt-2">Instagram</span>
        </div>
      </div>
      <div className="flex space-x-16"> 
        <div className="flex flex-col items-center">
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Twitter size={150} />
          </a>
          <span className="text-lg font-bold mt-2">Twitter</span>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://line.me/ti/p/yourLineID" target="_blank" rel="noopener noreferrer">
            <PhoneForwarded size={150} />
          </a>
          <span className="text-lg font-bold mt-2">LINE</span>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://wa.me/yourWhatsAppNumber" target="_blank" rel="noopener noreferrer">
            <Phone size={150} />
          </a>
          <span className="text-lg font-bold mt-2">WhatsApp</span>
        </div>
      </div>
    </div>
  );
}