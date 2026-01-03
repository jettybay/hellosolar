"use client";

import { motion } from "framer-motion";
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

interface Product {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  imageAlt: string;
  imageDescription: string;
  features: string[];
}

const products: Product[] = [
  {
    title: "Solar Panels",
    description:
      "High-efficiency solar panels designed for residential, commercial, and industrial energy needs. Capture the power of the sun and convert it into clean, renewable electricity for your home or business.",
    icon: <Sun />,
    image: "/images/Solar System.jpeg",
    imageAlt: "Solar panels installed on a rooftop",
    imageDescription: "Premium monocrystalline solar panels with high conversion efficiency",
    features: [
      "High power output",
      "Durable & weather-resistant",
      "Long lifespan warranty",
    ],
  },
  {
    title: "Inverters",
    description:
      "Reliable inverters that ensure stable power conversion and system performance. Our inverters deliver pure sine wave output for safe operation of all your appliances and electronics.",
    icon: <Zap />,
    image: "/images/Inverter.jpeg",
    imageAlt: "Modern inverter device",
    imageDescription: "Advanced pure sine wave inverter with smart energy management",
    features: [
      "Pure sine wave output",
      "Smart energy management",
      "Supports hybrid systems",
    ],
  },
  {
    title: "Batteries",
    description:
      "Long-lasting battery solutions for energy storage and uninterrupted power supply. Store excess solar energy and enjoy reliable backup power during grid outages.",
    icon: <BatteryCharging />,
    image: "/images/Installed Inverter.jpeg",
    imageAlt: "Installed battery system",
    imageDescription: "Deep-cycle lithium batteries with fast charging technology",
    features: [
      "Deep-cycle technology",
      "Lithium & tubular options",
      "Fast charging & safety protection",
    ],
  },
  {
    title: "Protection & Accessories",
    description:
      "Complete range of solar accessories for system safety and performance optimization. From surge protectors to mounting structures, we have everything you need.",
    icon: <ShieldCheck />,
    image: "/images/Solar Street light.jpeg",
    imageAlt: "Solar street light installation",
    imageDescription: "Complete solar accessories including cables, mounts, and surge protection",
    features: [
      "Surge protectors",
      "Charge controllers",
      "Cables & mounting structures",
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
  return (
    <main className="bg-white text-gray-900 overflow-hidden">


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
                    <div className="text-green-600 w-8 h-8">
                      {product.icon}
                    </div>
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
                <div className="aspect-[4/5] relative">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
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

      <Footer />
    </main>
  );
}

