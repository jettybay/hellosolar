"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactCenter from "@/components/ContactCenter";
import FloatingChat from "@/components/FloatingChat";

export default function SolarConnectPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-900 overflow-hidden">
        {/* BANNER SECTION */}
        <section className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src="/images/Connect banner.jpeg"
            alt="Solar Connect Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center px-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Solar Connect
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-2xl mx-auto">
                Your Gateway to a Connected, Sustainable Future
              </p>
            </motion.div>
          </div>
        </section>

        {/* WELCOME SECTION */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Welcome to SolarConnect
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Your trusted platform for a connected, sustainable future. 
                Whether you're a homeowner, a business, or just curious, SolarConnect 
                links you to a nationwide solar community. Sign up today for personalized 
                support, exclusive offers, and expert guidance on your solar journey.
              </p>
            </motion.div>

            {/* FEATURES */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8 mt-12"
            >
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Support</h3>
                <p className="text-gray-600">Tailored assistance for your unique solar needs</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Exclusive Offers</h3>
                <p className="text-gray-600">Special deals and discounts for members</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                <p className="text-gray-600">Professional advice from solar specialists</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Q&A SECTION */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Q&A Section
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Help us understand your needs better. Answer these questions and we'll connect you with the right solar solutions.
              </p>
            </motion.div>

            {/* Q&A QUESTIONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 bg-gray-50 rounded-3xl p-8 md:p-12"
            >
              <QAItem
                number={1}
                question="Do you have a solar system?"
                answer="Yes / No"
              />
              <QAItem
                number={2}
                question="What is the Capacity?"
                answer="Please specify your system capacity (e.g., 1kW, 5kW, etc.)"
              />
              <QAItem
                number={3}
                question="Would you love Hellosolaar to be your maintenance partner of your solar system?"
                answer="Yes / No"
              />
              <QAItem
                number={4}
                question="What challenges are you currently facing?"
                answer="Tell us about any issues or concerns with your current solar setup"
              />
              <QAItem
                number={5}
                question="Tell us your plan and when you will be installing solar system?"
                answer="Share your installation timeline and requirements"
              />
            </motion.div>

            {/* GOOGLE FORM LINK */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                  Fill out our detailed form and our team will get back to you with personalized solar solutions.
                </p>
                <a
                  href="https://forms.gle/SkZJKRxkwzNL1mWo7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                >
                  Fill Out the Form
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT INFO SECTION */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Get In Touch
              </h2>
              <p className="text-gray-600">
                Have questions? We're here to help!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-md"
              >
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-green-600" />
                </div>
                <h4 className="font-bold mb-2">Phone</h4>
                <p className="text-gray-600">+2349020935919</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-white rounded-2xl shadow-md"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">Email</h4>
                <p className="text-gray-600">support@hellosolaar.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 bg-white rounded-2xl shadow-md"
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-yellow-600" />
                </div>
                <h4 className="font-bold mb-2">Office</h4>
                <p className="text-gray-600">A10 Suite, Staklin Plaza, Lagos</p>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
        <ContactCenter />
        <FloatingChat />
      </main>
    </>
  );
}

// Q&A Item Component
function QAItem({
  number,
  question,
  answer,
}: {
  number: number;
  question: string;
  answer: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
          {number}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 mb-2">
            {question}
          </h4>
          <p className="text-gray-600 bg-gray-100 rounded-lg px-4 py-3">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

