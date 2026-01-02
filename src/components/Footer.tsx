"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/hello-solar-logo2.jpeg"
                alt="Hello Solar Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-white">Hello Solar</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted partner for 24/7 solar energy support, expert guidance, 
              and professional installation services.
            </p>
            <p className="text-sm font-medium text-yellow-400">
              A Subsidiary of Solar Slot Limited
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/howitworks" className="text-sm hover:text-green-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-sm hover:text-green-400 transition-colors">
                  Chat with AI
                </Link>
              </li>
              <li>
                <Link href="tel:09020935919" className="text-sm hover:text-green-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Emergency Support</li>
              <li className="text-sm">Enquiries & Consultation</li>
              <li className="text-sm">Installation Coordination</li>
              <li className="text-sm">Solar Office Locator</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  A10 Suite, Staklin Plaza, 7 Akowonjo Road, Egba, Lagos.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="tel:09020935919" className="text-sm hover:text-green-400 transition-colors">
                  09020935919
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="mailto:support@hello-solar.com" className="text-sm hover:text-green-400 transition-colors">
                  support@hello-solar.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/hellosolar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/hellosolar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/hellosolar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/company/hello-solar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-sm">
            © {currentYear} Hello Solar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

