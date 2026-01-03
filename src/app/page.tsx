"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  PhoneCall,
  Sun,
  Wrench,
  Bot,
  Phone,
  TrendingUp,
  Shield,
  X
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FloatingChat from "@/components/FloatingChat";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">

      {/* =========================
          2️⃣ HERO SECTION
      ========================== */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: 'url("/images/solar-support.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative container mx-auto px-4 py-20 sm:px-6 sm:py-32 lg:t-32 text-center">
          <img
            src="/images/hello-solar-logo2.jpeg"
            alt="Hello Solar Logo"
           
            className="w-24 h-24 mx-auto mb-6 rounded-full border-3 border-yellow-300"
          />

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hello Solar!☀️
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-200">
            24/7 Everything about Solar Energy Helpline
          </p>

          <Badge className="bg-yellow-400 text-black mb-6">
            A Subsidiary of Solar Slot Limited
          </Badge>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
           <Link href="tel:09020935919">
            <Button
              size="lg"
            className="border-white text-black hover:bg-white hover:text-yellow-400"
            >
              Call Our Agents
            </Button>
           </Link>
           

            <Link href="/chat">
              <Button
                size="lg"
                className="border-white text-black hover:bg-white hover:text-yellow-400"
              >
                Talk to AI Assistant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          PROMOTIONAL ADS
      ========================== */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 md:gap-8 items-center">
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onClick={() => setSelectedImage("/images/ads1.jpeg")}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-2xl overflow-hidden shadow-2xl group"
              >
                <Image
                  src="/images/ads1.jpeg"
                  alt="Special Solar Offer 1"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, rotate: 180, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onClick={() => setSelectedImage("/images/ads2.jpeg")}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl group"
              >
                <Image
                  src="/images/ads2.jpeg"
                  alt="Special Solar Offer 2"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================
          3️⃣ SUPPORT SERVICES
      ========================== */}
      <section className="py-2 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            How We Support You
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <PhoneCall className="w-10 h-10 text-red-500" />
                <CardTitle>Emergency Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Instant Issue Rectification</li>
                  <li>✓ Inspection</li>
                  <li>✓ Replacement & Repair</li>
                  <li>✓ Re-installation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Sun className="w-10 h-10 text-yellow-500" />
                <CardTitle>Enquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ General Consultation</li>
                  <li>✓ Product Purchase & Delivery</li>
                  <li>✓ Installation Support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="w-10 h-10 text-green-500" />
                <CardTitle>Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Installer Hotline</li>
                  <li>✓ On-site Guidance</li>
                  <li>✓ Physical Expert Deployment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* =========================
          4️⃣ AI & CALL CENTER
      ========================== */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Smart Call Center Technology
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <Bot className="w-12 h-12 mx-auto text-yellow-400" />
              <h3 className="font-semibold text-lg mt-4">AI Automation</h3>
              <p className="text-gray-300 mt-2">
                24/7 AI-powered solar assistance
              </p>
            </div>

            <div>
              <Phone className="w-12 h-12 mx-auto text-red-400" />
              <h3 className="font-semibold text-lg mt-4">
                Inbound & Outbound Calls
              </h3>
              <p className="text-gray-300 mt-2">
                MTN & enterprise call routing
              </p>
            </div>

            <div>
              <TrendingUp className="w-12 h-12 mx-auto text-green-400" />
              <h3 className="font-semibold text-lg mt-4">
                Performance Tracking
              </h3>
              <p className="text-gray-300 mt-2">
                Agent KPIs & analytics
              </p>
            </div>

            <div>
              <Shield className="w-12 h-12 mx-auto text-yellow-300" />
              <h3 className="font-semibold text-lg mt-4">
                Secure & Compliant
              </h3>
              <p className="text-gray-300 mt-2">
                NDPR & call recording compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          5️⃣ CALL TO ACTION
      ========================== */}
      <section className="py-20 bg-green-600 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Speak to a Solar Expert Now
        </h2>

        <p className="text-xl mb-8">
          Emergency, technical support, or solar consultation
        </p>

        <Button
          size="lg"
          className="bg-red-500 hover:bg-red-600"
        >
          📞 Call 09020935919
        </Button>
      </section>

      {/* Footer */}
      <Footer />

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-3xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors p-2"
              >
                <X size={32} />
              </button>
              <Image
                src={selectedImage}
                alt="Special Offer Full View"
                width={800}
                height={1000}
                className="rounded-xl shadow-2xl object-contain max-h-[85vh] w-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Component */}
      <FloatingChat />

    </main>
    </>
  );
}
