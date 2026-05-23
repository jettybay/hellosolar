"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactCenter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Tab */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            onClick={() => setIsOpen(true)}
            className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-green-600 text-white py-4 px-1 rounded-l-lg shadow-lg hover:bg-green-700 transition-colors"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            <span className="text-sm font-bold tracking-wider uppercase">Center</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sliding Card */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-white shadow-2xl rounded-l-2xl overflow-hidden w-80"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 p-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>

              <div className="py-[10px] px-6 flex flex-col items-center text-center">
                <div className="relative w-24 h-24 mb-3 rounded-full overflow-hidden border-2 border-green-100 shadow-sm">
                  <Image
                    src="/images/center.png"
                    alt="Call Center"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">Call Center</h3>
                <p className="text-xs text-green-600 font-medium mb-3">We&apos;re here to help</p>

                <div className="w-full space-y-3">
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="flex items-center justify-center gap-2 mb-1 text-gray-500">
                      <Mail className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Email</span>
                    </div>
                    <a
                      href="mailto:Solarslotlimited007@gmail.com"
                      className="text-sm font-medium text-gray-900 break-all hover:text-green-700 block"
                    >
                      Solarslotlimited007@gmail.com
                    </a>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="flex items-center justify-center gap-2 mb-2 text-gray-500">
                      <Phone className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Call Us</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+2349020935919"
                        className="text-sm font-bold text-gray-900 hover:text-green-700"
                      >
                        +234 902 093 5919
                      </a>
                      <div className="h-px bg-gray-200 w-1/2 mx-auto" />
                      <a
                        href="tel:+2348158780400"
                        className="text-sm font-bold text-gray-900 hover:text-green-700"
                      >
                        +234 704 505 2537                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}