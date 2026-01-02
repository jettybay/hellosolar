"use client";

import { useState } from "react";
import {
  PhoneCall,
  MapPin,
  Wrench,
  Zap,
  CheckCircle,
  Sun,
  Shield,
  Bot,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  Clock,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import FloatingChat from "@/components/FloatingChat";
import Footer from "@/components/Footer";

// Navigation Component
function Navbar() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/howitworks" },
    { label: "Chat", href: "/chat" },
    { label: "Contact", href: "tel:09020935919" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/hello-solar-logo2.jpeg"
            alt="Hello Solar Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-primary-700 hidden sm:block">
            Hello Solar
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="tel:09020935919">Call Now</Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <VisuallyHidden>
              <SheetTitle>Mobile Navigation Menu</SheetTitle>
            </VisuallyHidden>
            <div className="flex flex-col space-y-6 mt-20 px-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg text-gray-700 hover:text-primary-600 font-medium flex items-center gap-2"
                  >
                    {item.label}
                    {item.label === "Contact" && (
                      <PhoneCall className="w-4 h-4" />
                    )}
                  </Link>
                ))}
              </div>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href="tel:09020935919">
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Call 09020935919
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

// Step Card Component
function StepCard({
  icon: Icon,
  title,
  description,
  stepNumber,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  stepNumber: number;
}) {
  return (
    <Card className="relative group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
      <div className="absolute -top-4 left-6 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        <span className="text-white font-bold text-lg">{stepNumber}</span>
      </div>
      <CardContent className="pt-12 pb-6">
        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors duration-300">
          <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

// Service Card Component
function ServiceCard({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: string[];
  icon?: React.ElementType;
}) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-gray-200">
      <CardHeader>
        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-3">
          {Icon ? (
            <Icon className="w-6 h-6 text-yellow-600" />
          ) : (
            <CheckCircle className="w-6 h-6 text-green-600" />
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

// Pricing Card Component
function PricingCard({
  name,
  price,
  features,
  highlight = false,
}: {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <Card
      className={`relative transition-all duration-300 hover:shadow-xl ${
        highlight
          ? "border-green-500 border-2 shadow-xl scale-105"
          : "border-gray-200"
      }`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="bg-green-600 hover:bg-green-700">
            <Sparkles className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-gray-900">
          {name}
        </CardTitle>
        <div className="text-3xl font-bold text-green-600 mt-2">{price}</div>
        <CardDescription className="text-center">
          {name === "Basic" && "For casual inquiries"}
          {name === "Pro" && "For ongoing support needs"}
          {name === "Enterprise" && "For businesses & installers"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${
            highlight
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-900 hover:bg-gray-800"
          }`}
        >
          Get Started
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}

// Feature Card Component
function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group text-center p-6 rounded-2xl hover:bg-white/50 transition-colors duration-300">
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Add-On Card Component
function AddonCard({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: string;
}) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-yellow-200 bg-gradient-to-br from-yellow-50 to-white">
      <CardHeader>
        <Badge variant="outline" className="w-fit bg-yellow-100 text-yellow-800">
          Add-On Service
        </Badge>
        <CardTitle className="text-xl mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-2xl font-bold text-yellow-600">{price}</div>
      </CardContent>
    </Card>
  );
}

// Stat Card Component
function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="text-4xl font-bold text-white mb-1">{value}</div>
      <div className="text-green-100">{label}</div>
    </div>
  );
}

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState("process");

  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* =========================
            HERO SECTION
        ========================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6">
                <Sun className="w-3 h-3 mr-1" />
                Your Trusted Solar Support Partner
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                How Hello-Solar Works
              </h1>

              <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Instant solar support, expert guidance, and trusted service
                providers — all in one platform. Get your solar issues resolved
                in minutes.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-green-700 hover:bg-green-50"
                  asChild
                >
                  <Link href="tel:09020935919">
                    <PhoneCall className="w-5 h-5 mr-2" />
                    Call Now: 09020935919
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/chat">
                    <Bot className="w-5 h-5 mr-2" />
                    Chat with AI
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                className="fill-background"
              />
            </svg>
          </div>
        </section>

        {/* =========================
            STATS SECTION
        ========================== */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard icon={Clock} value="24/7" label="Available" />
              <StatCard icon={Users} value="500+" label="Experts" />
              <StatCard icon={Award} value="98%" label="Satisfaction" />
              <StatCard icon={Wrench} value="10k+" label="Resolved" />
            </div>
          </div>
        </section>

        {/* =========================
            PROCESS STEPS
        ========================== */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
                Simple Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Get Support
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Getting help with your solar system is easy. Follow these three
                simple steps to get started.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-32 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200 z-0"></div>

              <StepCard
                icon={PhoneCall}
                title="Request Support"
                description="Reach us via phone or WhatsApp for instant troubleshooting, consultations, or urgent solar issues."
                stepNumber={1}
              />
              <StepCard
                icon={Zap}
                title="Get Expert Help"
                description="Our solar experts diagnose issues, guide you remotely, or schedule on-site assistance when required."
                stepNumber={2}
              />
              <StepCard
                icon={Wrench}
                title="Resolve & Optimize"
                description="Problems are fixed, systems optimized, and you get clear recommendations for long-term performance."
                stepNumber={3}
              />
            </div>
          </div>
        </section>

        {/* =========================
            SERVICES SECTION
        ========================== */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                What We Offer
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Services We Provide
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive solar support services tailored to meet all your
                energy needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                title="Emergency Support"
                items={[
                  "Instant issue resolution",
                  "System inspection",
                  "Component replacement",
                  "Re-installation services",
                ]}
              />
              <ServiceCard
                title="Enquiries & Consultation"
                items={[
                  "General solar consultation",
                  "Product recommendations",
                  "Purchase & delivery",
                ]}
              />
              <ServiceCard
                title="Installation Coordination"
                items={[
                  "Technical installer support",
                  "On-call guidance",
                  "Fault rectification",
                  "Expert dispatch",
                ]}
              />
              <ServiceCard
                title="Solar Office Locator"
                items={[
                  "Find nearest solar office",
                  "Google-linked shops",
                  "Service centers",
                ]}
                icon={MapPin}
              />
            </div>
          </div>
        </section>

        {/* =========================
            FEATURES SECTION
        ========================== */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-500/20 text-green-300 hover:bg-green-500/30">
                Smart Technology
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Hello-Solar?
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Powered by advanced technology and backed by industry experts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={Bot}
                title="AI Automation"
                description="24/7 AI-powered solar assistance for instant responses"
              />
              <FeatureCard
                icon={PhoneCall}
                title="Call Center"
                description="Professional MTN & enterprise call routing system"
              />
              <FeatureCard
                icon={TrendingUp}
                title="Performance Tracking"
                description="Agent KPIs & analytics for continuous improvement"
              />
              <FeatureCard
                icon={Shield}
                title="Secure & Compliant"
                description="NDPR compliance & secure call recording"
              />
            </div>
          </div>
        </section>

        {/* =========================
            ADD-ON SERVICES
        ========================== */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                Extra Value
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Add-On Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Enhance your experience with our premium add-on services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <AddonCard
                title="Extended On-site Support"
                description="Major repairs, battery/inverter replacement, or full re-installation by certified experts."
                price="Fee based on materials + labor"
              />
              <AddonCard
                title="Installer Support Subscription"
                description="Training, technical guidance, and on-site backup for solar installers."
                price="₦20,000 – ₦50,000 / month"
              />
              <AddonCard
                title="Solar Office Locator Listing"
                description="List your solar shop or service center on our platform for maximum visibility."
                price="₦15,000 – ₦30,000 / year"
              />
            </div>
          </div>
        </section>

        {/* =========================
            SUBSCRIPTION PACKAGES
        ========================== */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
                Choose Your Plan
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Subscription Packages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Flexible plans designed for individuals, businesses, and solar
                professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingCard
                name="Basic"
                price="Free"
                features={[
                  "AI chatbot access",
                  "Basic solar FAQs",
                  "General inquiries",
                  "Email support",
                ]}
              />
              <PricingCard
                name="Pro"
                price="₦5,000/mo"
                features={[
                  "Priority phone support",
                  "Remote diagnostics",
                  "Urgent issue escalation",
                  "WhatsApp support",
                ]}
                highlight={true}
              />
              <PricingCard
                name="Enterprise"
                price="Custom"
                features={[
                  "Dedicated account manager",
                  "On-site support included",
                  "Bulk discounts",
                  "API access",
                  "White-label options",
                ]}
              />
            </div>
          </div>
        </section>

        {/* =========================
            CTA SECTION
        ========================== */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-green-100 text-lg max-w-2xl mx-auto mb-8">
              Contact us now for instant solar support or subscribe to unlock
              premium features.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50"
                asChild
              >
                <Link href="tel:09020935919">
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Call 09020935919
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/chat">
                  <Bot className="w-5 h-5 mr-2" />
                  Chat with AI
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-green-200 text-sm">
              A Subsidiary of Solar Slot Limited
            </p>
          </div>
        </section>

        <Footer />

        {/* Floating Chat Component */}
        <FloatingChat />
      </main>
    </>
  );
}

