import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-400 flex items-center justify-center">
                <span className="text-black text-base font-bold">💧</span>
              </div>
              <span className="text-xl font-semibold text-white">
                Quick<span className="text-cyan-400">Pure</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-4">
              Pure Water. Elevated Living.
            </p>

            <div className="flex items-center gap-3">
              <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-cyan-400/20 transition">
                <Facebook size={14} />
              </a>
              <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-cyan-400/20 transition">
                <Instagram size={14} />
              </a>
              <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-cyan-400/20 transition">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-3 text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Products</li>
              <li className="hover:text-white cursor-pointer">Subscription</li>
              <li className="hover:text-white cursor-pointer">B2B</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-3 text-sm">
              Legal
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">
                Refund Policy
              </li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-3 text-sm">
              Contact Us
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-cyan-400" />
                info@quickpure.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-cyan-400" />
                +91 1800-XXX-XXXX
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-cyan-400" />
                Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-4 border-t border-white/10 text-gray-500 text-sm text-center md:text-left">
          © 2026 QuickPure. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
