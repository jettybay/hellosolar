import {
  PhoneCall,
  Sun,
  Wrench,
  Bot,
  Phone,
  TrendingUp,
  Shield
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FloatingChat from "@/components/FloatingChat";

export default function HomePage() {
  return (
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
          minHeight: "780px"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative container mx-auto px-6 pt-32 text-center">
          <img
            src="/images/hello-solar-logo.jpeg"
            alt="Hello Solar Logo"
            className="w-24 h-24 mx-auto mb-6"
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
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600"
            >
              Call Our Agents
            </Button>

            <Link href="/chat">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Talk to AI Assistant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          3️⃣ SUPPORT SERVICES
      ========================== */}
      <section className="py-20 bg-gray-50">
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

      {/* =========================
          6️⃣ FOOTER
      ========================== */}
      <footer className="bg-slate-950 text-gray-400 py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-semibold text-white">
            Hello Solar!
          </p>
          <p className="mt-2">
            A Subsidiary of Solar Slot Limited
          </p>
          <p className="mt-4 text-sm">
            © {new Date().getFullYear()} Hello Solar. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Chat Component */}
      <FloatingChat />

    </main>
  );
}
