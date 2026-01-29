import { motion } from "framer-motion";
import Section from "./Section.jsx"
const products = [
  {
    title: "Fresh Neer",
    subtitle: "Packaged Drinking Water",
    note: "Daily use, mass market",
    badge: null,
    image: "https://images.unsplash.com/photo-1560847468-5eef330f455a",
  },
  {
    title: "Fresh Neer Blue",
    subtitle: "Premium Mineral Water",
    note: "Premium / Hospitality / Lifestyle",
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    title: "Quick Pure Alkaline Water",
    subtitle: "Alkaline Enhanced Water",
    note: "Health-focused, high margin",
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1615485925873-0c0e3fa9f7c3",
  },
  {
    title: "Quick Pure 20L Jar",
    subtitle: "Subscription Based Water Delivery",
    note: "Home & Office",
    badge: "Subscription",
    image: "https://images.unsplash.com/photo-1581091012184-7d1e2c3d97b4",
  },
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Products() {
  return (
    <Section className="relative w-full py-24 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true , margin: "-80px"}}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-16 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-white">
          Our <span className="text-cyan-400">Premium Range</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Discover our carefully curated water collection, designed for every
          lifestyle and occasion.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6"
      >
        {products.map((p, i) => (
          <motion.div
            key={i}
            variants={card}
            className="relative group rounded-2xl overflow-hidden bg-zinc-900/40 border border-white/10 hover:border-cyan-400/40 transition"
          >
            {/* Image */}
            <div className="h-[320px] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover scale-105 group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Badge */}
            {p.badge && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/90 text-black">
                {p.badge}
              </div>
            )}

            {/* Content */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-serif text-white">
                {p.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{p.subtitle}</p>
              <p className="text-sm text-cyan-400 mt-2">{p.note}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export default Products;
