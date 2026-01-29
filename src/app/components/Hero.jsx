import Section from "./Section";
function Hero() {
  return (
      <Section className="relative w-full py-24 bg-black">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_55%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
          ✨ Premium FMCG Water Brand
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
          Pure Water.
          <br />
          <span className="text-cyan-400">Elevated Living.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Experience the pinnacle of hydration with our premium range of
          purified, mineral, and alkaline water.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-lg bg-cyan-400 text-black font-medium hover:bg-cyan-300 transition flex items-center gap-2">
            Explore Products →
          </button>

          <button className="px-8 py-4 rounded-lg border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 transition">
            Start Subscription
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex justify-center">
          <div className="w-6 h-10 rounded-full border border-cyan-400/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </div>

      </div>
  </Section>
  );
}

export default Hero;
