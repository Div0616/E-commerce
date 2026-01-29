import { Clock, PauseCircle, Lock } from "lucide-react";

function Subscription() {
  return (
    <section className="w-full py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-cyan-400/20 bg-gradient-to-br from-cyan-950/40 via-black to-black">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10 lg:p-16">
            
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
                ⏱ Subscription Service
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Never Run Out of{" "}
                <span className="text-cyan-400">Pure Water</span>
              </h2>

              {/* Description */}
              <p className="mt-5 text-gray-400 max-w-xl leading-relaxed">
                Subscribe to our 20L jar delivery service. Flexible schedules,
                hassle-free management, and never worry about water again.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock size={20} className="text-cyan-400" />
                  <span>Flexible delivery schedules</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <PauseCircle size={20} className="text-cyan-400" />
                  <span>Pause or resume anytime</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Lock size={20} className="text-cyan-400" />
                  <span>Secure auto-payment</span>
                </div>
              </div>

              {/* CTA */}
              <button className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-cyan-400 text-black font-medium hover:bg-cyan-300 transition">
                Start Subscription →
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091012184-7d1e2c3d97b4"
                  alt="Subscription Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
