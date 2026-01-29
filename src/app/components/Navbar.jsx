import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-black via-zinc-900 to-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 rounded-lg bg-cyan-500 flex items-center justify-center">
            <span className="text-black font-bold text-lg">💧</span>
          </div>
          <span className="text-2xl font-semibold text-white">
            Quick<span className="text-cyan-400">Pure</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
          {["Products", "Subscription", "B2B", "About", "Contact"].map(
            (item) => (
              <li
                key={item}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            )
          )}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-gray-300">
          <ShoppingCart
            size={20}
            className="hover:text-white cursor-pointer transition"
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:text-white transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-zinc-950 border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-4 text-gray-300 text-sm font-medium">
            {["Products", "Subscription", "B2B", "About", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
