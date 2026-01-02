"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center">
        <div className="flex flex-col items-center space-y-6 text-center">
          {/* Company Info */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-yellow-400">
              A Subsidiary of Solar Slot Limited
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-medium mb-3">Follow Us</h4>
            <div className="flex justify-center gap-3">
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
              <a
                href="https://www.tiktok.com/@solarslotzng"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon tiktok w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
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

