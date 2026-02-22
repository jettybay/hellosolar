"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  BatteryCharging,
  Sun,
  Zap,
  ShieldCheck,
  Truck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface Product {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  imageAlt: string;
  imageDescription: string;
  price: string;
  features?: string[];
}

const products: Product[] = [
  {
    title: "500W/1000kWh Solar Generator (Wall-Mount, No Panel)",
    description:
      "Compact wall-mounted backup power solution for essential loads. Solar panel not included.",
    icon: <Zap />,
    image: "/images/500w-1000kwh.jpeg",
    imageAlt: "500W/1000kWh wall-mounted solar generator without panel",
    imageDescription: "Reliable backup power in a compact, wall-mounted form factor",
    price: "₦370,000",
  },
  {
    title: "1000W/2000kWh Solar Generator (Wall-Mount, No Panel)",
    description:
      "Higher-capacity wall-mounted solar generator for improved runtime. Solar panel not included.",
    icon: <Zap />,
    image: "/images/1000w-2000kwh.jpeg",
    imageAlt: "1000W/2000kWh wall-mounted solar generator without panel",
    imageDescription: "Stable pure power delivery for home and office essentials",
    price: "₦580,000",
  },
  {
    title: "25W Solar Fan",
    description:
      "Energy-efficient solar fan ideal for personal cooling with minimal power draw.",
    icon: <Sun />,
    image: "/images/25w-solar-fan.jpeg",
    imageAlt: "25W solar-powered fan",
    imageDescription: "Quiet, efficient airflow powered by the sun",
    price: "₦65,000",
  },
  {
    title: "200Ah Lead-Acid Battery",
    description:
      "A robust 200Ah lead-acid battery for dependable energy storage and backup power.",
    icon: <BatteryCharging />,
    image: "/images/200ah-lead-acid-battery.jpeg",
    imageAlt: "200Ah lead-acid battery",
    imageDescription: "Durable, high-capacity storage for off-grid and backup systems",
    price: "₦300,000",
  },
  {
    title: "Solar Table Fan 1",
    description:
      "Compact solar table fan with consistent airflow for desks and bedside cooling.",
    icon: <Sun />,
    image: "/images/solar-table-fan-1.jpeg",
    imageAlt: "Solar table fan model 1",
    imageDescription: "Portable solar-powered cooling solution for everyday use",
    price: "₦55,000",
  },
  {
    title: "Solar Table Fan 2",
    description:
      "Enhanced solar table fan with efficient blades and quiet operation.",
    icon: <Sun />,
    image: "/images/solar-table-fan-2.jpeg",
    imageAlt: "Solar table fan model 2",
    imageDescription: "Reliable airflow with low power consumption",
    price: "₦55,000",
  },
  {
    title: "Solar Standing Fan",
    description:
      "Adjustable-height solar standing fan providing wide-area cooling.",
    icon: <Sun />,
    image: "/images/solar-standing-fan.jpeg",
    imageAlt: "Solar standing fan",
    imageDescription: "Powerful solar-powered ventilation for larger rooms",
    price: "₦65,000",
  },
  {
    title: "2KW/1000W Solar Generator (No Panel)",
    description:
      "High-output solar generator for heavier loads. Solar panel not included.",
    icon: <Zap />,
    image: "/images/2kw-1000w.jpeg",
    imageAlt: "2KW/1000W solar generator without panel",
    imageDescription: "Reliable performance for appliances and office equipment",
    price: "₦680,000",
  },
  {
    title: "16KW / 51.2V Lithium Battery",
    description:
      "Premium lithium battery pack delivering high capacity and long cycle life.",
    icon: <BatteryCharging />,
    image: "/images/16kw-51.2v.jpeg",
    imageAlt: "16KW 51.2V lithium battery",
    imageDescription: "High-density storage for advanced solar and backup systems",
    price: "₦1,900,000",
  },
];

const stats = [
  { value: "500+", label: "Installations" },
  { value: "2000+", label: "Happy Customers" },
  { value: "5MW+", label: "Solar Capacity" },
  { value: "5 Years", label: "Warranty" },
];

export default function ProductsPage() {
  const [active, setActive] = useState<Product | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    if (active) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!active) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [active]);

  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      <Navbar />


      {/* PRODUCTS */}
      <section className="py-24" id="products">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our curated selection of solar solutions and accessories with transparent pricing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setActive(product)}
                onKeyDown={(e) => { if (e.key === "Enter") setActive(product); }}
                role="button"
                tabIndex={0}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="text-green-600 w-8 h-8">{product.icon}</div>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-xl bg-green-600 text-white text-sm font-semibold px-3 py-2 shadow-lg ring-1 ring-white/20">
                      {product.price}
                    </span>
                  </div>
                  
                  {/* Image Description */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2">
                      {product.imageDescription}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                      {product.title}
                    </h3>
                    <span className="shrink-0 inline-flex items-center rounded-lg bg-green-50 text-green-700 text-sm font-semibold px-3 py-1 ring-1 ring-green-100">
                      {product.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {product.features?.length ? (
                    <div className="space-y-3">
                      {product.features?.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                          </div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY SHOWCASE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Product Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Browse through our collection of installed solar systems and products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setActive(product)}
                onKeyDown={(e) => { if (e.key === "Enter") setActive(product); }}
                role="button"
                tabIndex={0}
                className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-green-400 mb-2">{product.icon}</div>
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <h4 className="text-white text-lg md:text-xl font-bold">
                        {product.title}
                      </h4>
                      <span className="shrink-0 inline-flex items-center rounded-lg bg-white/15 text-white text-xs font-semibold px-2.5 py-1 ring-1 ring-white/20">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {product.imageDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY & SUPPORT */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Hello-Solar?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We deliver excellence in every aspect of our service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.5 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Nationwide Delivery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fast and reliable delivery to any location in Nigeria. 
                We ensure your products arrive safely and on time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Quality Assurance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All products are tested, certified, and backed by warranty. 
                We only sell products that meet our high standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Expert Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional guidance for product selection and installation. 
                Our team is here to help you every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

            {/* STATS BAR */}
      <section className="bg-gray-50 py-12 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-24 bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 text-white relative overflow-hidden"> */}
        {/* Decorative Elements */}
        {/* <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sun className="w-5 h-5" />
            <span className="text-sm font-medium">Get Started Today</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Power Your Space with Solar?
          </h2>
          <p className="text-xl opacity-95 mb-10 max-w-2xl mx-auto">
            Contact Hello-Solar today for expert recommendations, competitive pricing, 
            and professional installation services.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              Call Us Now
            </button>
          </div>
        </motion.div>
      </section> */}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ scale: 0.98, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 12 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              role="dialog"
              aria-modal="true"
              className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {active && (
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                    <Image
                      src={active.image}
                      alt={active.imageAlt}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-xl bg-white/90 text-gray-900 text-xs font-semibold px-2.5 py-1 ring-1 ring-black/5">
                        {active.price}
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{active.title}</h3>
                      <button
                        aria-label="Close"
                        onClick={() => setActive(null)}
                        className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="mb-4 text-green-700 font-semibold inline-flex items-center bg-green-50 ring-1 ring-green-100 rounded-lg px-3 py-1">
                      {active.price}
                    </div>
                    <p className="text-gray-700 mb-5">{active.description}</p>
                    {active.features && active.features.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {active.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <span className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                            </span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setActive(null)}
                        className="px-5 py-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                      >
                        Close
                      </button>
                      <a
                        href="/contact"
                        className="px-5 py-2.5 rounded-lg bg-green-600 text-white hover:bg-green-700"
                      >
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
