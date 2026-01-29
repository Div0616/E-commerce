import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Leaf } from "lucide-react";
import Section from "./Section";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "7-Stage Purification",
    desc: "Advanced multi-stage filtration ensures the purest water, removing impurities while retaining essential minerals.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Certified Quality",
    desc: "BIS certified and FSSAI approved. Our water meets the highest international quality standards.",
  },
  {
    icon: <Leaf size={28} />,
    title: "Sustainable Practices",
    desc: "Eco-friendly packaging and sustainable sourcing to protect the environment for future generations.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function WhyChoose() {
  return (
    <Section className="relative w-full py-28 bg-black">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px"}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center px-6 mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-white">
          Why Choose <span className="text-cyan-400">QuickPure</span>
        </h2>
        <p className="mt-5 text-gray-400 leading-relaxed">
          Committed to delivering the highest quality water through advanced
          purification and sustainable practices.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            className="relative rounded-2xl p-8 bg-zinc-900/40 border border-white/10 hover:border-cyan-400/40 transition"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-6">
              {item.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export default WhyChoose;
