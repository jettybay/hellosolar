"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-500 text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            Reach out for solar support, enquiries, partnerships, or technical assistance.
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          
          {/* CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <ContactItem
                icon={<MapPin />}
                title="Office Address"
                text="A10 Suite, Staklin Plaza, 7 Akowonjo Road, Egba, Lagos."
              />

              <ContactItem
                icon={<Phone />}
                title="Phone"
                text="+234 800 000 0000"
              />

              <ContactItem
                icon={<Mail />}
                title="Email"
                text="support@hello-solar.com"
              />
            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">
                Connect with us
              </h3>

              <div className="flex gap-5">
                <SocialIcon
                  icon={<Facebook />}
                  link="https://facebook.com/hellosolar"
                />
                <SocialIcon
                  icon={<Instagram />}
                  link="https://instagram.com/hellosolar"
                />
                <SocialIcon
                  icon={<Twitter />}
                  link="https://twitter.com/hellosolar"
                />
                <SocialIcon
                  icon={<Linkedin />}
                  link="https://linkedin.com/company/hello-solar"
                />
              </div>
            </div>
          </motion.div>

          {/* CONTACT FORM
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                Send Message
              </motion.button>
            </form> 
          </motion.div>*/}

        </div>
      </section>

      <Footer />
      <FloatingChat />
    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function ContactItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex gap-4"
    >
      <div className="text-green-600 mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </div>
    </motion.div>
  );
}

function SocialIcon({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="w-11 h-11 flex items-center justify-center rounded-full border hover:bg-green-600 hover:text-white transition"
    >
      {icon}
    </motion.a>
  );
}
