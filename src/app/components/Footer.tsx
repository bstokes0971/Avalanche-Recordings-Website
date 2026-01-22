const aLogo = "/public/images/ar crop 2-modified.png";

export function Footer() {
  return (
    <footer className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Centered Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={aLogo} 
            alt="Avalanche Recordings" 
            className="w-24 h-24"
          />
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-gray-900">
          © 2026 Avalanche Recordings and Avalanche Records. All Rights Reserved.
        </p>

        {/* Contact Email */}
        <p className="mt-3 text-sm text-gray-700">
          <a
            href="mailto:contact@avalanche-recordings.com"
            className="underline hover:opacity-80 transition"
          >
            contact@avalanche-recordings.com
          </a>
        </p>
      </div>
    </footer>
  );
}

