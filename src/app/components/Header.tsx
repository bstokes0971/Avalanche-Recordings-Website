import { Link } from "react-router-dom";
const logo = "/images/logo3_avalanche_recordings.png";
import { Mail, Facebook, Instagram, Twitter, Youtube, Twitch } from "lucide-react";

export function Header() {
  return (
    <header className="py-12 relative">
      {/* Social Icons - Top Right */}
      <div className="absolute top-6 right-6 flex gap-4">
        <a 
          href="mailto:contact@avalanche-recordings.com" 
          className="text-gray-900 hover:text-gray-600 transition-colors"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
        <a 
          href="https://www.facebook.com/brett.a.stokes" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-600 transition-colors"
          aria-label="Facebook"
        >
          <Facebook size={18} />
        </a>
        <a 
          href="https://www.instagram.com/brettisstoked/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-600 transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={18} />
        </a>
        <a 
          href="https://x.com/brettisstoked" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-600 transition-colors"
          aria-label="X (Twitter)"
        >
          <Twitter size={18} />
        </a>
        <a 
          href="https://www.youtube.com/@brettisstoked" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-600 transition-colors"
          aria-label="YouTube"
        >
          <Youtube size={18} />
        </a>
        <a 
          href="https://www.twitch.tv/brettisstoked" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-600 transition-colors"
          aria-label="Twitch"
        >
          <Twitch size={18} />
        </a>
      </div>

      {/* Centered Logo */}
      <div className="flex justify-center mt-12">
        <Link to="/" className="block group">
          <img 
            src={logo} 
            alt="Avalanche Recordings" 
            className="h-24 sm:h-28 md:h-36 lg:h-40 w-auto transition-opacity duration-300 group-hover:opacity-70"
          />
        </Link>
      </div>
    </header>
  );
}
