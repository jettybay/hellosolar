"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  price: string;
  icon: React.ReactNode;
  image: string;
  imageAlt: string;
  imageDescription: string;
  features: string[];
}

const products: Product[] = [
  {
    title: "500W / 1000kWh Solar Generator (Wall-Mount, Without Panel)",
    description: "Compact, wall-mounted backup power for essential home and office loads.",
    price: "₦370,000",
    icon: <Zap />,
    image: "/images/500w:1000kwh.png",
    imageAlt: "500W/1000kWh wall-mounted solar generator without panel",
    imageDescription: "Space-saving wall-mount design, easy to maintain",
    features: [
      "Pure sine wave output",
      "Low noise, high efficiency",
      "Ideal for small appliances",
    ],
  },
  {
    title: "1000W / 2000kWh Solar Generator (Wall-Mount, Without Panel)",
    description: "Reliable power for medium loads with intelligent protection.",
    price: "₦580,000",
    icon: <Zap />,
    image: "/images/1000w:2000kwh.jpeg",
    imageAlt: "1000W/2000kWh wall-mounted solar generator without panel",
    imageDescription: "Stable output for TVs, routers, lighting and more",
    features: [
      "Advanced protections",
      "Fast charge-ready",
      "Wall-mount enclosure",
    ],
  },
  {
    title: "25W Solar Fan",
    description: "Energy-efficient fan powered by the sun for cooling anywhere.",
    price: "₦65,000",
    icon: <Sun />,
    image: "/images/25W Solar Fan.jpeg",
    imageAlt: "25W solar-powered fan",
    imageDescription: "Quiet operation with durable blades",
    features: [
      "Portable and lightweight",
      "Low power consumption",
      "Solar-ready charging",
    ],
  },
  {
    title: "A Lead‑Acid Battery with a Sufficient Capacity of 200Ah",
    description: "Dependable energy storage for backup and off‑grid use.",
    price: "₦300,000",
    icon: <BatteryCharging />,
    image: "/images/A lead-acid battery.jpeg",
    imageAlt: "200Ah lead-acid battery",
    imageDescription: "Robust 200Ah deep‑cycle storage",
    features: [
      "Deep-cycle performance",
      "Rugged build",
      "Maintenance-friendly",
    ],
  },
  {
    title: "Solar Table Fan 1",
    description: "Compact tabletop fan with efficient airflow.",
    price: "₦55,000",
    icon: <Sun />,
    image: "/images/Solar table fan 1.jpeg",
    imageAlt: "Solar table fan model 1",
    imageDescription: "Adjustable tilt with stable base",
    features: [
      "Silent motor",
      "Energy saving",
      "USB/solar charging",
    ],
  },
  {
    title: "Solar Table Fan 2",
    description: "Enhanced tabletop fan for personal cooling.",
    price: "₦55,000",
    icon: <Sun />,
    image: "/images/Solar table fan 2.jpeg",
    imageAlt: "Solar table fan model 2",
    imageDescription: "Sturdy build for daily use",
    features: [
      "Portable design",
      "Low power draw",
      "Multiple speed modes",
    ],
  },
  {
    title: "Solar Standing Fan",
    description: "Full-height solar standing fan for rooms and offices.",
    price: "₦65,000",
    icon: <Sun />,
    image: "/images/Solar standing fan.jpeg",
    imageAlt: "Solar standing fan",
    imageDescription: "Wide oscillation with steady airflow",
    features: [
      "Adjustable height",
      "Oscillation control",
      "Energy efficient",
    ],
  },
  {
    title: "2kW / 1000W Solar Generator (Without Panel)",
    description: "High-capacity generator for heavier household or small business loads.",
    price: "₦680,000",
    icon: <Zap />,
    image: "/images/2KW:1000W.jpeg",
    imageAlt: "2kW/1000W solar generator without panel",
    imageDescription: "Rugged design with reliable output",
    features: [
      "Pure sine wave",
      "Overload protection",
      "Expandable system",
    ],
  },
  {
    title: "16kW / 51.2V Lithium Battery",
    description: "High-density lithium storage for robust, long-life performance.",
    price: "₦1,900,000",
    icon: <BatteryCharging />,
    image: "/images/16KW: 51.2V.jpeg",
    imageAlt: "16kW 51.2V lithium battery module",
    imageDescription: "Compact rack-mount lithium storage",
    features: [
      "Long cycle life",
      "Fast charging",
      "BMS safety features",
    ],
  },
];

const stats = [
  { value: "500+", label: "Installations" },
  { value: "2000+", label: "Happy Customers" },
  { value: "5MW+", label: "Solar Capacity" },
  { value: "5 Years", label: "Warranty" },
];

export default function ProductsPage() {
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string; title: string; price?: string }>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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
              Premium Solar Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our comprehensive range of high-quality solar solutions, 
              designed to meet all your energy needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Image Section */}
                <div
                  className="relative h-64 md:h-72 overflow-hidden cursor-zoom-in"
                  role="button"
                  aria-label={`View ${product.title}`}
                  onClick={() => setLightbox({ src: product.image, alt: product.imageAlt, title: product.title, price: product.price })}
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="text-green-600 w-8 h-8">
                      {product.icon}
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-green-600 text-white rounded-xl px-3 py-2 shadow-lg font-semibold">
                    {product.price}
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
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3">
                    {product.features.map((feature, i) => (
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
                className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <div
                  className="aspect-[4/5] relative cursor-zoom-in"
                  role="button"
                  aria-label={`View ${product.title}`}
                  onClick={() => setLightbox({ src: product.image, alt: product.imageAlt, title: product.title, price: product.price })}
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute top-4 right-4 bg-green-600 text-white rounded-xl px-3 py-1.5 text-sm font-semibold shadow-lg">
                    {product.price}
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-green-400 mb-2">
                      {product.icon}
                    </div>
                    <h4 className="text-white text-xl font-bold mb-1">
                      {product.title}
                    </h4>
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="absolute -top-10 right-0 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 text-sm"
              >
                Close
              </button>
              <div className="relative w-full h-[70vh] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-white/90">
                <div className="text-lg font-semibold">{lightbox.title}</div>
                {lightbox.price ? (
                  <div className="bg-green-600 text-white rounded-lg px-3 py-1 font-semibold">
                    {lightbox.price}
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}